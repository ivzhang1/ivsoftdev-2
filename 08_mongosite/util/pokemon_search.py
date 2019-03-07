#Team ezrael - Ivan Zhang, William Lu, and Mohammed Uddin
#SoftDev2 pd7
#K #08: Ay Mon, Go Git It From Yer Flask
#2019-03-07
'''
    Pokedex Database
    Contains Information (Name, Id, Type, Height, Weight, Weaknesses, Evolutions, etc.) of Pokemon
    Raw Data: https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json
    Import Directions:
        Remove '{"pokemon":' at the beginning of the JSON file and the corresponding '}' at the end

        When Importing the JSON attach '--jsonArray' flag:
            mongoimport --db DATABASE_NAME --collection COLLECTION_NAME --drop --jsonArray --file DIRECTORY_NAME/pokedex.json
'''
import pymongo

server_add = "134.209.120.192"
connection = pymongo.MongoClient(server_add)
db = connection.PinkMangoes
collection = db.pokemons

def pokemon_type(type):
    results = collection.find({"type":type})
    return(results)
    # for res in results:
    #    print(res['name'])
    #    for ty in res['type']:
    #        print(ty)
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")

def pokemon_name(name):
    results = collection.find({"name":name})
    return(results)
    # for res in results:
    #    print(res['name'])
    #    for ty in res['type']:
    #        print(ty)
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")

def pokemon_weight(weight):
    results = collection.find({'weight':str(weight) + " kg"})
    return(results)
    # for res in results:
    #    print(res['name'])
    #    for ty in res['type']:
    #        print(ty)
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")

def pokemon_height(height):
    results = collection.find({'height':str(height) + " m"})
    return(results)
    # for res in results:
    #    print(res['name'])
    #    for ty in res['type']:
    #        print(ty)
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")

def pokemon_evolvedFrom(prevEvol):
    results = collection.find({"prev_evolution.name": prevEvol})
    return(results)
    # for res in results:
    #    print(res['name'])
    #    for ty in res['type']:
    #        print(ty)
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")

def pokemon_evolvedInto(nextEvol):
    results = collection.find({"next_evolution.name": nextEvol})
    return(results)
    # for res in results:
    #    print(res['name'])
    #    for ty in res['type']:
    #        print(ty)
    #    print(res['height'] + " " + res['weight'])
    #    print("\n")

# pokemon_type("Grass")
# pokemon_name("Tangela")
# pokemon_weight(6.9)
# pokemon_height(0.71)
# pokemon_evolvedFrom("Bulbasaur")
# pokemon_evolvedInto("Venusaur")
