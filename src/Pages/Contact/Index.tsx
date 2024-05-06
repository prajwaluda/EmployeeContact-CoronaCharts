import { useState,FormEvent } from "react";
import { employeeActions, employeeSelector } from "./employeeSlice";
import { Employee } from "./Types";
import { useAppDispatch,useAppSelector } from "../../Reducer/hook";
import Navbar from "../../Components/Navbar";



const Contact = () => {
    const employees = useAppSelector(employeeSelector);
    const dispatch=useAppDispatch();
    const [showModal, setShowModal] = useState(false);//Add Employee Modal
    const [showModal2, setShowModal2] = useState(false);//Edit Employee Modal
    const [newEmployeeData, setNewEmployeeData] = useState({id:0, name: '', email: '', phone: ''});

    //Handle Addemployee screen
    const toggleModal = () => {
        setShowModal(!showModal);
        // Reset form fields
        setNewEmployeeData({ id:0,name: '', email: '', phone: '' });
    };

    //Handle Edit Employee Screen
    const toggleModal2 = (emp:Employee) => {
        setShowModal2(!showModal);
        // Reset form fields
        setNewEmployeeData({ id:emp.id,name: emp.name, email:emp.email , phone: emp.phone });
    };

    //Handle event Change 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewEmployeeData({ ...newEmployeeData, [name]: value });
    };

    //Handle Add Employee Form
    const handleAddEmployee = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newEmployee: Employee = { ...newEmployeeData, id: Math.random() };
        dispatch(employeeActions.addEmployee(newEmployee));
        toggleModal();
    };

    //Handle Edit Employee Form
    const handleUpdateEmployee = (updatedEmployee: Employee,e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(employeeActions.updateEmployee(updatedEmployee));
        setShowModal2(false);
      };

    //Handle Delete Employee
    const handleDeleteEmployee = (id: number) => {
        dispatch(employeeActions.deleteEmployee(id));
    };

  return (
    <div className="w-full top-0 overflow-y-auto" >
        <Navbar/>
        <div className="w-full flex justify-center sm:justify-end mt-10 sm:mt-0">
            <button onClick={toggleModal} data-modal-target="default-modal" type="button" data-modal-toggle="default-modal" className="inline-flex items-center w-42 px-4 py-2 my-3 sm:mx-20 text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add Employee
            </button>
        </div>
        {/* Add Employee Input*/}
        {showModal && (
        <div id="default-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed  backdrop-blur-sm right-0 top-0 sm:top-auto left-0 z-50 justify-center items-center w-full md:inset-0 h-screen-full">
            <div className="flex items-center mx-auto mt-32 relative p-4 w-full max-w-2xl max-h-full">
               
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full">
                     
                    <div className="flex items-center justify-end p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Add Employees
                        </h3>
                        <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    
                    <form 
                        onSubmit={handleAddEmployee}
                    >
                        <div className="grid gap-4 mx-20 my-10 mb-6 md:grid-cols-1">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" id="name" name="name" value={newEmployeeData.name} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                <input type="text" id="phone" name="phone" value={newEmployeeData.phone} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123459678" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                                <input type="text" id="email" name="email" value={newEmployeeData.email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required />
                            </div>
                            <div className="w-full flex justify-center">
                                <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        )}
        {/* Add Employee Edit*/}
        {showModal2 && (
        <div id="default-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed  backdrop-blur-sm right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="flex items-center mx-auto mt-32 relative p-4 w-full max-w-2xl max-h-full">
               
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full">
                     
                    <div className="flex items-center justify-end p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit Employees
                        </h3>
                        <button onClick={()=>setShowModal2(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    
                    <form 
                        onSubmit={(e)=>handleUpdateEmployee(newEmployeeData,e)}
                    >
                        <div className="grid gap-4 mx-20 my-10 mb-6 md:grid-cols-1">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" id="name" name="name" value={newEmployeeData.name} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                <input type="text" id="phone" name="phone" value={newEmployeeData.phone} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123459678" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                                <input type="text" id="email" name="email" value={newEmployeeData.email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required />
                            </div>
                            <div className="w-full flex justify-center">
                                <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        )}
        {/* Employees Details*/}
        {employees.employees.length > 1?(
            
       <div className="flex flex-wrap mt-10 sm:mt-0 sm:ml-72 items-center justify-center sm:justify-start gap-10 sm:gap-5">
       {employees.employees.slice(1).map(employee => (
            <div key={employee.id} className="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                    <h6 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{employee.name}</h6>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">Phone-no: {employee.phone}</p>
                    <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">Email: {employee.email}</p>
                    <div className="flex items-center gap-5">
                    <button onClick={()=>toggleModal2(employee)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Edit
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                    <button onClick={()=>handleDeleteEmployee(employee.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Delete
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                    </div>
                </div>
            </div>
            ))}
        </div>
        ):(
        <h1 className="w-full h-72 font-bold text-3xl flex items-center justify-center">
            No Employees Found
        </h1>
        )
        }
    </div>
  )
}

export default Contact