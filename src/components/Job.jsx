import React from 'react';
import JobCards from './JobCards';

const Job = () => {
  return (
    <>
    <div className='bg-light-blue px-16 py-8' id='jobs'>
        <h2 className='mb-4 text-center text-xl text-custom-blue font-bold'>Recent Jobs</h2>
    <div className='grid grid-cols-3 gap-4 mt-2'>
        <JobCards
    title="Senior React Developer"
    description="We are seeking a talented Front-End Developer to join our team in Boston, MA .The ideal candidate should.."
    location="Boston, MA"
    />
    <JobCards
    title="Front-End Engineer (React & Redux)"
    description="Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated.."
    location="Miami, FL"
    />
    <JobCards
    title="React.js Dev"
    description="Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and.."
    location="Brooklyn, NY"
    />
    </div>
    </div>
    
    
    </>
  )
}

export default Job;