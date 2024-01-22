import React from 'react';
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar ()  {
  const location = useLocation()
  const path = location.pathname;
  // eslint-disable-next-line
  const navigate = useNavigate()

  const getTitle = () =>{
    // eslint-disable-next-line
    switch(path) {
      case'/template' :
      return 'Dashboard';
      case '/template/hotel':
        return 'Listes des Hotels'
    }
  }

  const getinfo = () =>{
    // eslint-disable-next-line
    switch(path) {
      case'/template' :
      return 'Bienvenue Sur RED Product';
      case '/template/hotel':
        return 'Hôtels'
    }
  }

  

    return (  
      <div className='w-full py-4 bg-white h-44'> 
<nav
  className="flex items-center justify-between w-full lg:w-full shadow-black/10 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
  <div className="fixed flex flex-wrap items-center justify-between w-full px-10 py-4 bg-white shadow-md opacity-100 lg:flex lg:w-4/5 lg:px-12">
    <div className=" flex hidden  flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-te-collapse-item>
      <ul
        className="flex flex-col mr-auto list-style-none lg:flex-row"
        data-te-navbar-nav-ref>
        <li className=" lg:mb-0 lg:pr-2" data-te-nav-item-ref>
        
          <h2
            className="text-black relative text-2xl transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 lg:ml-10"
            data-te-nav-link-ref
            >{getTitle()}</h2>
        </li>
      </ul>
    </div>

  
    <div className="relative flex items-center mr-8 x-auto lg:ml-80">
  <input
    className="w-full px-3 py-2 leading-tight text-center transition-colors border-2 border-black rounded-full appearance-none text-black-800 hover:border-gray-400 focus:outline-none focus:ring-black focus:border-black focus:shadow-outline"
    id="search"
    type="text"
    placeholder="Recherche"
  />
  <div className="absolute inset-y-0 right-0 flex items-center m-2 mr-24">
   
   <CiSearch className="w-8 h-8 mr-16 -ml-1 text-black hover:text-black-500" />
     
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
      <>
      
      </>
      </div>
    </div>
  </div>
  
</nav>
<div className="mt-1 mt-20 ms-8 lg:h-20cd">
            <h2 className="mt-4 text-xl text-black lg:text-4xl ">{getinfo()}</h2>
                <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur</p>
               </div>
</div>
    );
}

export default Navbar;