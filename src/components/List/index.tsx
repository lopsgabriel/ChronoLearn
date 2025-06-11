import React from 'react';
import style from './List.module.scss';
import Item from './Item';
import Task from '../interfaces/Task';

interface ListProps {
  tasks: Task[],
  selectTask: (task: Task) => void
}

export default function List({tasks, selectTask}: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(item => (
          <Item
            selectTask={selectTask}
            task={item}
            key={item.id}
          />
        ))}
      </ul>
    </aside>
  );
}