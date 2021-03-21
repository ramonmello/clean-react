import React from 'react'
import S from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={S.inputWrap}>
      <input {...props} />
    </div>
  )
}

export default Input
