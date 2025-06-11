import React from "react";
import style from './Clock.module.scss'

interface ClockProps {
  time: number | undefined
}

export default function Clock({time = 0}: ClockProps) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesDozen, minutesUnit] = String(minutes).padStart(2, '0');
  const [secondsDozen, secondsUnit] = String(seconds).padStart(2, '0'); 
  return (
    <>
        <span className={style.relogioNumero}>{minutesDozen}</span>
        <span className={style.relogioNumero}>{minutesUnit}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{secondsDozen}</span>
        <span className={style.relogioNumero}>{secondsUnit}</span>
    </>
  )
}