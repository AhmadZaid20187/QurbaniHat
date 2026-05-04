import { Button, Card, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const ProfileUpdate = () => {

    const onSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value

        console.log(name, image)
    }

    return (
        <div className='m-auto'>

            <h2 className='text-4xl font-bold'>Change your Name and Image</h2>
            <Card className='border mt-8 flex flex-col items-center p-8'>
                <TextField className="w-full max-w-64" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your Name" />
                </TextField>
                <TextField className="w-full max-w-64" name="url" type="url">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your URL" />
                </TextField>

                <div>
                    <Button type='submit' variant='primary'>Update Info</Button>
                </div>



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