import React from 'react';
import Logo from '../assets/react-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <div className='bg-custom-blue flex items-center justify-between py-4 px-16 text-white'>
        <Link to="/landpage">
        <div className='flex items-center'>
            <img src={Logo} alt="Logo" className='size-6'/>
            <h3 className='px-2 text-lg font-bold'>React Jobs</h3>
        </div>
        </Link>
        <div>
            <ul className='list-style-none flex items-center text-center p-2'>
                <Link to="/landpage">
                <li className='rounded hover:bg-black px-2 py-1 text-white mx-2'>Home</li>
                </Link>
                <a href="#jobs">

                <li className='rounded hover:bg-black px-2 py-1 text-white mx-2'>Jobs</li>
                </a>
                
                
                <Link to="/addJob">
                
                <li className='rounded hover:bg-black px-2 py-1 text-white mx-2'>Add Job</li>
                </Link>
                
                
                
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar;