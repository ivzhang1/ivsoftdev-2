#Team ezrael - Ivan Zhang, William Lu, and Mohammed Uddin
#SoftDev2 pd7
#K #08: Ay Mon, Go Git It From Yer Flask
#2019-03-07
import os

import pymongo

from flask import Flask, render_template, session, request, url_for, redirect, flash
from util import pokemon_search, json_setup

app = Flask(__name__)
app.secret_key = os.urandom(32)


db_pointer = None

@app.route("/")
@app.route("/home", methods=["POST"])
def home():
	results = []

	if request.form.get('mongo_server') != '':
		try:
	                connection = pymongo.MongoClient(request.form.get("mongo_server") serverS$
        	        connection.server_info()
                	db = connection.ezrael
                	global db_pointer
                	db_pointer = db
                	json_setup.setup(db)
                	flash("Mongo Server Setup")

        	except:
                	flash("SERVER ISSUE: Using Default Mongo Server")
			connection = pymongo.MongoClient("134.209.120.192")
                        connection.server_info()
                        db = connection.ezrael
                        global db_pointer
                        db_pointer = db
                        json_setup.setup(db)

	if request.form.get('search_option') == 'name':
		results = pokemon_search.pokemon_name(db_pointer, request.form.get('query').title())

	elif request.form.get('search_option') == 'type':
		results = pokemon_search.pokemon_type(db_pointer, request.form.get('query').title())

	elif request.form.get('search_option') == 'weight':
		results = pokemon_search.pokemon_weight(db_pointer, float(request.form.get('query')))

	elif request.form.get('search_option') == 'height':
		results = pokemon_search.pokemon_height(db_pointer, float(request.form.get('query')))

	elif request.form.get('search_option') == 'evol_from':
		results = pokemon_search.pokemon_evolvedFrom(db_pointer, request.form.get('query').title())

	elif request.form.get('search_option') == 'evol_into':
		results = pokemon_search.pokemon_evolvedInto(db_pointer, request.form.get('query').title())

	else:
		flash("No Search Option Selected")

	if results.count(True) == 0:
		flash("No Results Found")

	return render_template("home.html", _ress = results)

if __name__ == "__main__":
	app.debug = True
	app.run()
