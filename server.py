from flask import Flask, request, jsonify


app = Flask(__name__)


@app.route('/proccess_audio',methods=['POST'])
def process_data():
    data = request.get_json()
    transcript = data.get('transcript')
    
    
    #process interview here
    
    
    print(transcript)
    return jsonify({'message': 'Hello from server', 'data': data})


if __name__ == "__main__":
    app.run(debug=True)
