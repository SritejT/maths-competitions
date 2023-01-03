import ICompetitions from './ICompetitions'
import * as mongoDB from 'mongodb'

interface ICompetitionsService {
  getFutureCompetitions(): Promise<ICompetitions[]>
  collections: { competitions?: mongoDB.Collection }
  connectToDatabase(): void 
}

export default ICompetitionsService
