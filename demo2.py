import numpy as np
import matplotlib.pyplot as plt
import random

# Chosen Feature: age

# Other considered features: sex cp trtbps chol
# fbs restecg thalachh exng oldpeak

# Loading in Data
HEART = open("./heart.csv")
data = np.loadtxt(HEART, delimiter=",", skiprows=1)

def generateModel(data):
    # Setting up our matrices
    Y = data[:,0]
    A = (data[:,(1,2,3,4,5,6,7,8,9)])
    ones = np.ones((Y.size, 1), dtype=float)
    A = np.append(ones, A, axis=1)

    # Randomly remove 25 pts for testing
    numTestingPts = 25
    testingA = np.array([[]])
    testingY = np.array([])

    for i in range(numTestingPts):
        randInt = int(random.random() * Y.size)
        testingA = np.append(testingA, A[randInt])
        A = np.delete(A, randInt, 0)
        testingY = np.append(testingY, Y[randInt])
        Y = np.delete(Y, randInt, 0)

    testingA = testingA.reshape(numTestingPts, 10)

    # Calculating the B matrix: (A^T A)^-1 A^T Y = B
    B = np.linalg.inv(np.transpose(A) @ A) @ np.transpose(A) @ Y
    
    return B, testingA, testingY, A, Y


# Find avg error out of the testing pts

def findError(ptIn, ptOut, B):
    prediction = 0
    for i in range(B.size):
        prediction += ptIn[i] * B[i]
    return (abs(prediction - ptOut))

def getAvgError(testingA, testingY, B):
    errors = np.array([])
    for i in range(testingY.size):
        curError = findError(testingA[i], testingY[i], B)
        errors = np.append(errors, curError )

    errorAvg = np.average(errors)
    return errorAvg
    
    
# Run model multiple times to get more accurate overall avg of avg errors
errorAvgs = np.array([])
for i in range(100):
    B, testA, testY, A, Y = generateModel(data)
    avgError = getAvgError(testA, testY, B)
    errorAvgs = np.append(errorAvgs, avgError)
    
print(np.average(errorAvgs))

def calculateRSquared(A, B, Y):
    numerator = 0
    denominator = 0
    yMean = np.average(Y)
    for i in range(Y.size):
        denominator += (Y[i] - yMean)**2 
        numerator += findError(A[i], Y[i], B)**2
    print(numerator)
    print(denominator)
    return (1 - (numerator/denominator))

B, testA, testY, A, Y = generateModel(data)

print(calculateRSquared(A, B, Y))
