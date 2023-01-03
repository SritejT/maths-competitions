import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type CompetitionDataResponse = {
    _id: string;
    name: string;
    date: string;
    time: string;
    numberOfParticipants: number;

}

export type CompetitionDataResponseError = {
    message: string;
};

export const getFutureCompetitions = createAsyncThunk<CompetitionDataResponse[]>(
    'competitions/search',
    async () => {
        const url = 'https://localhost:5001/api/v1/competitions/search'
        const response = await axios.get(url)
        const data: CompetitionDataResponse[] = response.data
        return data
    }
)

type CompetitionsState = {
  // In `status` we will watch
  // if todos are being loaded.
  status: "loading" | "idle";
  
  // `error` will contain an error message.
  error: string | null;
  list: CompetitionDataResponse[];
};
  
const initialState: CompetitionsState = {
  list: [],
  error: null,
  status: "idle",
};

export const selectStatus = (state: RootState) => state;

export const competitionsSlice = createSlice({
    name: "competitions",
    initialState,
    reducers: {
      // ...
    },
  
    // In `extraReducers` we declare 
    // all the actions:
    extraReducers: (builder) => {
  
      // When we send a request,
      // `fetchTodos.pending` is being fired:
      builder.addCase(getFutureCompetitions.pending, (state) => {
        // At that moment,
        // we change status to `loading` 
        // and clear all the previous errors:
        state.status = "loading";
        state.error = null;
      });
  
      // When a server responses with the data,
      // `fetchTodos.fulfilled` is fired:
      builder.addCase(getFutureCompetitions.fulfilled, 
        (state, { payload }) => {
        // We add all the new todos into the state
        // and change `status` back to `idle`:
        state.list.push(...payload);
        state.status = "idle";
      });
  
      // When a server responses with an error:
      builder.addCase(getFutureCompetitions.rejected, 
        (state, { payload }) => {
        // We show the error message
        // and change `status` back to `idle` again.
        state.status = "idle";
      });
    },
  });
