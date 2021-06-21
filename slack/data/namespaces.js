// Bring in the room class
const Namespace = require('../classes/Namespace')
const Room = require('../classes/Room')

// Set up the namespaces
let namespaces = []
let groupNs = new Namespace(
  0,
  'Groups',
  'https://picsum.photos/id/254/32',
  '/groups'
)
let gameNs = new Namespace(
  1,
  'Games',
  'https://picsum.photos/id/112/32',
  '/games'
)

// Make the main room and add it to rooms. it will ALWAYS be 0
groupNs.addRoom(new Room(0, 'Free Fyling Fun', 'Groups', true))
groupNs.addRoom(new Room(1, 'Flipping a Disk', 'Groups'))
groupNs.addRoom(new Room(2, 'West Coast Fribee Golfers', 'Groups'))

gameNs.addRoom(new Room(0, 'Frishee after lunch', 'Games'))
gameNs.addRoom(new Room(1, 'UI', 'Games'))
gameNs.addRoom(new Room(2, 'General', 'Games'))
gameNs.addRoom(new Room(3, 'Accounts', 'Games'))

namespaces.push(groupNs, gameNs)

module.exports = namespaces
