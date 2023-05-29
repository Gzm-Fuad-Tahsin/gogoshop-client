import React from 'react';

const AboutUs = ({ companyInfo }) => {
    return (
        <div className='text-[#666666] ml-8'>
            <h3>{companyInfo.title}</h3>
            <p className=''><small>{companyInfo.info}</small></p>
        </div>
    );
};

export default AboutUs;