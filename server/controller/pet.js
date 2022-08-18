const Pet = require("../model/Pet")
const fs = require('fs')

const create = async (req, res)=>{
    console.log('Pet created')
    // console.log('req.fields', req.fields);
    // console.log('req.files', req.files);
    try {
        let fields = req.fields
        let files = req.files

        let pet = new Pet(fields);
        //handle image 
        if(files.image){
            pet.image.data = fs.readFileSync(files.image.path);
            pet.image.contentType = files.image.type;
        }
        pet.save((error, result)=>{
            if(error){
                console.log('Cannot save pet', error)
                res.status(400).send('Error saving')
            }
            res.json(result);
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({
            err: err.message
        })
    }
}

module.exports = {
    create
}