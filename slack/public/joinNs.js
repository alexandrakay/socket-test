const joinNs = (endpoint) => {
  // console.log('JOINED', endpoint)
  // join namespace
  if (nsSocket) {
    nsSocket.close()
    document
      .querySelector('#user-input')
      .removeEventListener('submit', formSubmission)
  }
  nsSocket = io(`http://localhost:9400${endpoint}`)
  nsSocket.on('nsRoomload', (nsRooms) => {
    let roomlist = document.querySelector('.room-list')
    roomlist.innerHTML = ''
    nsRooms.forEach((room) => {
      let glpyh = room.privateRoom ? 'lock' : 'globe'

      roomlist.innerHTML += `<li class='room'>
      <span class="glyphicon glyphicon-${glpyh}"></span>${room.roomTitle}
    </li>`
    })
    // click lister
    let roomNodes = document.getElementsByClassName('room')
    Array.from(roomNodes).forEach((elem) => {
      elem.addEventListener('click', (e) => {
        console.log('clicked on', e.target.innerText)
        joinRoom(e.target.innerText)
      })
    })
    const topRoom = document.querySelector('.room')
    const topRoomName = topRoom.innerText
    joinRoom(topRoomName)
  })

  nsSocket.on('messageToClients', (msg) => {
    console.log(msg)
    const newMsg = buildHTML(msg)
    document.querySelector('#messages').innerHTML += newMsg
  })

  document
    .querySelector('.message-form')
    .addEventListener('submit', formSubmission)
}

const formSubmission = (e) => {
  e.preventDefault()
  const newMessage = document.querySelector('#user-message').value
  nsSocket.emit('newMessageToServer', { text: newMessage })
}

const buildHTML = (msg) => {
  const currentDate = new Date(msg.time).toLocaleString()
  const newHTML = `
      <li>
        <div class="user-image">
          <img src="${msg.avatar}" />
        </div>
        <div class="user-message">
          <div class="user-name-time">${msg.username} <span> ${currentDate}</span></div>
          <div class="message-text">${msg.text}</div>
        </div>
      </li>
  `
  return newHTML
}
