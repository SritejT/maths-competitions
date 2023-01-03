import ICompetitions from './ICompetitions'
import { Request, Response, NextFunction } from 'express'

interface ICompetitionsFacade {
    getFutureCompetitions: (req: Request, res: Response, next: NextFunction) => Promise<void> 
}

export default ICompetitionsFacade
