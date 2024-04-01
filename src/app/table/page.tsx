import { getServerSession } from "next-auth"

const Table = async () => {
  const session = await getServerSession()

  return (
    <div>
      <div>
        <h1>Tabela</h1>
        <h3>Ola, {session?.user?.name}</h3>
      </div>
    </div>
  )
}

export default Table