const USERS_KEY = 'registeredUsers'

export const saveUserToLocalStorage = (user: {
  username: string
  password: string
  email: string
  id: string
}) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  users.push(user)
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export const getUsersFromLocalStorage = () => {
  const user = localStorage.getItem(USERS_KEY)
  return user ? JSON.parse(user) : null
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem(USERS_KEY)
}
