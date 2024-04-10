import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
<header className="header">
    <NavLink to="/" className="w-40 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">SoundScapes</p>
    </NavLink>
    <nav className='flex text-lg gap-7 font-medium'>
    <NavLink to="/explore" className={({isActive}) => isActive?
    'text-blue-500' : 'text-white'}>
        Explore
    </NavLink>
    </nav>
    <nav className='flex text-lg gap-7 font-medium'>
    <NavLink to="/artists" className={({isActive}) => isActive?
    'text-blue-500' : 'text-white'}>
        Artists
    </NavLink>
    </nav>
</header>
  )
}

export default Navbar
