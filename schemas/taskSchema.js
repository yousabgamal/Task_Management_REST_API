const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    title: { type: String , required: true },
    description: { type: String , required: true },
    taskStatus: { type: String , enum: ["todo", "inProgress", "done"] , default: "todo" },
    creationTime: { type: Date }
});

module.exports  = mongoose.model('Task', tasksSchema);
