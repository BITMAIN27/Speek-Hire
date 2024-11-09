class transcript():
    def __init__(self):
        self.error = "None"
        self.success = False
        self.data = "empty"
        
    def get_data(self):
        return self.data
    
    def set_data(self,new_data):
        self.data = new_data