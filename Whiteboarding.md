Problem #1
Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color. This should be the end result:

> painter1.paints()
"Paints green!"
> painter2.paints()
"Paints yellow!"
> painter3.paints()
"Paints red!"

const canPaint = function (painter){
  const obj = {
    paint: function(color){
      return `Paints ${color}!`
    }
  }
  return obj;
}
  const painter1 = canPaint("painter1");
  painter1.paint("green");
  const painter2 = canPaint("painter2");
  painter2.paint("yellow");
  const painter3 = canPaint("painter3");
  painter3.paint("red");

Problem #2
Compose a function called sound(). You should be able to add the following functionality to the objects listed:

> faucet.sound()
"Drip drip drip."
> oldCar.sound()
"Grumble grumble"
> sleepyBear.sound()
"Grrr...yawn"

const makesSound = soundMaker => {
  const sounds = {
    sound: sound => sound
  }
  return sounds;
}

const faucet = makesSound();
faucet.sound("Drip drip drip");
const oldCar = makesSound();
oldCar.sound("Grumble grumble");
const sleepyBear = makesSound();
sleepyBear.sound("Grrr...yawn");