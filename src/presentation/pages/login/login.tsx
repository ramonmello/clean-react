import React from 'react'
import S from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Logo from '@/presentation/components/logo/logo'

const Login: React.FC = () => {
  return (
    <div className={S.login}>
      <header className={S.header}>
        <Logo />
        <h1>4Dev - Enquete para Programadores</h1>
      </header>
      <form className={S.form}>
        <h2>Login</h2>
        <div className={S.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
        </div>
        <div className={S.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua senha" />
        </div>
        <button className={S.submit} type="submit">Entrar</button>
        <span className={S.link}>Criar conta</span>
        <div className={S.errorWrap}>
          <Spinner className={S.spinner} />
          <span className={S.error}>Erro</span>
        </div>
      </form>
      <footer className={S.footer} />
    </div>
  )
}

export default Login
