import express from "express"
import { addTask, getTasks, removeTask, updateTask} from "../controllers/taskController.js"
const router = express.Router();

router.post("/addTask",addTask);
router.get("/getAllTasks",getTasks);
router.delete("/removeTask/:id",removeTask);
router.put("/updateTask/:id",updateTask);

export default router;