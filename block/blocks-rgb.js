const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function(Blockly) {
  "use strict";
  Blockly.Blocks["kivvi_rgb_begin"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
        .appendField("RGB LED Setup");
      this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("Pin:");
      this.appendValueInput("NUM")
        .setCheck("Number")
        .appendField("Pixel Sayısı:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["kivvi_rgb_clear"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
        .appendField("RGB Led Temizle");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["kivvi_rgb_show"] = {
    init: function() {
      this.appendDummyInput()
      .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
        .appendField("RGB Led Göster");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["kivvi_rgb_setBrightness"] = {
    init: function() {
      this.appendValueInput("BRIGHT")
      .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
        .setCheck("Number")
        .appendField("RGB Led Parlaklık Ayarla (0-255)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["kivvi_rgb_setPixelColor"] = {
    init: function() {
      this.appendValueInput("NUM")
		.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
        .setCheck("Number")
        .appendField("RGB LED Pixel:");
      this.appendDummyInput()
        .appendField("Rengi")
        .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks["kivvi_rgb_setPixelCode"] = {
    init: function() {
      this.appendValueInput("R")
		.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
		.appendField("RGB LED Pixel:")
		.appendField(new Blockly.FieldDropdown([["SOL","0"], ["SAĞ","1"]]), "DIR")
		.appendField("Ayarla")
		.appendField("R:");
	  this.appendValueInput("G")
		.appendField("G:");
	  this.appendValueInput("B")
		.appendField("B:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
	  this.setInputsInline(true);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["kivvi_rgb_fillLED"] = {
    init: function() {
      this.appendDummyInput()
      .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
        .appendField("RGB LED ")
		.appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR")
        .appendField("renk ile doldur");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["kivvi_rgb_colorWipe"] = {
    init: function() {
      this.appendDummyInput()
      .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
        .appendField("RGB LED colorWipe")
        .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
      this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("Time(ms)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["kivvi_rgb_theaterChase"] = {
    init: function() {
      this.appendDummyInput()
      .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
        .appendField("RGB LED theaterChase")
        .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
      this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("Time(ms)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["kivvi_rgb_rainbow_begin"] = {
    init: function() {
      this.appendDummyInput()
      .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
        .appendField("RGB LED Gökkuşağı Setup");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["kivvi_rgb_rainbow"] = {
    init: function() {
      this.appendValueInput("TIME")
      .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
        .setCheck("Number")
        .appendField("RGB LED Gökkuşağı Süresi(ms)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["kivvi_rgb_rainbowCycle"] = {
    init: function() {
      this.appendValueInput("TIME")
      .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1601900.png`,20,20,"*"))
        .setCheck("Number")
        .appendField("RGB LED Gökkuşağı Döngü Süresi(ms)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

// ######################################################################
};
