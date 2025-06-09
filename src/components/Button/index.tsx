import { useState } from 'react';
import style from './Button.module.scss';
export default function Button() {
  const [ativo, setAtivo] = useState(false)
  return (
    <button
      onMouseEnter={() => setAtivo(true)}
      onMouseLeave={() => setAtivo(false)}
      className={style.botao}
    >
      Button
    </button>
  )
}
