import React from 'react';

const AddJob = () => {
  return (
    <div className='flex items-center justify-center bg-light-blue'>
        <div className='py-8 px-4 border w-2/5 bg-white'>
            <h2 className='font-bold text-2xl text-center'>Add Job</h2>
            <div className='mb-2'>
                <label for="jobtype" className='text-sm font-medium text-gray-900'>Job Type</label>
                <div class="mt-2 w-full border">
                <select id="jobtype" name="jobtype" autocomplete="job-type" className='w-full p-2'>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Remote</option>
                </select>
                </div>
            </div>
            <div className='mb-2'>
            <label for="jobname" className='text-sm font-medium text-gray-900'>Job Listing Name</label>
                <input type='text' id='jobname' name='jobname' placeholder='e.g.. Beautiful Apartment in Miami' className='mt-2 w-full p-2 border'/>
            </div>
            <div className='mb-2'>
            <label for="jobDescription" className='text-sm font-medium text-gray-900'>Description</label>
            <textarea className='mt-2 w-full p-2 border' id='jobDescription' name='jobDescription'placeholder='Add any job duties, expectations, requirements, e.t.c.'>
            </textarea>
            </div>
            <div className='mb-2'>
            <label for="salary" className='text-sm font-medium text-gray-900'>Salary</label>
            <div class="mt-2 w-full border">
                <select id="salary" name="salary" autocomplete="salary" className='w-full p-2'>
                <option>Under $50K</option>
                <option>Under $200K</option>
                <option>Under $500K</option>
                </select>
                </div>
            </div>
            <div className='mb-2'>
            <label for="location" className='text-sm font-medium text-gray-900'>Location</label>
            <input type='text' id="location" name="location" placeholder='Company Location' className='mt-2 w-full p-2 border'/>
            </div>

            <h2 className='my-4 text-lg'>Company Info</h2>

            <div className='mb-2'>
            <label for="name" className='text-sm font-medium text-gray-900'>Company Name</label>
            <input type='text' id="name" name="name" placeholder='Company Name' className='mt-2 w-full p-2 border'/>
            </div>
            <div className='mb-2'>
            <label for="description" className='text-sm font-medium text-gray-900'>Company Description</label>
            <textarea className='mt-2 w-full p-2 border' id="description" name="description" placeholder='What does your company do?'>
            </textarea>
            </div>
            <div className='mb-2'>
            <label for="email" className='text-sm font-medium text-gray-900'>Contact Email</label>
            <input type='email' id="email" name="email" placeholder='Email Address for applicants' className='mt-2 w-full p-2 border'/>
            </div>
            <div className='mb-2'>
            <label for="phone" className='text-sm font-medium text-gray-900'>Contact Phone</label>
            <input type='number' id="phone" name="phone" placeholder='Optional phone for applicants' className='mt-2 w-full p-2 border'/>
            </div>
            <div className='bg-custom-blue text-white rounded-full text-center my-4 py-1 shadow-inner cursor-pointer'>Add Job</div>
        </div>


    </div>
  )
}

export default AddJob;