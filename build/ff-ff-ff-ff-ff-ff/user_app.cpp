#include <Arduino.h>
#include "AiEsp32RotaryEncoder.h"
#include "U8g2lib.h"
#include <Wire.h>


AiEsp32RotaryEncoder rotaryEncoder = AiEsp32RotaryEncoder(32, 35, 33);
U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, 15, 4, 16);

int rotary_delta() {
  				int16_t encoderDelta = rotaryEncoder.encoderChanged();
  				if (encoderDelta > 0) return 1;
  				else if (encoderDelta < 0) return -1;
  				else return 0;
  			}
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


void setup()
{
  rotaryEncoder.begin();
  			rotaryEncoder.setup([] {rotaryEncoder.readEncoder_ISR();});
  			rotaryEncoder.setBoundaries(-1000, 1000, true);
u8g2.begin();
  
}
void loop()
{
    			
  if (millis() > 20000) rotaryEncoder.enable ();
rotaryEncoder.setBoundaries(-1000, 1000, true);
if(rotaryEncoder.currentButtonState() == BUT_PUSHED){
        if ((rotary_delta()) == (rotaryEncoder.readEncoder())) {
      u8g2.clearBuffer();toScreen(1, String("Hello World!"));u8g2.sendBuffer();}

    }
}