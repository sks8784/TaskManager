import taskModel from "../models/taskModel.js";
import dotenv from "dotenv";
dotenv.config();

const addTask = async (req, res) => {

    try {
        const newTask = await taskModel.create(req.body);
        return (res.status(200).json({
            message: "Task added successfully",
            newTask
        }))
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })

    }
}
const removeTask = async (req, res) => {
 
    try {
        const id = req.params.id;
        const task = await taskModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Task deleted successfully",
            data: task
        })
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: error.message
        })
    }
}

const getTasks = async (req, res) => {
    
    try {
        const data = await taskModel.find();
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: error.message
        })
    }
}

const updateTask = async (req, res) => {
   
    try {
        const id = req.params.id;
        const task = await taskModel.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        return res.status(200).json({
            message: "Task deleted successfully",
            data: task
        })
    } catch (error) {
        res.status(501).json({
            message: error.message
        })
    }
}

export { addTask, getTasks, removeTask, updateTask }
