import socketio

# standard Python
sio = socketio.Client()

sio.connect('http://localhost:8000')
