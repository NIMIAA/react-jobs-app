import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function JobCards({ title, description, location }) {
    return (
        <>
            <div className='bg-white p-4 rounded-md shadow-md'>
                <p className='text-gray-500 mb-2'>Full Time</p>
                <h4 className='mb-4 text-lg font-bold'>{title}</h4>
                <p className='mb-4'>{description}</p>
                <a href="" className='text-blue-500'>More</a>
                <p className='text-blue-500 mt-4'>$70k - $80k/Year</p>
                <div className='border-t border-gray-100 mt-4 px-2 pt-2 flex justify-between items-center'>
                    <a href="" className='text-red-500'>{location}</a>
                    <Link to='/readMore'>
                        <Button label="Read More"></Button>
                    </Link>
                    
                </div>
            </div>

        </>




    );
}

export default JobCards;