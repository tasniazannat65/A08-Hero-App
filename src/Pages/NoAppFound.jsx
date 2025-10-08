import React from 'react';


const NoAppFound = ({setSearch}) => {
    return (
        <div className='flex flex-col justify-center items-center space-y-5'>
            <h3 className='text-5xl font-bold text-gray-500'>No Apps Found</h3>
            <button onClick={()=>setSearch('')}  className='btn font-semibold text-lg text-white p-7 shadow-sm rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Show all Apps</button>

        </div>
    );
};

export default NoAppFound;