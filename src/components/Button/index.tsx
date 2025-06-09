import { useState } from 'react';
import './styles.scss';

export default function Button() {
  const [ativo, setAtivo] = useState(false)
  return (
    <button
      onMouseEnter={() => setAtivo(true)}
      onMouseLeave={() => setAtivo(false)}
      className='botao'
    >
      Button
    </button>
  )
}
