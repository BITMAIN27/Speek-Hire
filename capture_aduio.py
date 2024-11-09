
import speech_recognition as SR
from transcript import transcript


def capture_audio(recognizer,microphone,new_tanscript):
    
    print("audio capture begin\n")
    #check passed objects for correct types
    if not isinstance(new_transcript, transcript):
        raise TypeError("transcript must be a transcript Type!")
    if not isinstance(recognizer, SR.Recognizer):
        raise TypeError("recognizer must be a Recognizer Type!")
    if not isinstance(microphone, SR.Microphone):
        raise TypeError("microphone must be a Microphone Type!")
    
    #set up for listening
    with microphone as source:
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
        
    try:
        new_transcript.data = recognizer.recognize_google(audio)
    except SR.RequestError:
        # API was unreachable or unresponsive
        new_transcript.success = False
        new_transcript.error = "API unavailable"
    except SR.UnknownValueError:
        # speech was unintelligible
        new_transcript.success = False
        new_transcript.error = "Unable to recognize speech"
    
    print("returning audio data\n")
    print(new_transcript.get_data())
    new_transcript.success = True

if __name__ == "__main__":
    
    new_transcript = transcript()
    recognizer = SR.Recognizer()
    microphone = SR.Microphone()
    #capture_audio(recognizer,microphone,new_transcript)
    #print(new_transcript.get_data())
    
    while True:
        capture_audio(recognizer,microphone,new_transcript)
        

        if new_transcript.get_data() =="stop":
            break

        if  new_transcript.get_data() == "empty":
            print("No data captured")
        if new_transcript.get_data() == "":
            print("No data captured")
        else:
            file = open("Project/summary.txt",'a')
            file.write("client response\n")
            file.write(new_transcript.get_data())
            file.close()
        
        new_transcript.set_data("")# clear data
    