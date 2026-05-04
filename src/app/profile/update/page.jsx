
"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Card, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ProfileUpdate = () => {
    const router = useRouter();

    const onSubmit = async (e) => {

        e.preventDefault()

        const name = e.target.name.value

        const image = e.target.url.value



        await authClient.updateUser({

            name,

            image

        })



        router.push("/profile")

    }

    return (
        <div className='min-h-[80vh] flex flex-col items-center justify-center px-4 py-10'>
            <Toaster />

            {/* Responsive Heading */}
            <h2 className='text-2xl md:text-4xl font-bold text-center text-gray-800'>
                Update Profile Info
            </h2>

            {/* Card width adjusts based on screen size */}
            <Card className='border mt-8 w-full max-w-md p-6 md:p-10 shadow-lg bg-white'>
                <form onSubmit={onSubmit} className='flex flex-col w-full gap-6'>

                    <TextField className="w-full" name="name" type="text">
                        <Label className="font-semibold text-gray-700">Display Name</Label>
                        <Input
                            placeholder="Enter your Name"
                            variant="bordered"
                            className="mt-1"
                        />
                    </TextField>

                    <TextField className="w-full" name="url" type="url">
                        <Label className="font-semibold text-gray-700">Profile Image URL</Label>
                        <Input
                            placeholder="https://example.com/photo.jpg"
                            variant="bordered"
                            className="mt-1"
                        />
                    </TextField>

                    <Button
                        type='submit'
                        color='primary'
                        className="w-full font-bold h-12"
                    >
                        Update Info
                    </Button>
                </form>

                <div className="relative my-6 w-full text-center">
                    <hr className="border-gray-100" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-gray-400 uppercase">
                        Or
                    </span>
                </div>

                <Link href={"/profile"} className="w-full">
                    <Button
                        variant='flat'
                        className='w-full'
                    >
                        Back to Profile
                    </Button>
                </Link>
            </Card>
        </div>
    );
};

export default ProfileUpdate;