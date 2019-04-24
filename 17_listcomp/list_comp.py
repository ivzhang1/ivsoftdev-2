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

#5b
prime = [
	i
	for i in range(1, 101)
	if i not in l
]
print(prime)


#6a Divisors in ascending
num = 100 #raw_input("Enter a number: ")
# num = int(input)
l = []

for i in range(1, num+1):
	if num%i==0:
		l.append(i)


print(l)

#6b
l = [i for i in range(1, num+1) if num%i==0]
print(l)

# #7a Transpose Matrix
l = [[0,1,2],[3,4,5],[6,7,8]]
res = []

for r in range(3):
	res.append([l[c][r] for c in range(3)])

print(res) # [[0,3,6],[1,4,7],[2,5,8]]


#7b
res = [[l[c][r] for c in range(3)] for r in range(3)]

print(res)
