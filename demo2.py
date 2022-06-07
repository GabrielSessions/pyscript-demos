from pyodide import create_proxy
import matplotlib.pyplot as plt
import numpy as np
import time

freq = 0.1

serviceSPIKE = document.getElementById("service_spike").getService()
data = np.array([], dtype=float)

def startLogging(arg):
    global serviceSPIKE
    
    if (serviceSPIKE.isActive()):
        distSensor = serviceSPIKE.DistanceSensor("A")
        numRecordings = int(document.getElementById("time").value)/freq
        recordDists(distSensor, int(numRecordings))
    else:
        console.log("Error: SPIKE is not connected!")

def recordDists(distSensor, numRecordings):
    global data

    print("Working")

    for i in range(numRecordings):
        data = np.append(data, [(i * freq), distSensor.get_distance_cm()])
        time.sleep(freq)
        console.log(i*0.1)

    console.log(data)

trigger = create_proxy(startLogging)
document.getElementById("start_button").addEventListener("click", trigger)
