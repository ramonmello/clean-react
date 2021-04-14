import React, { useContext } from 'react'
import S from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)
  const { isLoading } = state
  const { main } = errorState

  return (
    <div data-testid="error-wrap" className={S.errorWrap}>
      {isLoading && <Spinner className={S.spinner} />}
      {main && <span className={S.error}>{main}</span>}
    </div>
  )
}

export default FormStatus
