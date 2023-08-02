function taskReducer(tasks, action) {
    
    switch (action.type) {
        
        case "ADD_TASK": {
            return [
                ...tasks,
                {
                    id:action.id,
                    title: action.title,
                    description: action.description,
                    completed: false
                }
            ]
        }

        case "REMOVE_TASK": {
            return tasks.filter((task, index) => task.id !== action.id)
        }

        case "MARK_DONE": {
            return tasks.map((task, index) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            })
        }

        default: {
            throw Error("Unknown Action" + action.type)
        }
    }
}

export default taskReducer;