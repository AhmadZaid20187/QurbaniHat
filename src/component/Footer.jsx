
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-blue-500 text-white'>
            <div className='container mx-auto px-6 py-12 md:py-20'>
                {/* Main Content Grid */}
                <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-16'>

                    {/* Brand Section */}
                    <div className='flex-1 max-w-xl'>
                        <h2 className='text-4xl md:text-6xl font-bold pb-4 text-red-400'>
                            QurbaniHat
                        </h2>
                        <p className='text-sm md:text-base leading-relaxed'>
                            Pakistan&apos;s trusted platform for booking premium Qurbani
                            livestock. Healthy, certified animals delivered to your doorstep
                            for Eid ul Adha.
                        </p>
                    </div>

                    {/* Contact Info Section */}
                    <div className='flex-1'>
                        <h2 className='text-2xl md:text-3xl font-bold pb-4'>Contact Info:</h2>
                        <p className='text-sm md:text-base space-y-1 opacity-90'>
                            Level-4, 34, Awal Centre, Banani, Dhaka<br />
                            <span className="font-semibold">Support:</span> cow@qurbanihat.com<br />
                            <span className="font-semibold">Helpline:</span> 01000000000, 0178787878<br />
                            <span className='text-xs md:text-sm mt-2 block opacity-75'>
                                (Available: Sat - Thu, 10:00 AM to 7:00 PM)
                            </span>
                        </p>
                    </div>

                    {/* Social Links Section */}
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold text-xl'>Social Links</p>
                        <div className='text-black flex gap-4'>
                            <a href="#" className='bg-white hover:bg-red-400 hover:text-white transition-colors rounded-full p-2.5 shadow-md'>
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className='bg-white hover:bg-blue-700 hover:text-white transition-colors rounded-full p-2.5 shadow-md'>
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className='bg-white hover:bg-black hover:text-white transition-colors rounded-full p-2.5 shadow-md'>
                                <RiTwitterXFill size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <hr className='my-10 border-white/20' />

                {/* Bottom Bar */}
                <footer className='flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-white/80'>
                    <p className='text-center md:text-left'>
                        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
                    </p>
                    <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
                        <a href="#" className='hover:text-white transition-colors'>Privacy Policy</a>
                        <a href="#" className='hover:text-white transition-colors'>Terms of Service</a>
                        <a href="#" className='hover:text-white transition-colors'>Cookies</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;