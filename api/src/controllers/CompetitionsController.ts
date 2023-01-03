import { inject, injectable } from 'tsyringe'
import { Router, Request, Response, NextFunction } from 'express'
import { IController, FacadeInvoker } from '../interfaces/IController'
import { header, param } from 'express-validator'
import ICompetitionsService from '../interfaces/ICompetitionsService'
import noCache from 'nocache'
import ICompetitionsFacade from '../interfaces/ICompetitionsFacade'
import { request } from 'http'
import ICompetitions from '../interfaces/ICompetitions'

 

@injectable()
class CompetitionsController implements IController {
  public path = '/competitions'
  public router = Router()
  private competitionsService: ICompetitionsService

  constructor(
    @inject('ICompetitionsService') competitionsService: ICompetitionsService
  ) {
    this.competitionsService = competitionsService
    this.initRoutes()
  }
  private initRoutes() {
    this.router.use('/competitions/', noCache())
    this.router.get('/competitions/search', this.getFutureCompetitions)
    console.log('hello 1')
  }

  getFutureCompetitions =  async (request: Request, response: Response) => {
    console.log('hello 22')
    response.setHeader('key1', 'value1')
    const status = await this.competitionsService.connectToDatabase()
    const data: ICompetitions[] = await this.competitionsService.getFutureCompetitions()
    
    console.log(data)
    response.send(data);
  }
}

export default CompetitionsController
