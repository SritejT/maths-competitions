import React from 'react';
import '../../sass/_CompetitionEntry.scss'


type CompetitionEntryProps = {
  id: string;
  name: string;
  date: string;
  time: string;
  numberOfParticipants: number;
}

const CompetitionEntry = ({
  id,
  name,
  date,
  time,
  numberOfParticipants
}: CompetitionEntryProps) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{date}</td>
        <td>{numberOfParticipants}</td>
      </tr>
    </>
  );
}

export default CompetitionEntry;
