const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
	'use strict';

	var basic_colour = Blockly.Msg.BASIC_HUE;
	
	Blockly.Blocks['kivvi_led'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/ledmini.png`,20,20,"*"))
				.appendField(new Blockly.FieldDropdown([["SOL","23"], ["SAĞ","19"]]), "WAY")
				.appendField("Ledi")
				.appendField(new Blockly.FieldDropdown([["YAK","HIGH"], ["SÖNDÜR","LOW"]]), "STATUS");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(basic_colour);
			this.setTooltip("Led yakmak ve söndürmek için kullanılır");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
	
	Blockly.Blocks['kivvi_dist'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("Mesafe'yi")
				.appendField(new Blockly.FieldDropdown([["santimetre","1"], ["milimetre","0"]]), "TYPE")
				.appendField("cinsinde hesapla");
			this.setOutput(true);
			this.setColour(135);
			this.setTooltip("Mesafeyi hesaplamak için kullanılır.");
			this.setHelpUrl("http://kivblocks.kivvi.com.tr");
		}
	};
	
	
	Blockly.Blocks['bt_setup'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/btico.png`,20,20,"*"))
				.appendField("Bluetoothu Başlat");
			this.appendDummyInput()
				.appendField("Bluetooth ismi:")
				.appendField(new Blockly.FieldTextInput("Bluetooth"), "BTNAME");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(230);
			this.setTooltip("Bluetooth bağlantı ayarlarını yapar");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['bt_string'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/btprt.png`,20,20,"*"))
				.appendField("Bluetooth verisini yazdır");
			this.setOutput(true, "String");
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	

	Blockly.Blocks['kivvi_screen_setup'] = {
		init: function() {
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_CENTRE)
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/screenset.png`,20,20,"*"))
				.appendField("Ekranı Çalıştır");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(0);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['kivvi_screen_toscreen'] = {
		init: function() {
			this.appendValueInput("STRNG","TOSCREEN")
				.setCheck("String")
				.setAlign(Blockly.ALIGN_CENTRE)
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/screenprint.png`,20,20,"*"))
				.appendField(new Blockly.FieldDropdown([["1.","1"], ["2.","2"], ["3.","3"], ["4.","4"], ["5.","5"], ["6.","6"], ["7.","7"], ["8.","8"]]), "SCVAL")
				.appendField("Satıra");
			this.appendDummyInput()
				.appendField("Yazdır");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(0);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['kivvi_battery_read'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/battery.png`,20,20,"*"))
				.appendField("Kalan batarya bilgisi");
			this.setOutput(true);
			this.setColour(basic_colour);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['kivvi_buzzer32'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("BUZZER")
				.appendField(new Blockly.FieldDropdown([
				["NOTE_B0","NOTE_B0"],
				["NOTE_C1","NOTE_C1"],
				["NOTE_CS1","NOTE_CS1"],
				["NOTE_D1","NOTE_D1"],
				["NOTE_DS1","NOTE_DS1"],
				["NOTE_E1","NOTE_E1"],
				["NOTE_F1","NOTE_F1"],
				["NOTE_FS1","NOTE_FS1"],
				["NOTE_G1","NOTE_G1"],
				["NOTE_GS1","NOTE_GS1"],
				["NOTE_A1","NOTE_A1"],
				["NOTE_AS1","NOTE_AS1"],
				["NOTE_B1","NOTE_B1"],
				["NOTE_C2","NOTE_C2"],
				["NOTE_CS2","NOTE_CS2"],
				["NOTE_D2","NOTE_D2"],
				["NOTE_DS2","NOTE_DS2"],
				["NOTE_E2","NOTE_E2"],
				["NOTE_F2","NOTE_F2"],
				["NOTE_FS2","NOTE_FS2"],
				["NOTE_G2","NOTE_G2"],
				["NOTE_GS2","NOTE_GS2"],
				["NOTE_A2","NOTE_A2"],
				["NOTE_AS2","NOTE_AS2"],
				["NOTE_B2","NOTE_B2"],
				["NOTE_C3","NOTE_C3"],
				["NOTE_CS3","NOTE_CS3"],
				["NOTE_D3","NOTE_D3"],
				["NOTE_DS3","NOTE_DS3"],
				["NOTE_E3","NOTE_E3"],
				["NOTE_F3","NOTE_F3"],
				["NOTE_FS3","NOTE_FS3"],
				["NOTE_G3","NOTE_G3"],
				["NOTE_GS3","NOTE_GS3"],
				["NOTE_A3","NOTE_A3"],
				["NOTE_AS3","NOTE_AS3"],
				["NOTE_B3","NOTE_B3"],
				["NOTE_C4","NOTE_C4"],
				["NOTE_CS4","NOTE_CS4"],
				["NOTE_D4","NOTE_D4"],
				["NOTE_DS4","NOTE_DS4"],
				["NOTE_E4","NOTE_E4"],
				["NOTE_F4","NOTE_F4"],
				["NOTE_FS4","NOTE_FS4"],
				["NOTE_G4","NOTE_G4"],
				["NOTE_GS4","NOTE_GS4"],
				["NOTE_A4","NOTE_A4"],
				["NOTE_AS4","NOTE_AS4"],
				["NOTE_B4","NOTE_B4"],
				["NOTE_C5","NOTE_C5"],
				["NOTE_CS5","NOTE_CS5"],
				["NOTE_D5","NOTE_D5"],
				["NOTE_DS5","NOTE_DS5"],
				["NOTE_E5","NOTE_E5"],
				["NOTE_F5","NOTE_F5"],
				["NOTE_FS5","NOTE_FS5"],
				["NOTE_G5","NOTE_G5"],
				["NOTE_GS5","NOTE_GS5"],
				["NOTE_A5","NOTE_A5"],
				["NOTE_AS5","NOTE_AS5"],
				["NOTE_B5","NOTE_B5"],
				["NOTE_C6","NOTE_C6"],
				["NOTE_CS6","NOTE_CS6"],
				["NOTE_D6","NOTE_D6"],
				["NOTE_DS6","NOTE_DS6"],
				["NOTE_E6","NOTE_E6"],
				["NOTE_F6","NOTE_F6"],
				["NOTE_FS6","NOTE_FS6"],
				["NOTE_G6","NOTE_G6"],
				["NOTE_GS6","NOTE_GS6"],
				["NOTE_A6","NOTE_A6"],
				["NOTE_AS6","NOTE_AS6"],
				["NOTE_B6","NOTE_B6"],
				["NOTE_C7","NOTE_C7"],
				["NOTE_CS7","NOTE_CS7"],
				["NOTE_D7","NOTE_D7"],
				["NOTE_DS7","NOTE_DS7"],
				["NOTE_E7","NOTE_E7"],
				["NOTE_F7","NOTE_F7"],
				["NOTE_FS7","NOTE_FS7"],
				["NOTE_G7","NOTE_G7"],
				["NOTE_GS7","NOTE_GS7"],
				["NOTE_A7","NOTE_A7"],
				["NOTE_AS7","NOTE_AS7"],
				["NOTE_B7","NOTE_B7"],
				["NOTE_C8","NOTE_C8"],
				["NOTE_CS8","NOTE_CS8"],
				["NOTE_D8","NOTE_D8"],
				["NOTE_DS8","NOTE_DS8"]
				]), "NOTE")
				.appendField(new Blockly.FieldNumber("500",1,2000), "TT");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(270);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['kivvi_screen_clear'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/screenico.png`,20,20,"*"))
				.appendField("Ekranı Temizle");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(0);
			this.setTooltip("Led yakmak ve söndürmek için kullanılır");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['kivvi_screen_send'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/screenico.png`,20,20,"*"))
				.appendField("Ekranı Göster");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(0);
			this.setTooltip("Led yakmak ve söndürmek için kullanılır");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
		Blockly.Blocks['kivvi_hcsr04p'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("Mesafe'yi HC-SR04p")
				.appendField("kullanarak hesapla");
			this.setOutput(true, "Number");
			this.setColour(135);
			this.setTooltip("Mesafeyi hesaplamak için kullanılır.");
			this.setHelpUrl("http://kivblocks.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['kivvi_ldr'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("LDR");
			this.setOutput(true, "Number");
			this.setColour(135);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	
	Blockly.Blocks['kivvi_qrd1117'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("QRD1117 seç")
				.appendField(new Blockly.FieldDropdown([["midQRD","midQRD"], ["leftQRD","leftQRD"], ["rightQRD","rightQRD"]]), "QRD");
			this.setInputsInline(true);
			this.setOutput(true, "Number");
			this.setColour(135);
			this.setTooltip("???");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	

}