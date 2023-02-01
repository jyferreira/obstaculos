let faixa = false
basic.forever(function () {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 40 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        music.playTone(494, music.beat(BeatFraction.Whole))
        faixa = Math.randomBoolean()
        if (faixa == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 144)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(500)
        }
        if (faixa == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 144)
            basic.pause(500)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    }
})
