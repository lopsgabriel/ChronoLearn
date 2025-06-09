import React from 'react';
import style from './List.module.scss';
import Item from './Item';

interface Task {
  task_name: string;
  time: string;
}

interface ListProps {
  tasks: Task[];
}

export default function List({tasks}: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
            {...item}
            key={index}
          />
        ))}
      </ul>
    </aside>
  );
}