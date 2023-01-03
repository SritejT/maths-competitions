import React, { useEffect } from 'react';
import CompetitionEntry from './CompetitionEntry';
import { getFutureCompetitions } from './CompetitionsService';
import { useAppDispatch } from '../../app/hooks';
import { CompetitionDataResponse } from './CompetitionsService';
import { useTypedSelector } from '../../app/store';
import { selectData } from './state/CompetitionsSlice';

const CompetitionTable = () => {

  const dispatch = useAppDispatch();
  const data = useTypedSelector(selectData)

  return (
    <>
      <button onClick={() => dispatch(getFutureCompetitions())}>
      </button>

      {console.log(JSON.stringify(data))}

      <table>
        {data.map((record, index) =>
        <CompetitionEntry
        id={record.id}
        name={record.name}
        date={record.date}
        time={record.time}
        numberOfParticipants={record.numberOfParticipants} />
        )}
      </table>
        
    </> 
  );
}

export default CompetitionTable;
