import React from 'react'
import S from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Header from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'

const Login: React.FC = () => {
  return (
    <div className={S.login}>
      <Header />
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
      <Footer />
    </div>
  )
}

export default Login
