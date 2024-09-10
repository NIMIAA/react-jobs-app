import React from 'react';

const ReadMore = () => {
  return (
    <div className='bg-light-blue p-8 h-screen'>
        <div className='grid grid-cols-3 gap-4'> 

        <div className='col-span-2 flex flex-col gap-4'>
            <div className='bg-white p-4 rounded-md shadow-md'>
            <p className='text-gray-500 mb-2'>Full Time</p>
            <h4 className='mb-4 text-2xl font-bold'>Senior React Developer</h4>
            <a href="" className='text-red-500'>Boston, MA</a>
            </div>
            <div  className='bg-white p-4 rounded-md shadow-md'>
            <p className='text-custom-blue font-semibold mb-2'>Job Description</p>
            <p className='my-4 text-sm'>We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.</p>
            <p className='text-custom-blue font-semibold mb-2'>Salary</p>
            <p className='mt-4'>$70k - $80k/Year</p>
            </div>
        </div>
        <div className='col-span-1 flex flex-col gap-4 mr-8'>
            <div className='bg-white p-4 rounded-md shadow-md'>
            <p className='text-black mb-4 font-semibold'>Company Info</p>
            <h4 className='mb-2 font-medium text-lg'>NewTek Solutions</h4>
            <p className='mb-4 text-base'>NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high quality products and services to our clients while fostering a collaborative and innovative work environment.</p>
            <div className='border-t border-gray-100 mt-2'>
            <h4 className='my-2'>Contact Email:</h4>
            <div className='bg-light-blue px-2 py-1'>
                <p className='font-semibold'>contact@teksolutions.com</p>
            </div>
            <h4 className='my-2'>Contact Phone:</h4>
            <div className='bg-light-blue px-2 py-1'>
                <p className='font-semibold '>555-555-5555</p>
            </div>
            </div>
            </div>
            <div className='bg-white p-4 rounded-md shadow-md'>
            <p className='text-black mb-8 font-semibold'>Manage Job</p>
            <div className='bg-custom-blue text-white rounded-full text-center mb-4 py-1 shadow-inner'>Edit Job</div>
            <div className='bg-red-500 text-white rounded-full text-center mb-2 py-1 shadow-inner'>Delete Job</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ReadMore;