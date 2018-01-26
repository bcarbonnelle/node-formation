const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')
const multer = require('multer')
const jimp = require('jimp')
const uuid = require('uuid')


exports.addMagasin=(req,res)=>{

    res.render('magasin_edit',{title:'Ajouter un magasin',magasin:{}})
}
exports.createMagasin= async (req,res)=>{

    const newMagasin = await new Magasin(req.body).save()  
     
    res.redirect('/')
    
}
exports.getMagasinBySlug = async (req,res) =>{
    const magasin = await Magasin.findOne({slug : req.params.slug})
    res.render('magasin_details',{'magasin':magasin})
}
const multerOptions = {
    strorage:multer.memoryStorage(),
    fileFilter(req,file,next){
        
        const isPhoto = file.mimetype.startsWith(`image/`)
        
        if(isPhoto){
            next(null,true)
        }
        else{
            next({message:'this file type is not allowed'})
        }
    }
}
exports.upload = multer(multerOptions).single('image')
exports.resize = async (req,res,next)=>{
    if(!req.file){
        next();
        return;
    }
    const extension = req.file.mimetype.split('/')[1]
    req.body.image = `${uuid.v4()}.${extension}`
    const photo = await jimp.read(req.file.buffer)
    await photo.resize(800,jimp.AUTO)
    await photo.write(`${process.cwd()}/public/uploads/${req.body.image}`)
    next()
}
exports.editMagasin= async(req,res)=>{
    const magasinToUpdate = await Magasin.findOne({_id : req.params.id})
    
    
    res.render('magasin_edit',{'magasin':magasinToUpdate})
}
exports.updateMagasin = async(req,res) =>{
    const newMagasin = await Magasin.findByIdAndUpdate({_id : req.params.id},req.body,{new:true}).exec()
    res.redirect(`/magasins/${newMagasin.slug}`)
}