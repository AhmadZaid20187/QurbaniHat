"use client"

import 'animate.css';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import Link from 'next/link';
import { BiEdit } from 'react-icons/bi';

const ProfilePage = () => {
    const { data, isPending } = authClient.useSession()
    const user = data?.user

    if (isPending) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500' />
            </div>
        )
    }

    return (
        <div className='my-auto'>
            <Card className='max-w-96 mx-auto flex flex-col items-center border'>
                <div className=''>
                    <Avatar className='h-20 w-20'>
                        <Avatar.Image
                            alt="John Doe"
                            src={user?.image}
                            referrerPolicy='no-referrer'
                        />
                        <Avatar.Fallback className='bg-blue-400 text-white'>
                            {user?.name.charAt(0).toUpperCase()}
                        </Avatar.Fallback>
                    </Avatar>
                </div>

                <h2 className='text-xl font-bold'>{user?.name}</h2>
                <h2 className='text-muted'>{user?.email}</h2>

                <Link href={`/profile/update`}>
                    <Button variant='secondary' className="animate__animated animate__bounceIn">
                        <BiEdit /> Update Profile
                    </Button>
                </Link>
            </Card>
        </div>
    )
};

export default ProfilePage;