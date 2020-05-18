module.exports = function (Blockly) {
	'use strict';

Blockly.JavaScript['motor_setup'] = function(block) {
	let code = 
			`#EXTINC#include "moves.c"#END
			#SETUPmotorSetup();#END`;
   return code;
};

Blockly.JavaScript['motor_stop'] = function(block) {
	let code = 
			`#LOOP_EXT_CODE 
			stp();
			#END`;
   return code;
};

Blockly.JavaScript['motor_fwd_dt'] = function(block) {
	var speed = block.getFieldValue('SPEED');
	var cins = block.getFieldValue('CINS');
	var val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
	let code = 
			`#LOOP_EXT_CODE 
			fwd`+cins+`(`+speed+`,`+val+`);
			#END`;
			
   return code;
};

Blockly.JavaScript['motor_bwd_dt'] = function(block) {
	var speed = block.getFieldValue('SPEED');
	var cins = block.getFieldValue('CINS');
	var val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
	let code = 
			`#LOOP_EXT_CODE 
			bwd`+cins+`(`+speed+`,`+val+`);
			#END`;
			
   return code;
};

Blockly.JavaScript['motor_fwd_speed'] = function(block) {
	var speed = block.getFieldValue('SPEED');
	let code = 
			`#LOOP_EXT_CODE 
			fwd(`+speed+`);
			#END`;
			
   return code;
};

Blockly.JavaScript['motor_bwd_speed'] = function(block) {
	var speed = block.getFieldValue('SPEED');
	let code = 
			`#LOOP_EXT_CODE 
			bwd(`+speed+`);
			#END`;
			
   return code;
};

Blockly.JavaScript['motor_rgt_dt'] = function(block) {
	var mod = block.getFieldValue('MOD');
	var speed = block.getFieldValue('SPEED');
	var cins = block.getFieldValue('CINS');
	var val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
	let code = 
			`#LOOP_EXT_CODE 
			rgt`+cins+``+mod+`(`+speed+`,`+val+`);
			#END`;
			
   return code;
};

Blockly.JavaScript['motor_lft_dt'] = function(block) {
	var mod = block.getFieldValue('MOD');
	var speed = block.getFieldValue('SPEED');
	var cins = block.getFieldValue('CINS');
	var val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
	let code = 
			`#LOOP_EXT_CODE 
			lft`+cins+``+mod+`(`+speed+`,`+val+`);
			#END`;
			
   return code;
};

Blockly.JavaScript['motor_rgt_speed'] = function(block) {
	var mod = block.getFieldValue('MOD');
	var speed = block.getFieldValue('SPEED');
	let code = 
			`#LOOP_EXT_CODE 
			rgt`+mod+`(`+speed+`);
			#END`;
			
   return code;
};

Blockly.JavaScript['motor_lft_speed'] = function(block) {
	var mod = block.getFieldValue('MOD');
	var speed = block.getFieldValue('SPEED');
	let code = 
			`#LOOP_EXT_CODE 
			lft`+mod+`(`+speed+`,`+val+`);
			#END`;
			
   return code;
};
	
}