import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const CardInfo = ({ animal }) => {
    console.log(animal)
    return (

        <Card className='overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border'>


            <div className='relative w-full h-48 aspect-square'>
                <Image
                    src={animal.image}
                    fill
                    alt={animal.name}
                    className='object-cover rounded-2xl'
                />

                <span className='absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                    {animal.category}
                </span>
            </div>


            <div className='p-4 flex flex-col gap-3 space-y-4'>


                <h2 className='text-lg font-bold text-gray-800'>{animal.name}</h2>


                <div className='grid grid-cols-2 gap-2 text-sm text-gray-600'>
                    <div className='bg-gray-100 rounded-lg p-2 text-center'>
                        <p className='text-xs text-gray-400'>Age</p>
                        <p className='font-semibold'>{animal.age} yrs</p>
                    </div>
                    <div className='bg-gray-100 rounded-lg p-2 text-center'>
                        <p className='text-xs text-gray-400'>Weight</p>
                        <p className='font-semibold'>{animal.weight} kg</p>
                    </div>
                    <div className='bg-gray-100 rounded-lg p-2 text-center'>
                        <p className='text-xs text-gray-400'>Price</p>
                        <p className='font-semibold text-green-600'>৳{animal.price}</p>
                    </div>
                    <div className='bg-gray-100 rounded-lg p-2 text-center'>
                        <p className='text-xs text-gray-400'>Location</p>
                        <p className='font-semibold'>{animal.location}</p>
                    </div>
                </div>


                <Link href={`/all-animals/${animal.id}`}>
                    <Button className='w-full bg-blue-500 hover:bg-blue-800 text-white rounded-xl'>
                        See Full Details
                    </Button>
                </Link>

            </div>
        </Card>


    );
};

export default CardInfo;