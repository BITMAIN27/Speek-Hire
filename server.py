from flask import Flask, request, jsonify


app = Flask(__name__)

@app.route('/get_question', methods=['GET'])
def send_question():
    # The key is now 'message' to match what React expects
    data = {
        "message": ""
    }
    #make logic here to choose question
    data['message'] = "Custom message from sever"
    
    return jsonify(data)

@app.route('/proccess_audio',methods=['POST'])
def process_data():
    data = request.get_json()
    transcript = data.get('transcript')
    
    
    #process interview here
    
    
    print(transcript)
    return jsonify({'message': 'Hello from server', 'data': data})


if __name__ == "__main__":
    app.run(debug=True)
