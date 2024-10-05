import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export const UserMenu: React.FC = () => {
  const { handleLogout, isLoggedIn } = useAuth()
  const [showSettings, setShowSettings] = useState(false)

  const handleLogoutClick = () => {
    handleLogout()
    setShowSettings(false)
  }
  return (
    <>
      {isLoggedIn && (
        <nav className="m-auto bg-zinc-900 px-2 py-3 shadow-xl rounded-md">
          <ul className="flex flex-col gap-4 text-zinc-200">
            <li>
              <button>Tema claro</button>
            </li>
            <li>
              <button onClick={() => setShowSettings(!showSettings)}>
                Configurações
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleLogoutClick()
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}
