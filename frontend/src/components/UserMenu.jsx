// UserMenu.js
import React from 'react';
import { IoIosNotifications } from 'react-icons/io';
import { MdOutlineLogout } from 'react-icons/md';

function UserMenu() {
  return (
    <div className="relative flex items-center">
      <div className="relative" data-te-dropdown-ref data-te-dropdown-alignment="end">
        {/* ... le reste du code ... */}
        <IoIosNotifications className="w-8 h-8 text-black" />
        {/* ... le reste du code ... */}
      </div>

      <div className="relative flex items-center gap-3">
        {/* ... le reste du code ... */}
        <MdOutlineLogout className="w-8 h-8 text-black" />
        {/* ... le reste du code ... */}
      </div>
    </div>
  );
}

export default UserMenu;
