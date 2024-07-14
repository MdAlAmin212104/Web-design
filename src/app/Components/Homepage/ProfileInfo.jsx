import Image from 'next/image';
import React from 'react';

const ProfileInfo = () => {
    return (
        <div className='grid grid-cols-3 gap-4 relative -top-10 lg:-top-24'>
            <div className='ml-6 lg:ml-12'>
                <Image src="/image/profile.png" alt='Profile Image' width={200} height={200}/>
            </div>
            <div className='lg:mt-32 mt-10 relative'>
                <h1 className='text-2xl font-semibold'>John Doe</h1>
                <ul className='absolute left-36 top-[4px]'>
                    <li className='text-[#76A4CE]'>@johndoe</li>
                </ul>
                <p className='font-medium'>Astrophotographer</p>
                <p className='font-medium'>Gamer</p>
            </div>
            <div className='lg:mt-32 mt-24 mr-0'>
                <button className=' w-[80px] h-[30px] rounded-3xl bg-[#196AA0] text-white font-medium'>Follow</button>
            </div>
        </div>
    );
};

export default ProfileInfo;