import style from './../List.module.scss';
import Task from '../../interfaces/Task';

export default function Item({task_name, time, selected, completed, id}: Task) {
  return (
    <li className={style.item}>
      <h3>{task_name}</h3>
      <span>{time}</span>
    </li>
  );
}