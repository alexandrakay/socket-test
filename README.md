# Socket.io

- JS => script.js
- UI => chat.html
- SR => server => chat.js

- 1. JS -> SR: join the main namespace (NS) ('/')
- 2. SR -> JS: send back NS info
- 3. JS -> UI: update DOM with NS
- 4. JS -> SR: join a 2nd NS (ie workspace in slack)
- 5. SR -> JS: send room info
- 6. SR -> UI: update DOM with room info
- 7. JS -> SR: join a room
- 8. SR -> JS: send room chat history
- 9. JS -> UI: update DOM w/ chat history
# socket-test
