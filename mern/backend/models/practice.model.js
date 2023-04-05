const mongoose = require('mongoose')
const schema = mongoose.Schema;
const practiceSchema = new schema({
    username: {type: String, required: true},
    description:{type:String, required:true},
    duration:{type:Number,required:true}, 
    date:{type:Date, required:true}
}, {
    timeStamps: true
}
)
const Practice = mongoose.model('Practice', practiceSchema)
module.exports = Practice;