import React from "react";
import logo from "./logo.png";

function NavBar(){
    return (
        
      
            
<nav className="flex flex-col lg:flex-row items-center lg:items-start justify-between bg-slate-950 p-6">

  <div className="flex items-center flex-shrink-0 text-white ">
    
    <img src={logo} alt ="logo" className="w-1/4 sm:h-1/2 sm:w-40 "></img>
  </div>
  
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0">
    <div className="text-sm lg:flex-grow">
      <a href="#responsive-header" className="block lg:inline-block font-medium md:text-7xl sm:text-lg lg:mt-0 sm:mb-5 sm:text-center text-teal-200 hover:text-white md:mr-4">
       Online Shopping Store
      </a>
      
    </div>
    <div className="search-bar">
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here" required></input>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
  </div>
  </div>
</nav>
   
    )
}

export default NavBar;