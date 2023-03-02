const {conversation} = require('../model/Conversation');


const newConversation = async(req,res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        const exist = await conversation.findOne({members:{$all: [receiverId,senderId]}});

        if(exist){
            return res.status(200).json('conversation already exists');
        }

        const newConversation = new conversation({
            members:[senderId,receiverId]
        })

        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation)

    } catch (error) {
        res.status(500).json(error.message);
    }
}

const getConversation = async(req,res) => {

    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        const conversation1 = await conversation.findOne({members:{$all:[senderId,receiverId]}});
        res.status(200).json(conversation1)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {newConversation,getConversation}