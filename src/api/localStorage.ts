const USER_KEY = 'registeredUser'

export const saveUserToLocalStorage = (user: {
  username: string
  password: string
  email: string
  id: string
}) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem(USER_KEY)
  return user ? JSON.parse(user) : null
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem(USER_KEY)
}
