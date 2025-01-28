const mongoose = require('mongoose')
function connection(){
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("connected to database ")
    })
}
module.exports = connection