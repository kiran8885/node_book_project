var mongoose = require('mongoose')

async function connectTodatabase(){
try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to the monogo");
    }catch(error){
        console.log("error occured",error);
        
    }
}
module.exports = connectTodatabase