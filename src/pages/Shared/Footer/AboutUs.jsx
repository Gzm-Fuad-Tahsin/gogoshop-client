import React from 'react';

const AboutUs = ({ companyInfo }) => {
    return (
        <div className='text-[#666666] mt-4  text-center md:text-left'>
            <h3 className='font-medium text-xl'>{companyInfo.title}</h3>
            <p className='font-normal'><small>{companyInfo.info}</small></p>
        </div>
    );
};

export default AboutUs;