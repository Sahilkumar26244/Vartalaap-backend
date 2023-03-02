const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage')
const dotenv = require('dotenv');
dotenv.config()


const mongo = process.env.MONGO_URL;
console.log(mongo)
const storage = new GridFsStorage({
    url:mongo,
    options:{useUnifiedTopology:true , useNewUrlParser:true},
    file: (request,file) => {
        const match = ["image/png","image/jpg"];
        if(match.indexOf(file.mimeType) === -1) {
            return `${Date.now()}-file-${file.originalName}`;
        }

        return {
            bucketName:"photos",
            fileName:`${Date.now()}-file-${file.originalName}`
        }
    }
})

module.exports =  multer({storage})