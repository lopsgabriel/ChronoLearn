import React from "react";

interface Task {
  task_name: string;
  time: string;
}

interface ListProps {
  tasks: Task[];
}

function List({tasks}: ListProps) {
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
            <li key={index}>
              <h3>{item.task_name}</h3>
              <span>{item.time}</span>
            </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;