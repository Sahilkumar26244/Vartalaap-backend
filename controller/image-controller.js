

const url = "http://localhost:8000";

const uploadFile = async(req,res) => {
    if(!req.file) {
        return res.status(404).json("file not found")
    }

    const imageUrl = `${url}/file/${req.file.fileName}`;

    return res.status(200).json(imageUrl)
}

module.exports = {uploadFile}