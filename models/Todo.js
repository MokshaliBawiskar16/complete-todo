const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    //                                            👇mongo jo id bani hai oh User.js key file  
    userId: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
    complete: { type: Boolean, default: true }
})

module.exports = mongoose.model("todo", todoSchema)