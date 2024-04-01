import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

//TODO -> Essa configuração vc pega toda na documentação do next-auth, sendo:
// inicialização do arquivo (Route Handlers (app/)): https://next-auth.js.org/configuration/initialization
// e configuração do tipo do provider, de acordo com qual deseja, no nosso caso é o Credentials: https://next-auth.js.org/configuration/providers/credentials

//TODO -> Para conseguir realizar a autenticação é necessario configurar o .env para ter as variaveis de ambiente NEXTAUTH_URL e NEXTAUTH_SECRET
const handler = NextAuth({
  pages: {
    signIn: "/"
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        cpf: { label: "CPF", type: "text", placeholder: "cpf" },
        senha: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // const res = await fetch("/your/endpoint", {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" }
        // })
        // const user = await res.json()
        // if (res.ok && user) {
        //   return user
        // }
        // return null

        console.log("credintals >>>", credentials)

        if (!credentials) {
          return null
        }

        if (credentials.cpf === "1234" && credentials.senha === "1234") {
          return {
            id: '1',
            name: 'Lucas Machiner',
            email: 'lucas.machiner@agileconnect.com.br'
          }
        }

        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }