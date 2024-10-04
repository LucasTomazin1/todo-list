import { Link } from 'react-router-dom'
import { InputText } from '../components/atoms/InputText'
import { useAuth } from '../hooks/useAuth'

export const RegisterPage: React.FC = () => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
    passwordDiff,
  } = useAuth()

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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputText
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {passwordDiff && (
          <p className="text-red-500">As senhas não são iguas</p>
        )}

        <button
          className="p-1 m-2 rounded-2xl overflow-hidden border text-zinc-300 border-zinc-400 bg-gray-800"
          onClick={(e) => {
            e.preventDefault()
            handleRegister()
          }}
        >
          Registrar
        </button>

        <Link to="/login" className="text-zinc-300 underline m-auto">
          Já tenho uma conta
        </Link>
      </form>
    </main>
  )
}
