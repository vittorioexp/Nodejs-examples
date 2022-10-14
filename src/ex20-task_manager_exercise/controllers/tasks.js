const Task = require("../models/Tasks");
const asyncWrapper = require("../middleware/async");
const {createCustomError, CustomAPIError} = require("../errors/custom-error");

const getAllTasks = asyncWrapper( async (req,res)=>{
    const tasks = await Task.find({});
    res.status(200).json({tasks});
});

const createTask = asyncWrapper(async (req,res)=>{
    const task = await Task.create(req.body);
    res.status(201).json({task});
});

const getTask = asyncWrapper(async (req,res,next)=>{
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id:taskID});
    if (!task) {
        let e = new CustomAPIError("Task not found", 404);
        return next(e);
    }
    res.status(200).send({task});
});

const deleteTask = asyncWrapper(async (req,res)=>{
    const {id:taskID} = req.params;
    const task = await Task.deleteOne({_id:taskID});
    if (!task) {
        let e = new CustomAPIError("Task not found", 404);
        return next(e);
    }
    res.status(200).send({task});
});

const updateTask = asyncWrapper(async (req,res)=>{
    const {id:taskID} = req.params;
    const task = await Task.findOneAndUpdate(
        {_id:taskID},
        req.body,
        {
            new: true,
            runValidators: true
    });
    if (!task) {
        let e = new CustomAPIError("Task not found", 404);
        return next(e);
    }
    res.status(200).send({task});
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}