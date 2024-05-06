export interface Employee {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface EmployeeState {
    employees: Employee[];
}

export const initialState: EmployeeState = {
    employees: [{id: 1, name: "Hello world",phone:"",email:""}]
};