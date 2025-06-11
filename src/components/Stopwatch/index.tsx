import Button from "../Button";
import Clock from "./Clock";
import style from './Stopwatch.module.scss'
import { timeToSeconds } from "../../common/utils/date";
import Task from "../interfaces/Task";
import { useState, useEffect } from "react";

interface StopwatchProps {
  selected: Task | undefined
}

export function Stopwatch({selected}: StopwatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSeconds(selected.time))
    }
  }, [selected]);

  function reduceTime(time: number = 0) {
    setTimeout(() => {
      if(time > 0) {
        setTime(time - 1);
        reduceTime(time - 1);
      }
    }, 1000)

  }
  return(
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um car e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button texto="Iniciar" onClick={() => reduceTime(time)}/>
    </div>
  )
}