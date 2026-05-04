
import BookingForm from '@/app/Component/BookingForm';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const AnimalDetails = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://qurbani-hat-flax.vercel.app/animal.json", {
        cache: 'no-store'
    });
    const animals = await res.json();
    const animal = animals.find(a => a.id == id);

    if (!animal) return <div className="text-center py-20">Animal not found</div>;

    return (
        <div className='container mx-auto px-4 py-10 md:py-20'>
            {/* Back Button - Responsive margin */}
            <div className='mb-6'>
                <Link href={"/"}>
                    <Button variant='flat' color="primary" size="sm" className="md:size-md">
                        <FaArrowLeft /> Back to Home
                    </Button>
                </Link>
            </div>

            {/* Main Content: Column on mobile, Row on desktop */}
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-start'>

                {/* Left Side: Image & Description */}
                <div className='w-full lg:w-1/2 space-y-6'>
                    <div className='relative w-full aspect-square md:aspect-video lg:aspect-square'>
                        <Image
                            src={animal.image}
                            fill // Uses fill for responsive container sizing
                            alt={animal.name}
                            className='rounded-2xl object-cover shadow-lg'
                        />
                        <span className='absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md'>
                            {animal.category}
                        </span>
                    </div>

                    <div className='bg-gray-50 rounded-2xl p-6 border border-gray-100'>
                        <p className='text-xl font-bold mb-2 text-gray-800'>Description</p>
                        <p className='text-gray-600 leading-relaxed'>{animal.description}</p>
                    </div>
                </div>

                {/* Right Side: Details & Booking */}
                <div className='w-full lg:w-1/2 space-y-8'>
                    <div>
                        <h2 className='text-4xl md:text-6xl font-extrabold text-gray-900 mb-4'>
                            {animal.name}
                        </h2>
                        <p className='text-3xl font-bold text-green-600'>৳{animal.price}</p>
                    </div>

                    {/* Stats Grid: 2 columns on tiny phones, 3 on tablets/small laptops */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4'>
                        <div className='bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm'>
                            <p className='text-xs uppercase tracking-wider text-gray-400 mb-1'>Age</p>
                            <p className='font-bold text-lg md:text-xl text-gray-800'>{animal.age} yrs</p>
                        </div>
                        <div className='bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm'>
                            <p className='text-xs uppercase tracking-wider text-gray-400 mb-1'>Weight</p>
                            <p className='font-bold text-lg md:text-xl text-gray-800'>{animal.weight} kg</p>
                        </div>
                        <div className='bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm'>
                            <p className='text-xs uppercase tracking-wider text-gray-400 mb-1'>Type</p>
                            <p className='font-bold text-lg md:text-xl text-gray-800'>{animal.type}</p>
                        </div>
                        <div className='bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm'>
                            <p className='text-xs uppercase tracking-wider text-gray-400 mb-1'>Location</p>
                            <p className='font-bold text-lg md:text-xl text-gray-800'>{animal.location}</p>
                        </div>
                        <div className='bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm'>
                            <p className='text-xs uppercase tracking-wider text-gray-400 mb-1'>Breed</p>
                            <p className='font-bold text-lg md:text-xl text-gray-800'>{animal.breed}</p>
                        </div>
                        <div className='bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm'>
                            <p className='text-xs uppercase tracking-wider text-gray-400 mb-1'>Status</p>
                            <p className='font-bold text-lg md:text-xl text-blue-600'>Available</p>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <BookingForm />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AnimalDetails;