import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee,initialState } from './Types';
import { RootState } from '../../Reducer/Store';

const employeeSlice= createSlice({
    name:"employees",
    initialState,
    reducers:{
        addEmployee(state, action: PayloadAction<Employee>) {
            state.employees.push(action.payload);
          },
          updateEmployee(state, action: PayloadAction<Employee>) {
            const index = state.employees.findIndex(emp => emp.id === action.payload.id);
            if (index !== -1) {
              state.employees[index] = action.payload;
            }
          },
          deleteEmployee(state, action: PayloadAction<number>) {
            state.employees = state.employees.filter(emp => emp.id !== action.payload);
          },
    }
});

export const employeeActions = employeeSlice.actions;
export default employeeSlice.reducer;
export const employeeSelector = (state: RootState) => state.employeeReducer;