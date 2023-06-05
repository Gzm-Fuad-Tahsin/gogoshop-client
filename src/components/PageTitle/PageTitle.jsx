import React from 'react';

const PageTitle = ({text}) => {
    return (
        <>
        <div className='w-full p-3 lg:pl-24 mb-4 bg-gray-200'>
            <h2>{text}</h2>
        </div>
        </>
    );
};

export default PageTitle;