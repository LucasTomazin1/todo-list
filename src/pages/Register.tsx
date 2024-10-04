import { useNavigate } from 'react-router-dom'
import { Button } from '../components/atoms/Button'
import { registerUser } from '../api/auth'

export const RegisterPage: React.FC = () => {
  const router = useNavigate()

  return (
    <main className="h-screen bg-zinc-900 pt-[80px] md:px-10 p-4">
      <section>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirme a senha" />
          {/* <Button
            tag="Registrar"
            onClick={registerUser(username, password, email)}
          /> */}
          <Button tag="Já tenho uma conta" onClick={() => router('/login')} />
        </form>
      </section>
    </main>
  )
}
