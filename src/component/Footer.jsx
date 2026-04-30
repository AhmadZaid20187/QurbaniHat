import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>

            <div className='bg-blue-500 flex flex-col items-center text-white space-y-3'>
                <h2 className='text-6xl font-bold pt-20'>QurbaniHat</h2>
                <p>Pakistan&apos;s trusted platform for booking premium Qurbani
                    livestock. Healthy, certified animals delivered to your doorstep
                    for Eid ul Adha.</p>
                <p>Social Links</p>
                <div className='text-black flex gap-4 pb-10'>
                    <a className='bg-white rounded-full p-2'>
                        <FaInstagram />
                    </a>
                    <a className='bg-white rounded-full p-2'>
                        <FaFacebook />
                    </a>
                    <a className='bg-white rounded-full p-2'>
                        <RiTwitterXFill />
                    </a>
                </div>

                {/* Full-width divider */}
                <hr className='min-[400px]:w-[70%] w-full border-white/20' />

                {/* Bottom bar: left copyright, right links */}
                <footer className='w-full min-[400px]:w-[70%] flex justify-between items-center px-8 py-4 text-sm text-white/80'>
                    <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-4'>
                        <a href="#" className='hover:text-white'>Privacy Policy</a>
                        <a href="#" className='hover:text-white'>Terms of Service</a>
                        <a href="#" className='hover:text-white'>Cookies</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;