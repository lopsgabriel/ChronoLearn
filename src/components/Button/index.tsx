import { useState } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  texto: string
  onClick?: () => void
}

export default function Button({texto, onClick}: ButtonProps) {
  const [ativo, setAtivo] = useState(false)
  return (
    <button
      onMouseEnter={() => setAtivo(true)}
      onMouseLeave={() => setAtivo(false)}
      onClick={onClick}
      className={style.botao}
    >
      {texto}
    </button>
  )
}
