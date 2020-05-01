module.exports = function (Blockly) {
	'use strict';

	Blockly.JavaScript['kivvi_led'] = function(block) {
  
	let way = block.getFieldValue('WAY');
	let stat = block.getFieldValue('STATUS');
  
	let code = `
		#SETUP pinMode(19, OUTPUT);#END
		#SETUP pinMode(23, OUTPUT);#END
		`;
	code += 'digitalWrite('+ way +', '+stat+');';
		
	return code;
	};
	
	Blockly.JavaScript['kivvi_delay'] = function(block) {
		var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE);
		let code = 'delay('+content+');';

	return code;
	};
	
	Blockly.JavaScript['kivvi_screen_setup'] = function(block) {
		let code = 
			`#EXTINC#include "U8g2lib.h"#END
			#EXTINC#include <Wire.h>#END
			#VARIABLEU8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, 15, 4, 16);#END
			#FUNCTION 
			void toScreen(int satir, String wrd)
			{
			  if (wrd != "")
			  {
				satir *= 10;
				u8g2.setFont(u8g2_font_helvR08_tr);     // choose a suitable font
				u8g2.setCursor(3, satir);                   // set cursor point
				u8g2.print(wrd);                        // write something to the internal memory
			  }
			}
			#END
			#SETUPu8g2.begin();#END`;
   
   return code;
};

Blockly.JavaScript['kivvi_screen_clear'] = function(block) {
   let code = 'u8g2.clearBuffer();';
   return code;
};

Blockly.JavaScript['kivvi_screen_send'] = function(block) {
   let code = 'u8g2.sendBuffer();';
   return code;
};

Blockly.JavaScript['kivvi_screen_toscreen'] = function(block) {
	var strng = Blockly.JavaScript.valueToCode(block, 'STRNG', Blockly.JavaScript.ORDER_NONE);
	var scval = block.getFieldValue('SCVAL');
   let code = 'toScreen('+scval+', '+strng+');';
   return code;
};

Blockly.JavaScript['bt_string'] = function(block) {
  var code = 'bluetoothString()';
  return code;
};

Blockly.JavaScript['bt_setup'] = function(block) {
	var btname = block.getFieldValue('BTNAME');
	let code = 
			`#EXTINC#include "BluetoothSerial.h"#END
			#EXTINC#include "U8g2lib.h"#END
			#VARIABLEBluetoothSerial SerialBT;#END
			#FUNCTION
			String bluetoothString() //char olarak gelen message strin haline getiriliyor
			{
			  char c;
			  String str = "";
			  do
			  {
				c = 0;
				if (SerialBT.available()) c = SerialBT.read();
				if (c != 0)
				{
				  str += c;
				}
			  } while (c != 13 && c != 0);
			  return str;
			}
			#END`;
			
	code += 'SerialBT.begin("'+btname+'");';
	
   return code;
};


Blockly.JavaScript['kivvi_dist'] = function(block) {
	let code = 
			`#VARIABLE const int trigPin = 17;#END
			#VARIABLE const int echoPin = 5;#END
			#VARIABLE long duration;#END
			#VARIABLE int distance;#END
			#FUNCTION 
			int mesafe(bool type)
			{
				digitalWrite(trigPin, LOW);
				delayMicroseconds(2);
				digitalWrite(trigPin,HIGH);
				delayMicroseconds(10);
				digitalWrite(trigPin,LOW);
				duration = pulseIn(echoPin,HIGH);
				distance = duration * 0.034 / 2;
				if(type!=1)
				{
					distance *=10;
				}
				delay(50);
				return distance;
			}
			#END
	#SETUPpinMode(trigPin, OUTPUT); #END
	#SETUPpinMode(echoPin, INPUT);#END`;

  var type = block.getFieldValue('TYPE');
  code += 'mesafe('+type+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['kivvi_motor_setup'] = function(block) {
	let code = 
			`#EXTINC#include "moves.c"#END`;
	code += 'motorSetup();';
   return code;
};
	
Blockly.JavaScript['kivvi_battery_read'] = function(block) {
  var code = 'analogRead(39)';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['kivvi_buzzer32'] = function(block) {
	let note = block.getFieldValue('NOTE');
	let tt = block.getFieldValue('TT');
	
	let code = 
	`#EXTINC#include <Tone32.h>#END
	#VARIABLE#define BUZZER_PIN 2#END
	#VARIABLE#define BUZZER_CHANNEL 0#END`;
	
	code += 'tone(BUZZER_PIN,'+note+','+tt+',BUZZER_CHANNEL);';
	return code;
};

Blockly.JavaScript['kivvi_motor_dir'] = function(block) {
  
	let dir = block.getFieldValue('DIR');
  
	let code = ''+dir+';';
		
	return code;
};

Blockly.JavaScript['kivvi_hcsr04p'] = function(block) {
  
	let code =
	`#EXTINC#include "HCSR04.h"#END
	#VARIABLEUltraSonicDistanceSensor distanceSensor(17, 5);#END`;
  
	code += 'distanceSensor.measureDistanceCm()';
		
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['kivvi_ldr'] = function(block) {
	let code = `
		#SETUPpinMode(34, INPUT);#END
		`;
	code += 'analogRead(34)';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['kivvi_qrd1117'] = function(block) {
	let qrd = block.getFieldValue('QRD');
	
	let code = 
	`
	#VARIABLE#define leftQRD  36#END
	#VARIABLE#define midQRD   37#END
	#VARIABLE#define rightQRD 38#END
	#FUNCTION
	bool lineTF(int pinNumb)
		{
		  bool rtn = true;
		  if (analogRead(pinNumb) > 1200) rtn = false;
		  return rtn;
		}
	#END
	#SETUP  pinMode(leftQRD, INPUT);#END
	#SETUPpinMode(midQRD, INPUT);#END
	#SETUPpinMode(rightQRD, INPUT);#END
	`;
	
	code += 'lineTF('+qrd+')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

	
}