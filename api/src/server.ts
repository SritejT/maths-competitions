import 'reflect-metadata'
import App from './app'
import './container'
import { container } from 'tsyringe'

const server = container.resolve<App>(App)

server.listen()

export default server
