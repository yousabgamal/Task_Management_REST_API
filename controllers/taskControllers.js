const Task = require('../schemas/taskSchema');

const addTask = async (req , res) => {
  try {
    const { title, description, taskStatus } = req.body;
    const currentDate = new Date().toISOString().split('T')[0];
    const newTask = new Task({
      title,
      description,
      taskStatus,
      creationTime: currentDate
    });
    await newTask.save();
    res.json({data:newTask});
  } catch(err){
    res.status(500).json({Error:err.message});
  }
};

const getAllTasks = async (req , res) => {
  const query = req.query;
  const limit = query.limit || 4;// (4) is the default value
  const page = query.page || 1;// (1) is the default value
  const skip = (page - 1) * limit;
  try{
      const data = await Task.find({} , {
          "__v":false
      }).limit(limit).skip(skip);
      res.json({data:data});
  } catch(err){
      res.status(500).json({Error:err.message});
  }
};

const getTaskByID = async (req , res) => {
  try{
    const taskID =  req.params.taskID;
    const taskData = await Task.findById(taskID , {
      "__v":false
    });
    res.json({data:taskData});
  } catch(err){
      res.status(500).json({Error:err.message});
  }
};

const deleteTask = async (req , res) => {
  try{
    const taskID =  req.params.taskID;
    const taskData = await Task.findByIdAndDelete(taskID);
    res.json({message : `${taskData.title} deleted successfully.`});
  } catch(err){
      res.status(500).json({Error:err.message});
  }
};

const updateTask = async (req , res) => {
  try{
    const taskID =  req.params.taskID;
    const taskData = await Task.findByIdAndUpdate(taskID , req.body, {new: true});
    res.json({data:taskData});
  } catch(err){
      res.status(500).json({Error:err.message});
  }
};

const getTaskByStatus = async (req , res) => {
  try{
    const taskStatus = req.params.taskStatus;
    const allowed = ["todo", "done", "inProgress"];
    if (!allowed.includes(taskStatus)) {
      return res.status(400).json({ message: "Invalid status" });
    } else{
      const data = await Task.find({taskStatus} , {
        "__v":false
      });
      if(data.length === 0){
        res.status(404).json({message:'No tasks found!!'});
      } else{
        res.json({data:data});
      }
    }
  } catch(err){
      res.status(500).json({Error:err.message});
  }
}

module.exports = {
    addTask,
    getAllTasks,
    getTaskByID,
    deleteTask,
    updateTask,
    getTaskByStatus
}