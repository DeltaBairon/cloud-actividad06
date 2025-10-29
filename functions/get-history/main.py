# Function code herefrom flask import jsonify, request
from flask_cors import CORS

history = []

def get_history(request):
    CORS()
    
    if request.method == "POST":
        data = request.get_json()
        history.append(data)
        return jsonify({"success": True, "message": "Saved!"})

    return jsonify({"success": True, "history": history})
