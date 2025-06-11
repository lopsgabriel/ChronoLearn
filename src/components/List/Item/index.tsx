import style from './../List.module.scss';
import Task from '../../interfaces/Task';

interface ItemProps {
  task: Task,
  selectTask: (task: Task) => void
}

export default function Item({task, selectTask}: ItemProps) {
  return (
    <li className={`${style.item} ${task.selected ? style.itemSelecionado : ''} ${task.completed ? style.itemCompletado : ''}`} onClick={() => !task.completed && selectTask(task)}>
      <h3 >{task.task_name}</h3>
      <span>{task.time}</span>
      {task.completed && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}