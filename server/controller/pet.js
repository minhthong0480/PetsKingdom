const Pet = require("../model/Pet")
const fs = require('fs')

const create = async (req, res)=>{
    //console.log('Pet created')
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
                res.status(400).send('Saving pet error')
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

const pets = async (req, res) => {
    let pets = await Pet.find({postedBy: req.user})
    .limit(24)
    .select('-image.data')
    .populate('postedBy', '_id name')
    .exec();
    //console.log(all)
    res.json(pets);
}

const allPets = async (req, res) => {
    let all = await Pet.find({})
    .limit(24)
    .select('-image.data')
    .populate('postedBy', '_id name')
    .exec();
    //console.log(all)
    res.json(all);
}
const image = async (req, res) => {
    let pet = await Pet.findById(req.params.petId).exec();
    if(pet && pet.image && pet.image.data !==null){
        res.set('Content-Type', pet.image.contentType)
        return res.send(pet.image.data)
    }
}

const deletePet = async(req, res)=>{
    let removed = await Pet.findByIdAndDelete(req.params.petId).select('-image.data').exec();
    res.json(removed);
};

module.exports = {create, pets,allPets, image, deletePet}