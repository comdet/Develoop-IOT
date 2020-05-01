#include <Arduino.h>
#include "Adafruit_NeoPixel.h"


#define PIN            12
#define NUMPIXELS      3
Adafruit_NeoPixel NeoPixel1 = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);




void setup()
{
  
  
}
void loop()
{
    NeoPixel1.begin();

  
}