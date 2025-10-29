# Function code hereimport requests
from flask import jsonify, request
from flask_cors import CORS

def get_exchange_rates(request):
    CORS()

    base = request.args.get("base", "USD")

    try:
        resp = requests.get(f"https://open.er-api.com/v6/latest/{base}")
        data = resp.json()
        return jsonify({"success": True, "rates": data["rates"]})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)})
