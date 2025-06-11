import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss'
import { Stopwatch } from '../components/Stopwatch';
import Task from '../components/interfaces/Task';


function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [selected, setSelected] = useState<Task>()

  function selectTask(selectedTask: Task) {
    setSelected(selectedTask)
    setTasks(prev => prev.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form tasks={tasks} setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask} 
      />
      <Stopwatch selected={selected} />
    </div>
  );
}

export default App;
