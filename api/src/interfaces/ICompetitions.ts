import { WithId, Document } from "mongodb"

interface ICompetitions extends WithId<Document> {
  name: string;
  date: string;
  time: string;
  numberOfParticipants: number
}

export default ICompetitions
