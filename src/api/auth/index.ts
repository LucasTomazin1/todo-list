import { saveUserToLocalStorage } from '../localStorage'

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
  console.log(username, password)
}
