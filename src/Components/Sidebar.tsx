import { Link } from "react-router-dom";
import img from "../../public/vite.svg"
function Sidebar() {
  return (
    <div>
        <aside id="default-sidebar" className="flex-none md:w-34 sm:w-64 bg-blue-300 fixed h-screen rounded-xl transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-300 dark:bg-gray-800">
            <Link to={"/"}  className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={img} className="h-8" alt="Flowbite Logo"/>
                <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Taiyo</span>
            </Link>
            <ul className="space-y-2 font-medium mt-10">
                <li>
                    <Link to="/ContactPage" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg className="flex-shrink-0 w-5 h-5 text-block-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                    </svg>

                    <span className="hidden sm:block text-xl ms-3">Contacts</span>
                    </Link>
                </li>
                <li>
                    <Link to="/ChartsPage" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="flex-shrink-0 w-5 h-5 text-block-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"/>
                        </svg>
                        <span className="hidden sm:block text-xl ms-3 whitespace-nowrap">Charts And Maps</span>
                    </Link>
                </li>
            </ul>
        </div>
        </aside>
    </div>
  )
}

export default Sidebar;