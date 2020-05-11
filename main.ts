input.onButtonPressed(Button.A, function () {
    Team_A += 1
    basic.showNumber(Team_A)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Team A =")
    basic.showNumber(Team_A)
    basic.showString("Team B =")
    basic.showNumber(Team_B)
})
input.onButtonPressed(Button.B, function () {
    Team_B += 1
    basic.showNumber(Team_B)
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    basic.pause(30000)
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    basic.pause(20000)
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    basic.pause(10000)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    for (let index = 0; index < 10; index++) {
        edubitTrafficLightBit.toggleLed(LedColor.Red)
        basic.pause(500)
    }
})
let Team_B = 0
let Team_A = 0
Team_A = 0
Team_B = 0
music.setVolume(200)
