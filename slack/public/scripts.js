const username = prompt('What is your username?')
// const socket = io('http://localhost:9400')
const socket = io('http://localhost:9400', {
  query: {
    username,
  },
})
let nsSocket = ''
// receives the namespace array, and then dynamically updates the namespaces with img and endpoint
socket.on('nslist', (nsData) => {
  console.log('the list of namespaces has arrived!!')
  let namespacesDiv = document.querySelector('.namespaces')
  namespacesDiv.innerHTML = ''
  nsData.forEach((ns) => {
    namespacesDiv.innerHTML += `<div class='namespace' ns=${ns.endpoint} ><img src=${ns.img} /></div>`
  })

  Array.from(document.getElementsByClassName('namespace')).forEach((elem) => {
    elem.addEventListener('click', (e) => {
      const nsEndpoint = elem.getAttribute('ns')
      // console.log(nsEndpoint)
      joinNs(nsEndpoint)
    })
  })
  joinNs('/codeshock')
})
