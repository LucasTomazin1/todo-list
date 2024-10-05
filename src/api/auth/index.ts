import { saveUserToLocalStorage } from '../localStorage'
import { getUsersFromLocalStorage } from '../localStorage'

export const registerUser = (
  username: string,
  password: string,
  email: string,
  id: string,
) => {
  console.log(username, password, email, id)
  saveUserToLocalStorage({ username, password, email, id })
}

export const loginUser = (username: string, password: string) => {
  const users = getUsersFromLocalStorage()

  if (!users) {
    return
  }

  const foundUser = users.find(
    (user: { username: string; password: string }) =>
      user.username === username && user.password === password,
  )
  if (foundUser) {
    return true
  } else {
    return false
  }
}
export const logoutUser = (username: string) => {
  const users = getUsersFromLocalStorage()
  const user = users.find(
    (user: { username: string }) => user.username === username,
  )
  if (!user) return

  if (user) return false
}
