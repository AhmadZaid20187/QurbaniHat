import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center my-auto space-y-4'>
            <h2 className='text-6xl font-bold'>404 | This Page Cannot be Found</h2>
            <Link href={"/"}>
                <Button variant='primary'>
                    Back to Home Page
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;