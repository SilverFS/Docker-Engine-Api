from flask import Flask, render_template, request, jsonify
import requests
from requests.exceptions import HTTPError


app = Flask(__name__, static_url_path='/static')

#Home page creation
@app.route('/')
def index():
    return render_template('index.html')



@app.route('/dockerdata', methods=['GET'])
def output():
    return render_template('dockerdata.html')




@app.route('/data', methods=['GET'])
def parse_data():
        request_data = requests.get('https://api.shiruvaaa.net/containers/json')
        request_data2 = requests.get('https://api.shiruvaaa.net/services')

        response = {
            "containers": request_data.json(),
            "services": request_data2.json()
        }

        
        #return render_template('data.html', datax = response)
        return jsonify(response)





#ERROR HANDLING
@app.errorhandler(404)
def function_name(error):
    return render_template('404.html'),404

@app.errorhandler(500)
def function_name(error):
    return render_template('500.html'),500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000', debug=True)
    #serve(app, host='0.0.0.0', port=5000)