import React, { useContext } from 'react'
import S from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className={S.inputWrap}>
      <input data-testid={`${props.name}-status`} title={getTitle()} {...props} readOnly onFocus={enableInput} />
    </div>
  )
}

export default Input
