import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 mx-auto px-4 md:px-6 lg:px-10'>
            {children}
            
        </div>
    );
};

export default Container;