import { Request, Response, NextFunction } from 'express'
import { inject, injectable } from 'tsyringe'
import ICompetitionsService from '../interfaces/ICompetitionsService'
import ICompetitions from '../interfaces/ICompetitions'
import * as mongoDB from 'mongodb'
import * as dotenv from 'dotenv'
import CompetitionsMDB from '../interfaces/CompetitionsMDB'

@injectable()

class CompetitionsService implements ICompetitionsService {
  
               
  public collections: { competitions?: mongoDB.Collection } = {}
  public async connectToDatabase(): Promise<string> {
    dotenv.config()
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING as string);
    await client.connect();
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
    const competitionsCollection: mongoDB.Collection = db.collection(process.env.COMPETITIONS_COLLECTION_NAME as string);
  
    this.collections.competitions = competitionsCollection;
        
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${competitionsCollection.collectionName}`);
    return 'connected'
  }

  public async getFutureCompetitions(): Promise<ICompetitions[]> {
    try {
      const futureCompetitions = await ((this.collections.competitions as mongoDB.Collection).find({}).toArray()) as ICompetitions[];
       
      return futureCompetitions
    } catch {
      const error: ICompetitions[] = []
      return error
    }
  }
}

export default CompetitionsService
