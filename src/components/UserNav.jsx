import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
    return (
        <div>
             

                        <Link to={'/transfer-money'} class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3V15M12 15L9 12M12 15L15 12M12 15L9 18M12 15L15 18M21 13H3M21 13C22.1046 13 23 13.8954 23 15V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V15C1 13.8954 1.89543 13 3 13M21 13V11C21 9.89543 20.1046 9 19 9H5C3.89543 9 3 9.89543 3 11V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span class="mx-4 font-medium">Sent Money</span>
                        </Link>

                        <Link to={'/cash-out'} class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 6V18M14 6V18M18 10H6M18 14H6M12 19V21M15 19H9M12 3V5M15 3H9M12 5C10.8954 5 10 5.89543 10 7V17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17V7C14 5.89543 13.1046 5 12 5ZM10 7H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span class="mx-4 font-medium">Cash-Out</span>
                        </Link>

                        <Link to={'/cash-in'} class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 6V18M10 6V18M6 10H18M6 14H18M12 19V21M9 19H15M12 3V5M9 3H15M12 5C13.1046 5 14 5.89543 14 7V17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17V7C10 5.89543 10.8954 5 12 5ZM14 7H10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span class="mx-4 font-medium">Cash-In</span>
                        </Link>
        </div>
    );
};

export default UserNav;