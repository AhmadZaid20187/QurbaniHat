"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Card, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProfileUpdate = () => {
    const router = useRouter()

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
        <div className='m-auto'>
            <h2 className='text-4xl font-bold'>Change your Name and Image</h2>
            <Card className='border mt-8 flex flex-col items-center p-8'>
                <form onSubmit={onSubmit} className='flex flex-col items-center gap-4'>
                    <TextField className="w-full max-w-64" name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your Name" />
                    </TextField>
                    <TextField className="w-full max-w-64" name="url" type="url">
                        <Label>Image URL</Label>
                        <Input placeholder="Enter your URL" />
                    </TextField>

                    <Button type='submit' variant='primary'>Update Info</Button>
                </form>

                <p>Or</p>

                <Link href={"/profile"}>
                    <Button variant='secondary'>
                        Back to Profile
                    </Button>
                </Link>
            </Card>
        </div>
    );
};

export default ProfileUpdate;