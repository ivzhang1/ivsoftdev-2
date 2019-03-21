to_import = open("cereals.csv", "r")

lines = to_import.readlines()[1:]
cereals = dict()

for line in lines:
    line = line.split(",")
    cereals[line[0]] = dict()
    cereals[line[0]]["calories"] = line[3]
    cereals[line[0]]["sodium"] = line[6]
    
print(cereals)
