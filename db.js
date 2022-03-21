const mongoose = require('mongoose');

const mogoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"


const connectToMongo = () =>{
    mongoose.connect(mogoURI, ()=>{
        console.log("DB Connected Successfully");
    })
}

module.exports = connectToMongo;