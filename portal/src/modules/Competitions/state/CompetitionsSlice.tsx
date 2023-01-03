import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export type CompetitionDataResponse = {
    id: string;
    name: string;
    date: string;
    time: string;
    numberOfParticipants: number;

}

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
    
export const getCompetitionsSlice = createSlice({
    // A name, used in action types:
    name: "getCompetitions",
    
    // The initial state:
    initialState,
    
    // An object of "case reducers". 
    // Key names will be used to generate actions:
    reducers: {
      addCompetitions(
        // Arguments of actions are basically the same.
        // The first one is the state,
        // the second one is an action.
        state: CompetitionsState, 
         
        // `PayloadAction` is a generic-type
        // that allows you to specify an action
        // with a typped payload.
        // In our case, this payload is of `Todo` type:
        action: PayloadAction<CompetitionDataResponse>
      ) {
        // RTK allows us to write 
        // “mutating” logic in reducers. 
        // It doesn't actually mutate the state 
        // because it uses the Immer library,
        // which detects changes to a "draft state" 
        // and produces a brand new
        // immutable state based off those changes:
        state.list.push(action.payload);
      },
    }
})

export const selectData = (state: RootState) => state.getCompetitions.list

export default getCompetitionsSlice.reducer