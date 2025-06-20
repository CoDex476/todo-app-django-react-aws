import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './TaskList.module.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://task-api.codex.com/api/tasks/');
      setTasks(res.data);
    } catch (err) {
      console.log('Error fetching tasks:', err);
      setErr('Failed to fetch data from the server');
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;

    try {
      const res = await axios.post('http://task-api.codex.com/api/tasks/', {
        title: newTask,
        completed: false,
      });

      setTasks([...tasks, res.data]);
      setNewTask('');
      setErr('');
    } catch (err) {
      console.log('Error creating task:', err);
      setErr('Failed to create task');
    }
  };

  const toggleTaskCompletion = async (task) => {
    try {
      const res = await axios.put(`http://task-api.codex.com/api/tasks/${task.id}/`, {
        title: task.title,
        completed: !task.completed,
      });

      setTasks(tasks.map(t => t.id === task.id ? res.data : t));
    } catch (err) {
      console.log('Error updating task:', err);
      setErr('Failed to update task');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://task-api.codex.com/api/tasks/${id}/`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      console.log('Error deleting task:', err);
      setErr('Failed to delete task');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Task List</h1>

      {err && <p className={styles.error}>{err}</p>}

      <div className={styles.inputGroup}>
        <input
          name="newTask"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className={styles.input}
        />
        <button onClick={addTask} className={styles.addButton}>Add Task</button>
      </div>

      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <span
              onClick={() => toggleTaskCompletion(task)}
              className={`${styles.taskTitle} ${task.completed ? styles.completed : ''}`}
            >
              {task.title}
            </span>
            <button className={styles.deleteButton} onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
