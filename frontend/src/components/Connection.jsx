import React from 'react';
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"



function Connection() {
return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-3 mx-auto inscrire bg-connect"  style={{backgroundColor :' #494C4F'}}>
    <div className='flex gap-4'>
       <div className=''>
       <img src={Logo} alt="" className='w-8'  />
       </div>
    <h2 className='text-2xl font-bold text-white whitespace-nowrap text-opacity-3'>RED PRODUCT</h2>
    </div>
<section className="flex w-[25rem] shadow rounded p-8 flex-col gap-14 border bg-white">
   <div className="text-2xl text-center text-black font">Connectez-vous en tant que Admin</div>
   <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 focus-within:border-gray-500">
       <input type="text" placeholder="E-mail" className="w-full bg-transparent border-none outline-none focus:outline-none"/>
   </div>
   <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 focus-within:border-gray-500">
       <input type="password" placeholder="Mot de passe" className="w-full bg-transparent border-none outline-none focus:outline-none"/>
   </div>
       <div className='text-xl text-black'> 
       <div className="flex items-center h-5 gap-2 ">
   <input id="hs-list-group-item-checkbox-2" name="hs-list-group-item-checkbox-2" type="checkbox" className="w-6 h-6 border-gray-200 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
   Gardez-moi Connecter
 </div>
   </div>
   <Link className="py-3 text-xl font-bold text-center text-white duration-300 transform bg-gray-700 rounded hover:bg-gray-500" to="/template">
   Se Connecter
   </Link>

</section>
<div className='mt-6 space-y-4'> 
<Link to="/reconnexion" className="font-bold text-center text-yellow-500 duration-300 transform hover:underline">Mot de passe oublié?</Link>

<p className="text-lg text-center text-white">
Vous n'avez pas de compte?
<Link to="/inscription" className="font-medium text-yellow-500 underline-offset-4 hover:underline">Incrivez-vous</Link>
</p>
</div>
</main>
   

 )
};
export default Connection;