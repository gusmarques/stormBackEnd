const User = require('../models/User');

module.exports = {

   async index(req, res){
       const users = await User.find()

       res.json(users)
   },
   async store(req,res) {
       const {nome,email,dateInclusion,dateChange,rules,status} = req.body; 
     
   const user = await User.create({
       nome,
       email,
       dateInclusion,
       dateChange,
       rules,
       status
    
    
    })

   return res.json(user);

   }
};