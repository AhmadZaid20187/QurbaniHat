"use client";

import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiCow } from 'react-icons/gi';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='shadow'>
            <nav className='container mx-auto flex justify-between items-center py-4 '>


                <div className='flex flex-row items-center'>
                    <GiCow className='size-10' />
                    <h2 className='text-4xl font-bold'><span className='text-red-400'>Qurbani</span><span className='text-blue-500'>Hat</span></h2>
                </div>

                <ul className='flex gap-5 items-center'>
                    <li>
                        <Link
                            href="/"
                            className={`px-4 py-2 rounded ${pathname === "/"
                                ? "bg-blue-500 text-white"
                                : "bg-transparent"
                                }`}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/all-animals"
                            className={`px-4 py-2 rounded ${pathname === "/all-animals"
                                ? "bg-blue-500 text-white"
                                : ""
                                }`}
                        >
                            All Animals
                        </Link>
                    </li>
                </ul>

                {/* Auth Buttons */}
                <ul className='flex gap-4 items-center'>
                    <li>
                        <Link href="/signup">
                            <Button variant='primary'>
                                Sign Up
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/signin" className='font-medium'>
                            <Button variant='primary'>
                                Sign In
                            </Button>
                        </Link>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;