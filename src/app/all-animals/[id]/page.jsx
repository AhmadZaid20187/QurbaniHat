
import BookingForm from '@/app/Component/BookingForm';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const AnimalDetails = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("http://localhost:3000/animal.json",
        {
            cache: 'no-store'
        }
    )
    const animals = await res.json()

    const animal = animals.find(a => a.id == id)
    console.log(animal)
    return (
        <div className='container mx-auto py-20 flex flex-col justify-center'>
            <Link href={"/"}>
                <Button variant='primary'><FaArrowLeft />Back to Home Page</Button>
            </Link>
            <div className=' flex py-8 gap-8 justify-center'>
                <div className='relative space-y-6'>
                    <Image
                        src={animal.image}
                        height={600}
                        width={600}
                        alt={animal.name}
                        className='rounded-2xl'

                    />

                    <span className='absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                        {animal.category}
                    </span>

                    <div className=' rounded-lg p-2 space-y-4'>
                        <p className='text-xl font-bold'>Description:</p>
                        <p className='font-semibold'>{animal.description}</p>
                    </div>
                </div>
                <div className='space-y-5'>
                    <h2 className='text-6xl font-bold'>{animal.name}</h2>

                    <div className='grid grid-cols-2 gap-2 text-sm text-gray-600'>
                        <div className='bg-gray-100 rounded-lg p-2 text-center'>
                            <p className='text-xl text-gray-400'>Age</p>
                            <p className='font-semibold text-xl'>{animal.age} yrs</p>
                        </div>
                        <div className='bg-gray-100 rounded-lg p-2 text-center'>
                            <p className='text-xl text-gray-400 '>Weight</p>
                            <p className='font-semibold text-xl'>{animal.weight} kg</p>
                        </div>
                        <div className='bg-gray-100 rounded-lg p-2 text-center'>
                            <p className='text-xl text-gray-400'>Price</p>
                            <p className='text-xl font-semibold text-green-600'>৳{animal.price}</p>
                        </div>
                        <div className='bg-gray-100 rounded-lg p-2 text-center'>
                            <p className='text-xl text-gray-400'>Location</p>
                            <p className='text-xl font-semibold'>{animal.location}</p>
                        </div>
                        <div className='bg-gray-100 rounded-lg p-2 text-center'>
                            <p className='text-xl text-gray-400'>Type</p>
                            <p className='text-xl font-semibold'>{animal.type}</p>
                        </div>
                        <div className='bg-gray-100 rounded-lg p-2 text-center'>
                            <p className='text-xl text-gray-400'>Breed</p>
                            <p className='text-xl font-semibold'>{animal.breed}</p>
                        </div>
                    </div>

                    <BookingForm />
                </div>

            </div>

        </div>
    );
};

export default AnimalDetails;