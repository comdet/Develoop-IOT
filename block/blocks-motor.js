const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
	'use strict';

	var basic_colour = Blockly.Msg.BASIC_HUE;
	
	
	Blockly.Blocks['motor_setup'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/motorsetup.png`,20,20,"*"))
				.appendField("Motorları başlat");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(180);
			this.setTooltip("Motorları ayarlar.");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['motor_stop'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/motorstop.png`,20,20,"*"))
				.appendField("Durdur");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(180);
			this.setTooltip("Motorları ayarlar.");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['motor_fwd_speed'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/motoricon.png`,20,20,"*"))
				.appendField("İleri doğru")
				.appendField(new Blockly.FieldDropdown([["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "SPEED")
				.appendField("Hızıyla git");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(180);
			this.setTooltip("Led yakmak ve söndürmek için kullanılır");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['motor_bwd_speed'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/motoricon.png`,20,20,"*"))
				.appendField("Geri doğru")
				.appendField(new Blockly.FieldDropdown([["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "SPEED")
				.appendField("Hızıyla git");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(180);
			this.setTooltip("Led yakmak ve söndürmek için kullanılır");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['motor_fwd_dt'] = {
		init: function() {
			this.appendValueInput("VALUE")
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/motoricon.png`,20,20,"*"))
				.appendField("İleri doğru")
				.appendField(new Blockly.FieldDropdown([["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "SPEED")
				.appendField("Hızıyla");
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["Santimetre","Dist"], ["Saniye","Time"]]), "CINS")
				.appendField("git");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(180);
			this.setTooltip("Led yakmak ve söndürmek için kullanılır");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['motor_bwd_dt'] = {
		init: function() {
			this.appendValueInput("VALUE")
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/motoricon.png`,20,20,"*"))
				.appendField("Geri doğru")
				.appendField(new Blockly.FieldDropdown([["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "SPEED")
				.appendField("Hızıyla");
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["Santimetre","Dist"], ["Saniye","Time"]]), "CINS")
				.appendField("git");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(180);
			this.setTooltip("Led yakmak ve söndürmek için kullanılır");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['motor_rgt_dt'] = {
		init: function() {
			this.appendValueInput("VALUE")
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/motoricon.png`,20,20,"*"))
				.appendField("Sağa doğru")
				.appendField(new Blockly.FieldDropdown([["Olduğu yerde","0"], ["Yarım ileri","Fwd"], ["Yarım geri","Bwd"]]), "MOD")
				.appendField(new Blockly.FieldDropdown([["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "SPEED")
				.appendField("Hızıyla");
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["Derece","Degree"], ["Saniye","Time"]]), "CINS")
				.appendField("dön");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(180);
			this.setTooltip("Led yakmak ve söndürmek için kullanılır");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['motor_lft_dt'] = {
		init: function() {
			this.appendValueInput("VALUE")
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/motoricon.png`,20,20,"*"))
				.appendField("Sola doğru")
				.appendField(new Blockly.FieldDropdown([["Olduğu yerde","0"], ["Yarım ileri","Fwd"], ["Yarım geri","Bwd"]]), "MOD")
				.appendField(new Blockly.FieldDropdown([["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "SPEED")
				.appendField("Hızıyla");
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["Derece","Degree"], ["Saniye","Time"]]), "CINS")
				.appendField("dön");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(180);
			this.setTooltip("Led yakmak ve söndürmek için kullanılır");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
		Blockly.Blocks['motor_rgt_speed'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/motoricon.png`,20,20,"*"))
				.appendField("Sağa doğru")
				.appendField(new Blockly.FieldDropdown([["Olduğu yerde","0"], ["Yarım ileri","Fwd"], ["Yarım geri","Bwd"]]), "MOD")
				.appendField(new Blockly.FieldDropdown([["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "SPEED")
				.appendField("Hızıyla dön");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(180);
			this.setTooltip("Led yakmak ve söndürmek için kullanılır");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['motor_lft_speed'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/motoricon.png`,20,20,"*"))
				.appendField("Sola doğru")
				.appendField(new Blockly.FieldDropdown([["Olduğu yerde","0"], ["Yarım ileri","Fwd"], ["Yarım geri","Bwd"]]), "MOD")
				.appendField(new Blockly.FieldDropdown([["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "SPEED")
				.appendField("Hızıyla dön");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(180);
			this.setTooltip("Led yakmak ve söndürmek için kullanılır");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
	

}