const express =require('express')
const app = express()
const http =require('http')
const socket =require('socket.io')

const cors = require('cors')
app.use(cors())



const server= http.createServer(app)
app.use(express.urlencoded());



const io =socket(server) 
    
io.on('connection',function(socket){
    console.log('new connection....')


    var name2
    socket.on('message',function(msg){
        // console.log(msg)
        
        socket.broadcast.emit('message',msg)
        var data={}
        data.name=msg.user
        data.message=msg.message

        const dateTime = new Date();
        const formattedDate = dateTime.toLocaleDateString('en-IN');
        const formattedTime = dateTime.toLocaleTimeString('en-IN');
        
        data.dateTime=formattedDate +" "+formattedTime
        console.log(data)
        
    })

    socket.on('disconnect', async (name) => {
        console.log('Disconnected from Socket.IO server');
        console.log(name2)
        await liveUsersModel.deleteMany({userName:name2})

        // Perform any necessary cleanup or actions here
        socket.broadcast.emit('disName',name2)

    });

})



server.listen(3000, function(){
    console.log("server is running ",3000)
})