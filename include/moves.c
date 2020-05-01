#include "Arduino.h"

const int freq = 5000;
const int PWMChannelLEFT = 0;
const int PWMChannelRIGHT = 1;
const int resolution = 8;

//Motor 1
const int PWMA = 26; // Hız kontrolü için PWMA değişkeni
const int AIN1 = 27; // Motor 1 Yön
const int AIN2 = 14; // Motor 1 Yön (Ters)

//Motor 2
const int PWMB = 25; // Hız kontrolü için PWMB değişkeni
const int BIN1 = 12; // Motor 2 Yön
const int BIN2 = 13; // Motor 2 Yön (Ters)

void motorSetup()
{
  ledcSetup(PWMChannelRIGHT , freq, resolution);

  //pinMode(PWMA, OUTPUT); // pwma pinini hız kontrolü için ayarladık
  pinMode(AIN1, OUTPUT); // motor yönünü belirlemek için ain1 pini çıkış olarak ayarladık.
  pinMode(AIN2, OUTPUT); // motor yönünü (ters) belirlemek için ain2 pini çıkış olarak ayarladık.

  ledcSetup(PWMChannelLEFT , freq, resolution);

  //pinMode(PWMB, OUTPUT); // pwma pinini hız kontrolü için ayarladık
  pinMode(BIN1, OUTPUT); // motor yönünü belirlemek için bin1 pini çıkış olarak ayarladık.
  pinMode(BIN2, OUTPUT); // motor yönünü (ters) belirlemek için bin2 pini çıkış olarak ayarladık.
  
  ledcAttachPin(PWMA, PWMChannelLEFT);
  ledcAttachPin(PWMB, PWMChannelRIGHT);

  ledcWrite(PWMChannelLEFT, 255);
  ledcWrite(PWMChannelRIGHT, 255);
}



void fwd()
{
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
}

void bwd()
{
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
}

void lft()
{
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
}

void lft0() // sağ tam
{
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
}

void rgt()
{
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
}

void rgt0()
{
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
}

void stp()
{
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
}
