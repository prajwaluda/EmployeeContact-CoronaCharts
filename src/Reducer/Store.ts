import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../Pages/Contact/employeeSlice';

export const Store = configureStore({
  reducer: {
     employeeReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;