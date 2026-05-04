
"use client";

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiCow } from 'react-icons/gi';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const pathname = usePathname();

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    // Helper to handle active link styling
    const getLinkClass = (path) => {
        const base = "px-4 py-2 rounded transition-all duration-200";
        const active = "bg-blue-500 text-white";
        const inactive = "hover:bg-gray-100 text-gray-700";
        return `${base} ${pathname === path ? active : inactive}`;
    };

    return (
        <div className='shadow-sm bg-white sticky top-0 z-50'>
            <nav className='container mx-auto px-4 py-4'>
                <div className='flex justify-between items-center'>

                    {/* --- Logo Section --- */}
                    <Link href="/" className='flex flex-row items-center gap-2'>
                        <GiCow className='size-8 md:size-10 text-blue-600' />
                        <h2 className='text-2xl md:text-3xl font-bold'>
                            <span className='text-red-400'>Qurbani</span>
                            <span className='text-blue-500'>Hat</span>
                        </h2>
                    </Link>

                    {/* --- Desktop Links (Hidden on Mobile) --- */}
                    <ul className='hidden md:flex gap-4 items-center'>
                        <li><Link href="/" className={getLinkClass("/")}>Home</Link></li>
                        <li><Link href="/all-animals" className={getLinkClass("/all-animals")}>All Animals</Link></li>
                        <li><Link href="/profile" className={getLinkClass("/profile")}>Profile</Link></li>
                    </ul>

                    {/* --- Desktop Auth (Hidden on Mobile) --- */}
                    <div className='hidden md:flex items-center gap-3'>
                        {!user ? (
                            <>
                                <Link href="/signin"><Button variant='light' size="sm">Sign In</Button></Link>
                                <Link href="/signup"><Button color="primary" size="sm">Sign Up</Button></Link>
                            </>
                        ) : (
                            <div className='flex items-center gap-3'>
                                <Avatar
                                    src={user?.image}
                                    name={user?.name?.charAt(0).toUpperCase()}
                                    size="sm"
                                    isBordered
                                    color="primary"
                                />
                                <Button onClick={handleSignOut} size='sm' variant='flat' color="danger">Sign Out</Button>
                            </div>
                        )}
                    </div>

                    {/* --- Mobile Menu Toggle Button --- */}
                    <button
                        className='md:hidden p-2 text-2xl focus:outline-none'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* --- Mobile Dropdown Menu --- */}
                {isOpen && (
                    <div className='md:hidden mt-4 pb-4 space-y-4 border-t pt-4 animate-in fade-in slide-in-from-top-2'>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <Link href="/" onClick={() => setIsOpen(false)} className={`block ${getLinkClass("/")}`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/all-animals" onClick={() => setIsOpen(false)} className={`block ${getLinkClass("/all-animals")}`}>
                                    All Animals
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile" onClick={() => setIsOpen(false)} className={`block ${getLinkClass("/profile")}`}>
                                    Profile
                                </Link>
                            </li>
                        </ul>

                        <div className='pt-4 border-t flex flex-col gap-3'>
                            {!user ? (
                                <>
                                    <Link href="/signin" onClick={() => setIsOpen(false)}><Button variant='flat' className="w-full">Sign In</Button></Link>
                                    <Link href="/signup" onClick={() => setIsOpen(false)}><Button color="primary" className="w-full">Sign Up</Button></Link>
                                </>
                            ) : (
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-3 px-2'>
                                        <Avatar src={user?.image} name={user?.name?.charAt(0).toUpperCase()} />
                                        <div className="flex flex-col">
                                            <p className='text-sm font-bold'>{user?.name}</p>
                                            <p className='text-xs text-gray-500'>{user?.email}</p>
                                        </div>
                                    </div>
                                    <Button onClick={handleSignOut} color="danger" variant='flat' className="w-full">Sign Out</Button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;