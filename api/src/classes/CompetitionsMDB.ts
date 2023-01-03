import { ObjectId } from "mongodb";
import type { WithId, Document } from 'mongodb'

export default class CompetitionsMDB {
    constructor(public name: string, 
                public date: string, 
                public time: string,
                public numberOfParticipants: number,
                public id?: ObjectId) {}
}