import React from 'react';
import Navbar from './Navbar';
import Button from './Button';
import Job from './Job';
import { Link } from 'react-router-dom';

const LandPage = () => {
  return (
    <>
    <Navbar/>
    
        <div className='border-t border-light-blue bg-custom-blue p-16 text-white flex flex-col items-center justify-center'>
            <h1 className='text-5xl mb-4 font-bold'>Become a React Dev</h1>
            <p className='text-base'>Find the React job that fits your skill set</p>
        </div>

        <div className='grid grid-cols-2 gap-4 px-16 py-8 mt-8'>
            <div className='bg-gray-100 p-4 shadow-md'>
                <h3>For Developers</h3>
                <p>Browse our React jobs and start your career today</p>
                <button className='rounded bg-black px-2 py-1 mt-2 text-white'>Browse Jobs</button>
            </div>
            <div className='bg-light-blue rounded p-4 shadow-md'>
                <h3>For Employers</h3>
                <p>List your job to find the perfect developer for the role</p>
                <Link to="/addJob">
                <Button label="Add Job"/>
                </Link>
            </div>
        </div>
    <Job/>
    </>
  )
}

export default LandPage;