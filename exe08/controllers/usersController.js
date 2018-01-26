const validator = require('validator')

exports.login= (req,res,next)=>{
    res.render('login', {user:{}})
}
exports.verify= (req,res,next)=>{
    res.render('login',{title:'Login'})
}
exports.registerForm= (req,res,next)=>{
    res.render('register', {user:{}})
}
exports.validateRegister= (req,res,next)=> {
    console.log('validation started')
    req.sanitizeBody('name')
    req.checkBody('name','Vous devez entrer un nom').notEmpty()
    req.checkBody('email','Veuillez entrer un email').notEmpty()
    req.checkBody('password','Veuillez entrer un mot de passe').notEmpty()
    req.checkBody('password-confirm','Veuillez entrer le mot de passe une deuxième fois').notEmpty()
    req.checkBody('password-confirm','Les mots de passe ne sont pas identiques').equals(req.body.password)

    const errors =req.validationErrors();
    if(error){
        console.log('validation failed')
        res.render('register',{'errors':errors})
    }
    next()
    
}
exports.register= async (req,res,next)=>{
    console.log('creation started')
     
    res.redirect('/')
}