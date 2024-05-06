import { useState } from "react";
import { useLocation,Link } from "react-router-dom";
function Navbar() {
    const location=useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <div className="max-w-screen-l flex flex-col bg-blue-300 sm:bg-white items-center justify-around mx-auto p-4">
        <h1 className="text-white bg-blue-800 w-40 focus:ring-4 hidden sm:block  font-medium rounded-lg text-xl px-4 py-2 text-center ">
        {location.pathname === "/" ? "Home"  :
            location.pathname === "/ContactPage" ? "Contacts": "Charts And Maps"}
        </h1>
        <div className="block sm:hidden">
          <button onClick={toggleDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            {location.pathname === "/" ? "Home"  : 
             location.pathname === "/ContactPage" ?
                     "Contacts": 
                     "Charts And Maps"}
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          {/*Dropdown shows when screen size is xs*/}
          <div id="dropdown" className={`z-10 ${isDropdownOpen ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow px-5 py-2.5 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link to="/ContactPage" className="flex items-center gap-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="flex-shrink-0 w-5 h-5 text-block-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                    </svg>
                    Contacts</Link>
                </li>
                <li>
                  <Link to="/ChartsPage" className="flex items-center gap-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="flex-shrink-0 w-5 h-5 text-block-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"/>
                    </svg>
                    Charts</Link>
                </li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar;