import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import './style.scss'

interface Task {
  task_name: string,
  time: string
}

function App() {
   const [tasks, setTasks] = useState<Task[]>([])
  return (
    <div className="AppStyle">
      <Form tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
