import Button from "../Button";
import Clock from "./Clock";
import style from './Stopwatch.module.scss'
import { timeToSeconds } from "../../common/utils/date";
import Task from "../interfaces/Task";
import { useState, useEffect, useRef } from "react";

interface StopwatchProps {
  selected: Task | undefined
  finishTask: () => void
}

export function Stopwatch({selected, finishTask}: StopwatchProps) {
  const inicialTime = timeToSeconds(selected?.time || '00:00');
  const [time, setTime] = useState<number>(inicialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTime(timeToSeconds(selected?.time ?? '00:00'));
  setIsRunning(false);

  // limpa qualquer intervalo antigo
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  }, [selected]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function end() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
    setTime(0);
    finishTask();
  }

  function reduceTime(time: number = 0) {
    if (isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsRunning(false);
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prev => {
          if (prev > 1) {
            return prev - 1;
          }
          // hit zero
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setIsRunning(false);
          finishTask();
          return 0;
        });
      }, 1000);
    }
  }
  return(
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um car e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <div className={style.buttons}>
        <Button
          texto={isRunning ? 'Parar' : 'Iniciar'}
          onClick={reduceTime}
        />
        {isRunning && (
          <Button
            texto="Finalizar"
            onClick = {end}
          />
        )}
      </div>
    </div>
  )
}