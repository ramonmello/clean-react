import React, { memo } from 'react'
import S from './footer-styles.scss'

const LoginHeader: React.FC = () => {
  return (
    <footer className={S.footer} />
  )
}

export default memo(LoginHeader)
