// SearchBar.js
import React from 'react';
import { CiSearch } from 'react-icons/ci';

function SearchBar() {
  return (
    <div className="relative flex items-center mr-8 x-auto lg:ml-80">
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
  );
}

export default SearchBar;
