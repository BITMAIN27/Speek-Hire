from flask import Flask, request, jsonify
import random


app = Flask(__name__)

def determine_question(index):
    current_index = index
    question_list = []
    with open("Questions.txt",'r') as file:
        for question in file:
            question_list.append(question.strip())

    return question_list[index]

"""@app.route('/get_question', methods=['GET'])
def send_question():
    question_index = 0
    
    # The key is now 'message' to match what React expects
    data = {
        "message": ""
    }
    #make logic here to choose question
    question = determine_question(question_index)
    data['message'] = question
    
    return jsonify(data)"""

@app.route('/get_question',methods=['POST'])
def get_question():
    data = request.get_json()
    new_index = data.get('index')
    question = determine_question(new_index)
    
    return jsonify({'message': 'sent question', 'data': question})

@app.route('/proccess_audio',methods=['POST'])
def process_data():
    data = request.get_json()
    transcript = data.get('transcript')
    
    
    #process interview here
    
    
    print(transcript)
    return jsonify({'message': 'Hello from server', 'data': data})


if __name__ == "__main__":
    app.run(debug=True)
