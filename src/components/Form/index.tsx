import { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss';
import Task from "../interfaces/Task";
import { v4 as uuidv4} from "uuid"

type TaskFormProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function TaskForm({tasks, setTasks }: TaskFormProps) {
  const [taskName, setTaskName] = useState('')
  const [taskTime, setTaskTime] = useState('')

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault()
    if(taskName && taskTime){
      const newTask: Task = {task_name: taskName, time: taskTime, selected: false, completed: false, id: uuidv4()};
      setTasks((prev) => [...prev, newTask]);
      setTaskName('');
      setTaskTime('');
    }
    return
  }
  return (
  <form onSubmit={handleAddTask} className={style.novaTarefa}>
    <div className={style.inputContainer}>
      <label htmlFor="tarefa">
        Adicione um novo Estudo
      </label>
      <input 
      type="text"
      value = {taskName}
      onChange={(event) => setTaskName(event.target.value)}
      name="tarefa"
      id="tarefa"
      placeholder="O que você vai estudar?"
      required
      />
    </div>
    <div className={style.inputContainer}>
      <label htmlFor="tempo">
        Tempo
      </label>
      <input 
      type='time'
      step='1'
      value={taskTime}
      onChange={(event) => setTaskTime(event.target.value)}
      name="tempo"
      id="tempo"
      min="00:00:00"
      max="01:30:00"
      required
        />
    </div>
    <Button
    texto = "Adicionar" />
  </form>
  )
}