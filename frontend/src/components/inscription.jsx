import React from 'react';
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'


function Inscription() {
return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-3 mx-auto inscrire" style={{backgroundColor :' #494C4F'}}>
         <div className='flex gap-4'>
            <div className=''>
            <img src={Logo} alt="" className='w-8'  />
            </div>
         <h2 className='text-2xl font-bold text-white whitespace-nowrap'>RED PRODUCT</h2>
         </div> 
    <section className="flex w-[24rem] shadow rounded p-4 flex-col gap-10 border bg-white">
        <div className="text-xl text-center text-black ">Inscrivez-vous en tant que Admin</div>
        <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 focus-within:border-gray-500">
            <input type="text" placeholder="Nom" className="w-full bg-transparent border-none outline-none focus:outline-none"/>
        </div>
        <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 focus-within:border-gray-500">
            <input type="text" placeholder="E-mail" className="w-full bg-transparent border-none outline-none focus:outline-none"/>
        </div>
        <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 focus-within:border-gray-500">
            <input type="password" placeholder="Mot de passe" className="w-full bg-transparent border-none outline-none focus:outline-none"/>
        </div>
            <div className='text-xl text-black'> 
            <div className="flex items-center h-5 gap-2 ">
        <input id="hs-list-group-item-checkbox-2" name="hs-list-group-item-checkbox-2" type="checkbox" className="w-6 h-6 border-gray-200 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
        Accepter les termes et la politique
      </div>
        </div>
        <button className="py-3 text-xl font-bold text-white duration-300 transform bg-gray-700 rounded hover:bg-gray-500">S'inscrire</button>

    </section>
    <div className='mt-6 space-y-4'> 
    <p class="text-center text-lg text-white">
    Vous avez deja un compte?
    <Link to="/" className="font-medium text-yellow-500 underline-offset-4 hover:underline">Se connecter</Link>
    </p>
    </div>
    </main>
)
}
export default Inscription;






