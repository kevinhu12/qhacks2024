from flask import Flask, request
from flask import jsonify
from model import predict

app = Flask(__name__)

@app.route("/")
def test():
    tst = { "Hello": "World!!" }
    return jsonify(tst)

@app.route('/match', methods=['POST'])
def match():
    try:
        # Get JSON data from the request body
        data = request.json

        # pull out request
        tenantListing = data.get('TenantListing')
        tl = [tenantListing["furnished"], tenantListing["smoker"], tenantListing["pets"], tenantListing["rentPrice"], tenantListing["squareFeet"]]

        landlords = data.get('Landlords')

        matches = []
        for ll in landlords:
            data = [tl[0], tl[1], tl[2], ll["furnished"], ll["smoker"], ll["pets"], tl[3], ll["rentPrice"], tl[4], ll["squareFeet"]]
            matches.append(predict(data))
        

        response = {"matches": matches}
        return response, 200

        


        return jsonify(response), 200

    except Exception as e:
        # Handle any exceptions, you might want to log the error for debugging
        error_message = {'error': str(e)}
        return jsonify(error_message), 500


if __name__ == '__main__':
    app.run(debug=True)
