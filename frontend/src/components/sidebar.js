import React from 'react';
import { MdDashboard } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import '../App.css';
import Logo from "../assets/logo.png"

function Sidebar () {
  return (
    <div className="fixed flex flex-col w-1/5 h-screen text-white bg-gray-900 inscrire">
	<div className="space-y-3">
		<div className="flex items-center gap-2">
			<div className="p-2">
				<img src={Logo} alt="" className='w-8 fill-current dark:text-gray-100"'  />
			</div>
            <h1 className='text-2xl font-bold'>RED PRODUCT</h1>
		</div>
		<div className="flex-1">
			<ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
					<div className="flex items-center p-2 space-x-3 rounded-md">
						<span className="">principal</span>
					</div>
				</li>
				<li className="rounded-sm hover:bg-gray-100 hover:text-gray-700 ">
					<div className="flex items-center p-2 space-x-3 rounded-md">
                        <MdDashboard className="w-5 h-5 fill-current dark:text-grey-400"/>
						<span className="text-xl font-normal hover:text-gray-700">Dashboard</span>
					</div>
				</li>
				
				<li className="mt-8 rounded-sm hover:bg-gray-100 hover:text-gray-700">
					<div className="flex items-center p-2 space-x-3 rounded-md">
                        <RiHotelLine className="w-5 h-5 fill-current dark:text-gray-400"/>
						<span className="text-xl font-normal hover:text-gray-700">Listes des Hotels</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
    <div className="text-gray-100 border-t-2 border-white" id="bord" ></div>
    
	<div className="flex items-center p-2 space-x-4 justify-self-end" >
		<img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
		<div>
			<h2 className="text-lg font-semibold">Anna Faye</h2>
			<span className="flex items-center space-x-1">
				<div><button className="tour">   </button><span className="text-xs hover:underline dark:text-gray-400">en ligne</span></div>
			</span>
		</div>
	</div>
</div>
  );
}

export default Sidebar;