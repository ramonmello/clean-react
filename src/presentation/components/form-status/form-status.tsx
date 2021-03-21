import React from 'react'
import S from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'

const FormStatus: React.FC = () => {
  return (
    <div className={S.errorWrap}>
      <Spinner className={S.spinner} />
      <span className={S.error}>Erro</span>
    </div>
  )
}

export default FormStatus
