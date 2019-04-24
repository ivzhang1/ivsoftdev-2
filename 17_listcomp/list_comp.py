import math

#1a
l = []

for i in range(5):
	l.append(str(i*2)*2)

print(l)

#1b
l = [str(i*2)*2 for i in range(5)]
print(l)

#2a
l = []

for i in range(5):
	l.append(i*10+7)

print(l)

#2b
l = [i*10+7 for i in range(5)]
print(l)

#3a
l = []

for i in range(3):
	l.append(i*0)
	l.append(i*1)
	l.append(i*2)

print(l)

#3b
l = [i*x for i in range(3) for x in range(3)]
print(l)

#4a Composite from [0,100] ascending
l = []

for i in range(1, 101):
	for j in range(2, int(math.sqrt(i))+1):
		if(i%j == 0 and i not in l):
			l.append(i)

print(l)

#4b

l = list({i for i in range(1, 101) for j in range(2, int(math.sqrt(i))+1) if i%j == 0})

print(l)


#5a Prime from [0,100] ascending
prime = []

for i in range(1, 101):
	if i not in l:
		prime.append(i)

print(prime)

# #5b
prime = [
	i
	for i in range(1, 101)
	if i not in l
]
print(prime)


# #6a Divisors in ascending
# l = []

# for i in range(3):
# 	l.append(i*0)
# 	l.append(i*1)
# 	l.append(i*2)

# print(l)

# #6b
# l = [i*x for i in range(3) for x in range(3)]
# print(l)

# #7a Transpose Matrix
# l = []

# for i in range(3):
# 	l.append(i*0)
# 	l.append(i*1)
# 	l.append(i*2)

# print(l)

# #7b
# l = [i*x for i in range(3) for x in range(3)]
# print(l)
