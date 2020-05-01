#ifndef HCSR04_H
#define HCSR04_H

#include "Arduino.h"

class UltraSonicDistanceSensor {
 public:
    UltraSonicDistanceSensor(int triggerPin, int echoPin);
    double measureDistanceCm();
    double measureDistanceCm(float temperature);
 private:
    int triggerPin, echoPin;
};

#endif
