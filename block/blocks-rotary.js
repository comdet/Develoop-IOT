const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
	'use strict';

	var basic_colour = Blockly.Msg.BASIC_HUE;
	
	Blockly.Blocks['rotary_setup'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("Rotary Encoder Ayarla");
			this.appendValueInput("ALT")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Alt Sınır:");
			this.appendValueInput("UST")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Üst Sınır:");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(230);
			this.setTooltip("Rotary Setup");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['rotary_set_bound'] = {
		init: function() {
			this.appendValueInput("ALT")
				.appendField("Sınırları Ayarla →")
				.appendField("Alt Sınır:");
			this.appendValueInput("UST")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Üst Sınır:");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(230);
			this.setInputsInline(true);
			this.setTooltip("Rotary set");
			this.setHelpUrl("");
		}
	};
	
	
	Blockly.Blocks['rotary_read'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("Encoder oku");
			this.setOutput(true);
			this.setColour(135);
			this.setTooltip("Encoder oku");
			this.setHelpUrl("http://kivblocks.kivvi.com.tr");
		}
	};
	
	
	Blockly.Blocks['rotary_delta'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("Delta oku");
			this.setOutput(true);
			this.setColour(135);
			this.setTooltip("Delta oku");
			this.setHelpUrl("http://kivblocks.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['rotary_button'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("Rotary Buton")
				.appendField(new Blockly.FieldDropdown([["Basıldığında","BUT_PUSHED"], ["Bırakıldığında","BUT_RELEASED"]]), "STATUS")
			this.appendStatementInput("event_do")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(270);
			this.setTooltip("event when server got event");
			this.setHelpUrl("");
			}
	};

}