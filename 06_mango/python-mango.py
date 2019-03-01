#Team Mangoose: Ivan Zhang and Sajed Nahian
#SoftDev2 pd7
#K #06: Yummy Mango Py
#2019-02-29

import pymongo

server_add = "134.209.120.192"
connection = pymongo.MongoClient(server_add)
db = connection.ivan
collection = db.restaurants

def restaurant_borough(boro):
    results = collection.find({"borough":boro})
    for res in results:
       print(res['name'])
       print(res['address']['building'] + " " + res['address']['street'])
       print()

def restaurant_zip(zip):
    results = collection.find({"address.zipcode":str(zip)})
    for res in results:
       print(res['name'])
       print(res['address']['building'] + " " + res['address']['street'])
       print()
def restaurant_zip_grade(zip, grade):
    results = collection.find({"$and": [{"address.zipcode":str(zip)},{"grades.grade": grade}]})
    for res in results:
       print(res['name'])
       print(res['address']['building'] + " " + res['address']['street'])
       print()

def restaurant_score(score):
    results = collection.find({"grades.score": score})
    for res in results:
       print(res['name'])
       print(res['address']['building'] + " " + res['address']['street'])
       print()

def restaurant_category(cat):
    results = collection.find({"cuisine": cat})
    for res in results:
       print(res['name'])
       print(res['address']['building'] + " " + res['address']['street'])
       print()



#restaurant_borough("Brooklyn")
#restaurant_zip(10462)
#restaurant_zip_grade(10462, "A")
#restaurant_score(10)
restaurant_category("Bakery")
