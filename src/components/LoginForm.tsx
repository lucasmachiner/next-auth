'use client'

import { signIn } from "next-auth/react"

export const LoginForm = () => {
  function Login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    const data = {
      cpf: form.get("cpf"),
      senha: form.get("senha")
    }

    console.log("data >>", data)


    //TODO -> Essa funcção como primeiro parametro passamos o tipo do Provider, no caso acredito que para nossa aplicação o "Credentials" é o mais adequado
    // Segundo paramentro é um objeto de "options" onde damos spred em nossas informações do formulario e passamos o sua url do "callbackUrl" para caso 
    // a autenticação funcionar, redireciona-lo para rotas que necessitando autenticação
    signIn('credentials', {
      ...data,
      callbackUrl: "/table"
    })
  }

  return (
    <form onSubmit={Login} style={{ background: "#FAFAFA", padding: '0.765rem', borderRadius: '5px', color: 'black', flexDirection: "column", display: 'flex', gap: "10px" }}>
      <input type="text" name='cpf' placeholder='CPF' />
      <input type="password" name='senha' placeholder='Senha' />
      <input type='submit' />
    </form>
  )
}