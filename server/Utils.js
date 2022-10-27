const users = [];
const getUser = (socket_id) => users.find(user => user.socket_id === socket_id)
module.exports = { getUser }


// io.on('connection', (socket) => {
//     console.log(socket.id);
    
//     socket.on('join', ({ name, room_id, user_id }) => {
//         const { error, user } = addUser({
//             socket_id: socket.id,
//             name,
//             room_id,
//             user_id
//         })
//         socket.join(room_id);
//         if (error) {
//             console.log('join error', error)
//         } else {
//             console.log('join user', user)
//         }
//     })
//     socket.on('sendMessage', (message, room_id, callback) => {
//         const user = getUser(socket.id);
//         const msgToStore = {
//             name: user.name,
//             user_id: user.user_id,
//             room_id,
//             text: message
//         }
//         console.log('message', msgToStore)
//         const msg = new Message(msgToStore);
//         msg.save().then(result => {
//             io.to(room_id).emit('message', result);
//             callback()
//         })

//     })
//     socket.on('get-messages-history', room_id => {
//         Message.find({ room_id }).then(result => {
//             socket.emit('output-messages', result)
//         })
//     })
//     socket.on('disconnect', () => {
//         const user = removeUser(socket.id);
//     })
// });