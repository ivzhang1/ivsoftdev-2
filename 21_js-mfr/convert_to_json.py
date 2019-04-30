# Ivan Zhang
# SoftDev2 pd7
# K #21: Onions, Bell Peppers, and Celery, Oh My!
# 2019-04-30

f = open("schoolDemos.csv", "r")
lines = f.readlines()
f.close()
categories = lines[0].split(",")
lines = lines[1:]
# print(lines)

json = '['
limit = 10
count = 0

for line in lines:
    if count < limit:
        json += "{"
        if len(lines) < limit:
            limit = len(lines)
        for i in range(len(categories)):
            l = line.split(",")
            # print(categories[i], l[i])
            json += '"{categ}" : "{val}",'.format(categ = categories[i].strip(), val = l[i].strip())
        json = json[:-1]
        json += "},"
        count += 1
    else:
        break




g = open("schoolDemos.json", "w")
json = json[:-1]
json += "]"
g.write(json)
g.close()
