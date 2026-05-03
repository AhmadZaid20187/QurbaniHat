"use client";

import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiCow } from 'react-icons/gi';

const Navbar = () => {

    const userData = authClient.useSession()
    const user = userData.data?.user
    const handleSignOut = async () => {
        await authClient.signOut();
    }



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

                {!user && <ul className='flex gap-4 items-center'>
                    <li>
                        <Link href="/signup">
                            <Button variant='primary'>
                                Sign Up
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/signin" className='font-medium'>
                            <Button variant='solid'>
                                Sign In
                            </Button>
                        </Link>
                    </li>
                </ul>}

                {
                    user && <div className='flex gap-3'>
                        <Avatar>
                            <Avatar.Image
                                alt="John Doe"
                                src={user?.image}
                                referrerPolicy='no-referrer'
                            />
                            <Avatar.Fallback className='bg-blue-400 text-white'>{user?.name.charAt(0).toUpperCase()}</Avatar.Fallback>
                        </Avatar>

                        <Button onClick={handleSignOut} size='sm' variant='solid'>Sign Out</Button>
                    </div>

                }

            </nav>
        </div>
    );
};

export default Navbar;