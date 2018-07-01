var url = 'http://[hostname]'
var socket = io.connect(url)

socket.on('connect', connected)
socket.on('my response', response)

function connected(){
  socket.emit('my event', {data: 'User Connected'})

  var form = $('form').on('submit', submitted)
}

function submitted(e){
  e.preventDefault()
  
  let user_name = $('input.username').val()
  let user_input = $('input.message').val()

  socket.emit('my event', {user_name: user_name, message: user_input})

  $('input.message').val('').focus()
}

function response(msg){
  console.log(msg)

  if (typeof msg.user_name !== 'undefined'){
    $('h3').remove()

    let text_box = '<div><b style="color: #000">' + msg.user_name + '</b>: ' + msg.message + '</div>'
    $('div.message_holder').append(text_box)
  }
}
