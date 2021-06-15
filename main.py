import socketio

sio = socketio.Client()

@sio.event
def my_event(data):
    print('Received data: ', data)
    
# standard Python

sio.connect('http://localhost:8000')
sio.wait()
