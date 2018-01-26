const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:'Thanks to introduce a name'
    },
    slug:{
        type:String,
        trim:true
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    location:{
        type:{
            type:String,
            default:'Point'
        },
        coordinates:[
            {
                type:Number,
                required:'Vous devez entrer des coordonnées'
            }
        ],
        address:{
            type:String,
            required : 'Vous devez fournir une adresse'
        }
    }
    
})

module.exports = mongoose.model('Magasin',schema)