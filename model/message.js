const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    conversationId:{
        type:String
    },
    senderId:{
        type:String
    },
    receiverId:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    }
},{
    timestamps:true
}
)

const message = mongoose.model('message' , MessageSchema);

module.exports = {message}