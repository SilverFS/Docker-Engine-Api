from flask import Flask, render_template, request, jsonify
import requests
from requests.exceptions import HTTPError
import json


app = Flask(__name__, static_url_path='/static')

#Home page creation
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/home', methods=['GET'])
def home():
    return render_template('home.html')


@app.route('/dashboard', methods=['GET'])
def dashboard():
    return render_template('dashboard.html')

@app.route('/containers', methods=['GET'])
def containers():
    return render_template('containers.html')

@app.route('/images', methods=['GET'])
def images():
    return render_template('images.html')





@app.route('/data', methods=['GET'])
def parse_data():
        
        link = 'http://192.168.1.21:2376'
        request_data = requests.get(f'{link}/containers/json')
        request_data2 = requests.get(f'{link}/services')
        request_data3 = requests.get(f'{link}/nodes')
        request_data4 = requests.get(f'{link}/images/json')
        request_data5 = requests.get(f'{link}/info')
        
        
        
        response = {
            "containers": request_data.json(),
            "services": request_data2.json(),
            "nodes": request_data3.json(),
            "images": request_data4.json(),
            "info": request_data5.json()
        }
      
        return jsonify(response)






#ERROR HANDLING
@app.errorhandler(404)
def function_name(error):
    return render_template('404.html'),404

@app.errorhandler(500)
def function_name(error):
    return render_template('500.html'),500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000', debug=False)
    #serve(app, host='0.0.0.0', port=5000)