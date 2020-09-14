import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { CalendarWeek } from "./date";

export enum Status {
  DONE = 0,
  REVIEW = 1,
  DELAYED = 2,
  NONE = 3,
}

export interface User {
  name: string;
  weeks: Status[];
}
interface MatrixStore {
  users: User[];
  weekStart: CalendarWeek;
  weekEnd: CalendarWeek;
}

interface UserPayload {
  index: number;
  user: User;
}
interface WeekTogglePayload {
  userIndex: number;
  weekIndex: number;
}
var initialState: MatrixStore = {
  users: [],
  weekStart: { year: 2020, week: 0 },
  weekEnd: { year: 2020, week: 0 },
};
for (let i: number = 0; i < 100; i++) {
  let weeks = [];
  for (let j: number = 0; j < 10; j++) {
    weeks.push(Math.floor(Math.random() * 4));
  }
  initialState.users.push({ name: "User", weeks: [...weeks] });
}
const matrixSlice = createSlice({
  name: "matrixSlice",
  initialState: initialState,
  reducers: {
    setUser: (state: MatrixStore, payload: PayloadAction<UserPayload>) => {
      state.users[payload.payload.index] = payload.payload.user;
      return state;
    },
    toggleWeek: (
      state: MatrixStore,
      payload: PayloadAction<WeekTogglePayload>
    ) => {
      state.users[payload.payload.userIndex].weeks[
        payload.payload.weekIndex
      ] += 1;
      state.users[payload.payload.userIndex].weeks[
        payload.payload.weekIndex
      ] %= 4;
      return state;
    },
    setWeekStart: (
      state: MatrixStore,
      payload: PayloadAction<CalendarWeek>
    ) => {
      state.weekStart = payload.payload;
      return state;
    },
    setWeekEnd: (state: MatrixStore, payload: PayloadAction<CalendarWeek>) => {
      state.weekEnd = payload.payload;
      return state;
    },
  },
});

export const store = configureStore({
  reducer: matrixSlice.reducer,
});
export const actions = matrixSlice.actions;
