module.exports = function (Blockly) {
	'use strict';
	
Blockly.JavaScript['rotary_setup'] = function(block) {
		var alt = Blockly.JavaScript.valueToCode(block, 'ALT', Blockly.JavaScript.ORDER_NONE);
		var ust = Blockly.JavaScript.valueToCode(block, 'UST', Blockly.JavaScript.ORDER_NONE);
		var checkbox_sorgu = (block.getFieldValue('SORGU') == 'TRUE')? 'true' : 'false';
		let code = 
			`#EXTINC#include "AiEsp32RotaryEncoder.h"#END
			#VARIABLEAiEsp32RotaryEncoder rotaryEncoder = AiEsp32RotaryEncoder(32, 35, 33);#END
			#FUNCTION 
			int rotary_delta() {
				int16_t encoderDelta = rotaryEncoder.encoderChanged();
				if (encoderDelta > 0) return 1;
				else if (encoderDelta < 0) return -1;
				else return 0;
			}
			#END
			#SETUP
			rotaryEncoder.begin();
			rotaryEncoder.setup([] {rotaryEncoder.readEncoder_ISR();});
			rotaryEncoder.setBoundaries(`+alt+`, `+ust+`, ${checkbox_sorgu});
			#END
			#LOOP_EXT_CODEif (millis() > 20000) rotaryEncoder.enable ();#END
			`;
			
   return code;
};

Blockly.JavaScript['rotary_set_bound'] = function(block) {
		var alt = Blockly.JavaScript.valueToCode(block, 'ALT', Blockly.JavaScript.ORDER_NONE);
		var ust = Blockly.JavaScript.valueToCode(block, 'UST', Blockly.JavaScript.ORDER_NONE);
		var checkbox_sorgu = (block.getFieldValue('SORGU') == 'TRUE')? 'true' : 'false';
		let code = 
			`#LOOP_EXT_CODE rotaryEncoder.setBoundaries(`+alt+`, `+ust+`, ${checkbox_sorgu});#END
			`;
			
   return code;
};

Blockly.JavaScript['rotary_delta'] = function(block) {
   let code = 'rotary_delta()';
   return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rotary_read'] = function(block) {
   let code = 'rotaryEncoder.readEncoder()';
   return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rotary_button'] = function(block) {
  var status = block.getFieldValue('STATUS');
  var statements_event_do = Blockly.JavaScript.statementToCode(block, 'event_do');
  var code = `#LOOP_EXT_CODE  if(rotaryEncoder.currentButtonState() == ${status}){
    ${statements_event_do}
  }\n#END`;
  return code;
};

	
}