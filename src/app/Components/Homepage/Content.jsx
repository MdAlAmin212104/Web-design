import React from 'react';
import ProfileInfo from './profileInfo';

const Content = () => {
    return (
        <div className='flex container mx-auto'>
            <div className='lg:w-2/3'>
                <ProfileInfo/>
            </div>
            <div className='lg:w-1/3'>
                image
            </div>
        </div>
    );
};

export default Content;