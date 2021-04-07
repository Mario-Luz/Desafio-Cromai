# Python. flask
from flask import Flask, render_template, request, jsonify
import math


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")
    
@app.route("/api", methods=["POST"])
def send():
    if request.method == "POST":

        num1 = int(request.form["num1"])
        num2 = int(request.form["num2"])
        result = math.hypot(num1, num2)
        res = jsonify({"Hipotenusa": result})
        return res

app.run(debug=True)
