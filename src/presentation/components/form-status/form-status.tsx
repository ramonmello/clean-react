import React, { useContext } from 'react'
import S from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={S.errorWrap}>
      {isLoading && <Spinner className={S.spinner} />}
      {errorMessage && <span className={S.error}>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus
