const music1 = `
from spike import PrimeHub, LightMatrix, Button, StatusLight, ForceSensor, MotionSensor, Speaker, ColorSensor, App, DistanceSensor, Motor, MotorPair
from spike.control import wait_for_seconds, wait_until, Timer
from math import *

hub = PrimeHub()
 
hub.light_matrix.show_image('HAPPY')
wait_for_seconds(1)
 
hub.light_matrix.show_image('MUSIC_QUAVERS')
hub.speaker.set_volume(100)
sec = .3
 
hub.speaker.beep(60, sec) #C
hub.speaker.beep(60, sec) #C
hub.speaker.beep(67, sec) #G
hub.speaker.beep(67, sec) #G
hub.speaker.beep(69, sec) #A
hub.speaker.beep(69, sec) #A
hub.speaker.beep(67, sec*2) #G
hub.speaker.beep(65, sec) #F
hub.speaker.beep(65, sec) #F
hub.speaker.beep(64, sec) #E
hub.speaker.beep(64, sec) #E
hub.speaker.beep(62, sec) #D
hub.speaker.beep(62, sec) #D
hub.speaker.beep(60, sec * 2) #C
 
hub.speaker.beep(67, sec) #G
hub.speaker.beep(67, sec) #G
hub.speaker.beep(65, sec) #F
hub.speaker.beep(65, sec) #F
hub.speaker.beep(64, sec) #E
hub.speaker.beep(64, sec) #E
hub.speaker.beep(62, sec * 2) #D
hub.speaker.beep(67, sec) #G
hub.speaker.beep(67, sec) #G
hub.speaker.beep(65, sec) #F
hub.speaker.beep(65, sec) #F
hub.speaker.beep(64, sec) #E
hub.speaker.beep(64, sec) #E
hub.speaker.beep(62, sec * 2) #D
 
hub.speaker.beep(60, sec) #C
hub.speaker.beep(60, sec) #C
hub.speaker.beep(67, sec) #G
hub.speaker.beep(67, sec) #G
hub.speaker.beep(69, sec) #A
hub.speaker.beep(69, sec) #A
hub.speaker.beep(67, sec * 2) #G
hub.speaker.beep(65, sec) #F
hub.speaker.beep(65, sec) #F
hub.speaker.beep(64, sec) #E
hub.speaker.beep(64, sec) #E
hub.speaker.beep(62, sec) #D
hub.speaker.beep(62, sec) #D
hub.speaker.beep(60, sec * 2) #C`


let serviceSPIKE = document.getElementById("service_spike").getService();

serviceSPIKE.executeAfterInit(async function() {
    console.log("Working!");
})

let serviceSPIKE2 = document.getElementById("service_spike2").getService();

serviceSPIKE2.executeAfterInit(async function() {
    console.log("Working 2!");
})

document.getElementById("start").addEventListener('click', () => {
    if (serviceSPIKE.isActive() && serviceSPIKE2.isActive()) {
        uploadAndPlay();
    }
    else if (serviceSPIKE.isActive()) {
        alert("SPIKE 2 is not connected")
    }
    else if (serviceSPIKE2.isActive()) {
        alert("SPIKE 1 is not connected")
    }
    else {
        alert("SPIKE 1 and 2 are not connected")
    }
})

function uploadAndPlay() {
    serviceSPIKE.writeProgram("Symphony.py", music1, 2, () => {
        serviceSPIKE.runProgram(2)
    })

    serviceSPIKE2.writeProgram("Symphony.py", music1, 2, () => {
        serviceSPIKE2.runProgram(2)
    })
}