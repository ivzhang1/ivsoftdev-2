#Team ezrael - Ivan Zhang, William Lu, and Mohammed Uddin
#SoftDev2 pd7
#K #08: Ay Mon, Go Git It From Yer Flask
#2019-03-07
from flask import Flask, render_template, session, request, url_for, redirect, flash
from util import pokemon_search

app = Flask(__name__)
app.secret_key = "THIS IS A SECRET"

@app.route("/")
@app.route("/home", methods=["POST"])
def home():
	results = []

	if request.form.get('search_option') == 'name':
		results = pokemon_search.pokemon_name(request.form.get('query').title())

	elif request.form.get('search_option') == 'type':
		results = pokemon_search.pokemon_type(request.form.get('query').title())

	elif request.form.get('search_option') == 'weight':
		results = pokemon_search.pokemon_weight(float(request.form.get('query')))

	elif request.form.get('search_option') == 'height':
		results = pokemon_search.pokemon_height(float(request.form.get('query')))

	elif request.form.get('search_option') == 'evol_from':
		results = pokemon_search.pokemon_evolvedFrom(request.form.get('query').title())

	elif request.form.get('search_option') == 'evol_into':
		results = pokemon_search.pokemon_evolvedInto(request.form.get('query').title())

	else:
		flash("No Search Option Selected")

	if results.count(True) == 0:
		flash("No Results Found")

	return render_template("home.html", _ress = results)




    # if request.form.get('username') != 'bob':
    #     return redirect(url_for("error", msg = "wrong username"))
    # elif request.form.get('passwd') != 'pass':
    # 	return redirect(url_for("error", msg = "wrong password"))
    # else:
    # 	session[request.form.get('username')] = request.cookies.get("username")
	#


if __name__ == "__main__":
	app.debug = True
	app.run()
