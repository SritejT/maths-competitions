import express, { Response } from 'express'
import https from 'https';
import cookieParser from 'cookie-parser'
import path from 'path'
import { injectable, inject, injectAll } from 'tsyringe'
import bodyParser from 'body-parser'
import terminate from './terminate'
import cors from 'cors'
import { IController } from './interfaces/IController'
const fs = require('fs');
const key = fs.readFileSync(path.join(__dirname, 'private', 'server.key'));
const cert = fs.readFileSync(path.join(__dirname, 'private', 'server.cert'));

@injectable()
class App {
  private app: express.Application
  private server: https.Server
  private port: number

  constructor (
    @injectAll('IController') controllers: IController[]
  ) {
    this.app = express()
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(cookieParser(process.env.COOKIE_SECRET))
    this.app.use(cors({ origin: '*' }))
    this.server = https.createServer({key: key, cert: cert}, this.app)
    this.initControllers(controllers)
    this.port = 5001

  }

  public close(): void {
    if (this.server) {
      this.server.close()
    }
  }

  public listen(): void {
    this.server.listen(this.port, () => {
      console.log('API listening on: 5001')
    })
  }

  public getApplication() {
    return this.app
  }

  public initControllers(controllers: IController[]) {
    controllers.forEach((controller) => {
      this.app.use('/api/v1/', controller.router)
    })
  }
}

export default App
