const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')

exports.home= async (req,res)=>{
    const magasins= await Magasin.find()
    
   
    res.render('home',{title:'ma home page', test:'est du contenu dynamique',magasins:magasins})
}
exports.about= (req,res)=>{
    res.render('about',{title:'bout', test:'est du contenu dynamique'})
}