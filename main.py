import socketio

sio = socketio.Client()

@sio.event
def llamadaRecibida(data):
    print('Received data: ', data)
    
# standard Python

sio.connect('http://localhost:8000')
sio.wait()
