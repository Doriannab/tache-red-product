import React from 'react';
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";

function Navbar ()  {
    return (  
      
<nav
  className="fixed relative flex flex-no-wrap items-center justify-between py-2 shadow-md opacity-100 bg-white-700 shadow-black/10 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
  <div className="flex flex-wrap items-center justify-between w-full h-2 px-3 mb-12">
    <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-te-collapse-item>
      <ul
        className="flex flex-col pl-0 mr-auto list-style-none lg:flex-row"
        data-te-navbar-nav-ref>
        <li className=" lg:mb-0 lg:pr-2" data-te-nav-item-ref>
        
          <h2
            className="text-black relative text-2xl transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 lg:ml-12"
            data-te-nav-link-ref
            >Dashboard</h2>
        </li>
      </ul>
    </div>

  
    <div class="relative mr-8 flex items-center x-auto lg:ml-80">
  <input
    className="w-full px-3 py-2 pl-10 leading-tight transition-colors border-2 border-black rounded-full appearance-none text-black-800 hover:border-gray-400 focus:outline-none focus:ring-black focus:border-black focus:shadow-outline"
    id="search"
    type="text"
    placeholder="Recherche"
  />
  <div className="absolute inset-y-0 right-0 flex items-center mr-24">
   
   <CiSearch className="w-8 h-8 mr-20 -ml-1 text-black hover:text-black-500" />
     
  </div>
  </div>
  
    <div className="relative flex items-center">
      <div
        className="relative"
        data-te-dropdown-ref
        data-te-dropdown-alignment="end">


        
       
        <div
          className="hidden-arrow mr-4 flex gap-2 items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"

          id="dropdownMenuButton1"
          role="button"
          data-te-dropdown-toggle-ref
          aria-expanded="false">
          <span className="[&>svg]:w-8">
            <IoIosNotifications className="w-8 h-8 text-black" />
          </span>
        </div>
      </div>

      <div
        className="relative flex items-center gap-3"
        data-te-dropdown-ref
        data-te-dropdown-alignment="end">
        <div
          className="flex items-center transition duration-150 ease-in-out hidden-arrow whitespace-nowrap motion-reduce:transition-none"
          id="dropdownMenuButton2"
          role="button"
          data-te-dropdown-toggle-ref
          aria-expanded="false">
         
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
            className="w-10 h-10 rounded-full"
            alt=""
            loading="lazy" />
        </div>

        <div
        className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        >
        <span className="[&>svg]:w-8">
         
          <MdOutlineLogout className="w-8 h-8 text-black" />
        </span>
      </div>
      </div>
    </div>
  </div>
</nav>
    );
}

export default Navbar;


