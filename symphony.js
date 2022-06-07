const music1 = `
from spike import PrimeHub, LightMatrix, Button, StatusLight, ForceSensor, MotionSensor, Speaker, ColorSensor, App, DistanceSensor, Motor, MotorPair
from spike.control import wait_for_seconds, wait_until, Timer
 
 
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
hub.speaker.beep(60, sec * 2) #C
`

const music2 = `
from spike import PrimeHub, LightMatrix, Button, StatusLight, ForceSensor, MotionSensor, Speaker, ColorSensor, App, DistanceSensor, Motor, MotorPair
from spike.control import wait_for_seconds, wait_until, Timer
 
 
hub = PrimeHub()
 
hub.light_matrix.show_image('HAPPY')
wait_for_seconds(1)
 
hub.light_matrix.show_image('MUSIC_QUAVERS')
hub.speaker.set_volume(100)
sec = .3
 
hub.speaker.beep(58, sec) #C
hub.speaker.beep(58, sec) #C
hub.speaker.beep(65, sec) #G
hub.speaker.beep(65, sec) #G
hub.speaker.beep(67, sec) #A
hub.speaker.beep(67, sec) #A
hub.speaker.beep(65, sec*2) #G
hub.speaker.beep(63, sec) #F
hub.speaker.beep(63, sec) #F
hub.speaker.beep(62, sec) #E
hub.speaker.beep(62, sec) #E
hub.speaker.beep(60, sec) #D
hub.speaker.beep(60, sec) #D
hub.speaker.beep(58, sec * 2) #C
 
hub.speaker.beep(65, sec) #G
hub.speaker.beep(65, sec) #G
hub.speaker.beep(63, sec) #F
hub.speaker.beep(63, sec) #F
hub.speaker.beep(62, sec) #E
hub.speaker.beep(62, sec) #E
hub.speaker.beep(60, sec * 2) #D
hub.speaker.beep(65, sec) #G
hub.speaker.beep(65, sec) #G
hub.speaker.beep(63, sec) #F
hub.speaker.beep(63, sec) #F
hub.speaker.beep(62, sec) #E
hub.speaker.beep(62, sec) #E
hub.speaker.beep(60, sec * 2) #D
 
hub.speaker.beep(58, sec) #C
hub.speaker.beep(58, sec) #C
hub.speaker.beep(65, sec) #G
hub.speaker.beep(65, sec) #G
hub.speaker.beep(67, sec) #A
hub.speaker.beep(67, sec) #A
hub.speaker.beep(65, sec * 2) #G
hub.speaker.beep(63, sec) #F
hub.speaker.beep(63, sec) #F
hub.speaker.beep(62, sec) #E
hub.speaker.beep(62, sec) #E
hub.speaker.beep(60, sec) #D
hub.speaker.beep(60, sec) #D
hub.speaker.beep(58, sec * 2) #C
`

