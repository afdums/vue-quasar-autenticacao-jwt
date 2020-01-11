import Client from './config.js'

export const login = (body) => {
  console.log('body', body)
  return Client.post('login', body)
}
