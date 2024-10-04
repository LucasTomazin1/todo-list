import { InputText } from '../components/atoms/InputText'
import { useAuth } from '../hooks/useAuth'
import { getUsersFromLocalStorage } from '../api/localStorage'

export const LoginPage: React.FC = () => {
  const { handleLogin, setUsername, username, setPassword, password } =
    useAuth()

  const user = getUsersFromLocalStorage()
  console.log('Usuário registrado:', user)

  return (
    <main className="h-screen bg-zinc-900 pt-[80px] md:px-10 p-4">
      <form className="flex flex-col gap-4 max-w-[350px] m-auto">
        <InputText
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputText
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="p-1 m-2 rounded-2xl overflow-hidden border text-zinc-300 border-zinc-400 bg-gray-800"
          onClick={(e) => {
            e.preventDefault()
            handleLogin()
          }}
        >
          Entrar
        </button>
      </form>
    </main>
  )
}
