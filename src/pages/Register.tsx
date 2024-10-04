import { useNavigate, Link } from 'react-router-dom'
import { registerUser } from '../api/auth'
import { InputText } from '../components/atoms/InputText'
import { useState } from 'react'

export const RegisterPage: React.FC = () => {
  const router = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [passwordDiff, setPasswordDiff] = useState<boolean>()

  const handleRegister = () => {
    setPasswordDiff(false)
    if (password !== confirmPassword) {
      setPasswordDiff(true)
      return
    }
    registerUser(username, password, email)
    router('/login')
  }

  return (
    <main className="h-screen bg-zinc-900 pt-[80px] md:px-10 p-4">
      <form className="flex flex-col gap-4">
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
          className="p-1 rounded-2xl overflow-hidden border text-zinc-300 border-zinc-400 bg-gray-800"
          onClick={(e) => {
            e.preventDefault()
            handleRegister()
          }}
        >
          Registrar
        </button>

        <Link to="/login" className="text-zinc-300 underline">
          Já tenho uma conta
        </Link>
      </form>
    </main>
  )
}
