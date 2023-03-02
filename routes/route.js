const express = require('express');
const { newConversation, getConversation } = require('../controller/conversation-controller.js');
const { uploadFile } = require('../controller/image-controller.js');
const { newMessage, getMessages } = require('../controller/message-controller.js');
const {addUser, getUsers} = require('../controller/user-controller.js');
const { default: upload } = require('../utils/upload.js');





const route = express.Router();

route.post('/add', addUser)
route.get('/users',getUsers)

route.post('/conversation/add', newConversation)
route.post('/conversation/get' , getConversation)

route.post('/message/add',newMessage)
route.get('/message/get/:id' , getMessages)

route.post('/file/upload',   uploadFile);


module.exports = route