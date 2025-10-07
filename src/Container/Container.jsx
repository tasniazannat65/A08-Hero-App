import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 mx-auto px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12'>
            {children}
            
        </div>
    );
};

export default Container;