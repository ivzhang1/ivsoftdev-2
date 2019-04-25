import math

n = int(raw_input("Enter an integer: "))

pytha_triples = [[i, y, int(math.sqrt(i**2 + y**2))] for i in range(1, n+1) for y in range(1, n+1) if ((int(math.sqrt(i**2 + y**2))**2 == math.sqrt(i**2 + y**2)**2) and int(math.sqrt(i**2 + y**2)) <= n)]

print(pytha_triples)
