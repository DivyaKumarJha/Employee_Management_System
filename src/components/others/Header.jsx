import React from 'react'

const Header = ({ data, handleLogout }) => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data?.firstName || 'Admin'} 👋</span></h1>
      <button
        onClick={handleLogout}
        className="px-5 py-2 text-sm bg-red-600 text-lg font-medium text-white rounded-full hover:bg-red-700 transition"
      >
        Log out
      </button>
    </div>
  );
};


export default Header