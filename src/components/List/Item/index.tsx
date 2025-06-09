import style from './../List.module.scss';
interface ItemProps {
  task_name: string;
  time: string;
}
export default function Item({task_name, time}: ItemProps) {
  return (
    <li className={style.item}>
      <h3>{task_name}</h3>
      <span>{time}</span>
    </li>
  );
}