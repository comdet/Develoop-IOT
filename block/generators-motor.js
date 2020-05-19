module.exports = function (Blockly) {
	'use strict';

Blockly.JavaScript['motor_setup'] = function(block) {
	let code = 
			`#EXTINC#include "moves.c"#END
			#SETUPmotorSetup();#END`;
   return code;
};

Blockly.JavaScript['motor_stop'] = function(block) {
	let code = 'stp();';
   return code;
};

Blockly.JavaScript['motor_fwd_dt'] = function(block) {
	var speed = block.getFieldValue('SPEED');
	var cins = block.getFieldValue('CINS');
	var val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
	let code = 'fwd'+cins+'('+speed+','+val+');';
			
			
   return code;
};

Blockly.JavaScript['motor_bwd_dt'] = function(block) {
	var speed = block.getFieldValue('SPEED');
	var cins = block.getFieldValue('CINS');
	var val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
	let code = 'bwd'+cins+'('+speed+','+val+');';
			
   return code;
};

Blockly.JavaScript['motor_fwd_speed'] = function(block) {
	var speed = block.getFieldValue('SPEED');
	let code = 'fwd('+speed+');';
			
   return code;
};

Blockly.JavaScript['motor_bwd_speed'] = function(block) {
	var speed = block.getFieldValue('SPEED');
	let code = 'bwd('+speed+');';
			
   return code;
};

Blockly.JavaScript['motor_rgt_dt'] = function(block) {
	var mod = block.getFieldValue('MOD');
	var speed = block.getFieldValue('SPEED');
	var cins = block.getFieldValue('CINS');
	var val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
	let code = 'rgt'+cins+''+mod+'('+speed+','+val+');';
			
   return code;
};

Blockly.JavaScript['motor_lft_dt'] = function(block) {
	var mod = block.getFieldValue('MOD');
	var speed = block.getFieldValue('SPEED');
	var cins = block.getFieldValue('CINS');
	var val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
	let code = 'lft'+cins+''+mod+'('+speed+','+val+');';
			
   return code;
};

Blockly.JavaScript['motor_rgt_speed'] = function(block) {
	var mod = block.getFieldValue('MOD');
	var speed = block.getFieldValue('SPEED');
	let code = 'rgt'+mod+'('+speed+');';
			
   return code;
};

Blockly.JavaScript['motor_lft_speed'] = function(block) {
	var mod = block.getFieldValue('MOD');
	var speed = block.getFieldValue('SPEED');
	let code = 'lft'+mod+'('+speed+');';
			
   return code;
};
	
}