import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss'
import { Stopwatch } from '../components/Stopwatch';
import Task from '../components/interfaces/Task';


function App() {
   const [tasks, setTasks] = useState<Task[]>([])
  return (
    <div className={style.AppStyle}>
      <Form tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
