# Function code here

import requests
from flask import jsonify, request
from flask_cors import CORS

def convert_currency(request):
    CORS()
    
    data = request.get_json()
    from_currency = data.get("from")
    to_currency = data.get("to")
    amount = float(data.get("amount", 0))

    try:
        url = f'https://open.er-api.com/v6/latest/{from_currency}'
        resp = requests.get(url)
        rate = resp.json()['rates'][to_currency]
        result = round(amount * rate, 2)

        return jsonify({
            "success": True,
            "result": result,
            "rate": rate
        })

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400
