import React, { memo } from 'react'
import S from './login-header-styles.scss'
import Logo from '@/presentation/components/logo/logo'

const LoginHeader: React.FC = () => {
  return (
    <header className={S.header}>
      <Logo />
      <h1>4Dev - Enquete para Programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
