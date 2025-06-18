import React, {useState, useEffect} from "react";
import axios from 'axios'

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        fetchTasks();
    }, [])

    const fetchTasks = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/tasks/')
            setTasks(res.data);
        }
        catch (err) {
            console.log('Error fetching tasks: ', err)
            setErr('Failed to fetch data from the server');
        }
    };

    const addTask = async () => {
        if (!newTask.trim()) return; // Prevent adding empty tasks
        try {
            const res = await axios.post('http://localhost:8000/api/tasks/', { title: newTask,
                completed: false
             });
            // Assuming the response contains the newly created task
            console.log('Task added: ', res.data);

            setTasks([...tasks, res.data]);
            setNewTask('');
        } 
        catch (err) {
            console.log('Error creating task: ', err);
            setErr('Failed to create task');
        }
    }

  return (
    <div>
        <h1>Task List</h1>

        <div>
            <input name="newTask" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a new task" />
            <button 
                onClick={addTask}>
                Add Task
            </button>
        </div>

        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span>
                        {task.title}
                    </span>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default TaskList;