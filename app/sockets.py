from app import socketio

def messageReceived(methods=['GET', 'POST']):
  print('message was received :O')

@socketio.on('my event')
def handle_my_event(json, methods=['GET', 'POST']):
  print(f'received my evend: {str(json)}')
  socketio.emit('my response', json, callback=messageReceived)
