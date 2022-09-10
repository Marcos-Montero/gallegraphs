from flask import Flask, jsonify, request
from flask_cors import CORS
app=Flask(__name__)
CORS(app)
#we are importing our function from the request_handleer.py file
from request_handler import get_financials
@app.route("/financials",methods=['GET','POST'])
def index():
    if request.method=='GET':
#getting the url argument       
        symbol = request.args.get('symbol')
        result = jsonify(get_financials(symbol))
        result.headers.add("Access-Control-Allow-Origin", "*")
        return result
    else:
        return jsonify({'Error':"This is a GET API method"})
if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0', port=3003)