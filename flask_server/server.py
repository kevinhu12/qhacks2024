from flask import Flask, request
from flask import jsonify

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
        tenant_listing = data.get('TenantListing')
        landlords = data.get('Landlords')

        numLanlords = (len(landlords))

        # logic TODO
        print(tenant_listing)
        for landlord in landlords:
            print(landlord)

        # match responses - array of 0 or 1 corresponding
        response = {
            "matches": [0, 1, 1]
        }

        return jsonify(response), 200

    except Exception as e:
        # Handle any exceptions, you might want to log the error for debugging
        error_message = {'error': str(e)}
        return jsonify(error_message), 500


if __name__ == '__main__':
    app.run(debug=True)
