from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route("/")
def test():
    tst = { "Hello": "World" }
    return jsonify(tst)
