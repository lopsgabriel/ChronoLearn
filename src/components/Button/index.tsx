import { useState } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  texto: string
}

export default function Button(texto: ButtonProps) {
  const [ativo, setAtivo] = useState(false)
  return (
    <button
      onMouseEnter={() => setAtivo(true)}
      onMouseLeave={() => setAtivo(false)}
      className={style.botao}
    >
      {texto.texto}
    </button>
  )
}
