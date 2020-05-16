#include <Arduino.h>
#include "U8g2lib.h"
#include <Wire.h>
#include "BluetoothSerial.h"
#include "moves.c"


U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, 15, 4, 16);
BluetoothSerial SerialBT;

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


void setup()
{
  u8g2.begin();
  SerialBT.begin("BT NAME");motorSetup();
}
void loop()
{
    toScreen(1, String("dsfsfsfsfsf"));fwd();
  
}