#include "Arduino.h"

#define lowPWM 75
#define highPWM 255
#define alpha 0.000071372
#define beta 0.00081045

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

void stp()
{
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
}

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
}

///////////////////////Mesafeli gidiyor CM olarak parametre alıyor///////////////////////


void bwdDist(int spd, float gDist)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  int gTime = ((gDist) / (spd * alpha));
  delay(gTime);
  stp();
}

void fwdDist(int spd, int gDist)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  int gTime = ((gDist) / (spd * alpha));
  delay(gTime);
  stp();
}

///////////////////////Mesafeli gidiyor CM olarak parametre alıyor///////////////////////
//////////////////////////////////////////Bitti//////////////////////////////////////////

///////////////////////dereceli dönüyor. Deg olarak  parametre alıyor///////////////////////

void rgtDegreeBwd(int spd, int dDegree)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  int gTime = dDegree/(spd*beta);
  delay(gTime*2);
  stp();
}

void rgtDegreeFwd(int spd, int dDegree)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  int gTime = dDegree/(spd*beta);
  delay(gTime*2);
  stp();
}

void rgtDegree0(int spd, int dDegree) // sağ tam
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  int gTime = dDegree/(spd*beta);
  delay(gTime);
  stp();
}

void lftDegreeBwd(int spd, int dDegree)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  int gTime = dDegree/(spd*beta);
  delay(gTime*2);
  stp();
}

void lftDegreeFwd(int spd, int dDegree)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  int gTime = dDegree/(spd*beta);
  delay(gTime*2);
  stp();
}

void lftDegree0(int spd, int dDegree)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  int gTime = dDegree/(spd*beta);
  delay(gTime);
  stp();
}

///////////////////////Saniye cinsinden gitme fonksiyonları///////////////////////

void bwdTime(int spd, float dTime)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  delay(dTime * 1000);
  stp();
}

void fwdTime(int spd, float dTime)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  delay(dTime * 1000);
  stp();
}

void rgtTimeBwd(int spd, float dTime)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  delay(dTime * 1000);
  stp();
}

void rgtTimeFwd(int spd, float dTime)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  delay(dTime * 1000);
  stp();
}


void rgtTime0(int spd, float dTime) // sağ tam
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  delay(dTime * 1000);
  stp();
}

void lftTimeBwd(int spd, float dTime)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  delay(dTime * 1000);
  stp();
}

void lftTimeFwd(int spd, float dTime)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  delay(dTime * 1000);
  stp();
}

void lftTime0(int spd, float dTime)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  delay(dTime * 1000);
  stp();
}


/////////////////////////////Kontrolsüz gidiyor////////////////////////////

void bwd(int spd)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
}

void fwd(int spd)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
}

void rgtBwd(int spd)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
}

void rgt0(int spd) // sağ tam
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, HIGH); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
}

void rgtFwd(int spd)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, HIGH ); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
}

void lftFwd(int spd)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
}

void lftBwd(int spd)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, LOW);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
}

void lft0(int spd)
{
  spd = map (spd, 0 , 10, lowPWM, highPWM);
  ledcWrite(PWMChannelLEFT, spd);
  ledcWrite(PWMChannelRIGHT, spd);
  digitalWrite(AIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(AIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
  digitalWrite(BIN1, LOW); // Motor 1' in yönünü ileri olarak aktifleştir
  digitalWrite(BIN2, HIGH);  // Motor 1' in ters hareketini pasifleştir.
}
