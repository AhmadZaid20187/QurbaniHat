import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const CardInfo = ({ animal }) => {
    console.log(animal)
    return (
        // <Card className='items-center'>
        //     <div>
        //         <Image
        //             src={animal.image}
        //             height={200}
        //             width={200}
        //             alt={animal.name}
        //             className='rounded-2xl object-cover'
        //         />
        //     </div>

        //     <div>
        //         <h2>{animal.name}</h2>
        //     </div>

        //     <div>
        //         <p>Age: {animal.age}</p>
        //         <p>Weight: {animal.weight}</p>
        //     </div>

        //     <Button variant='primary'>
        //         <Link href={"/all-animals"}>See Full Deails</Link>
        //     </Button>


        // </Card>

        <Card className='overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300'>

            {/* Image - full width, fixed height */}
            <div className='relative w-full h-48 aspect-square'>
                <Image
                    src={animal.image}
                    fill
                    alt={animal.name}
                    className='object-cover rounded-2xl'
                />
                {/* Badge - category or type */}
                <span className='absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                    {animal.category}
                </span>
            </div>

            {/* Content */}
            <div className='p-4 flex flex-col gap-3 space-y-4'>

                {/* Name */}
                <h2 className='text-lg font-bold text-gray-800'>{animal.name}</h2>

                {/* Info Grid */}
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

                {/* Button */}
                <Link href={`/all-animals/${animal.id}`}>
                    <Button className='w-full bg-blue-500 hover:bg-blue-800 text-white rounded-xl'>
                        See Full Details
                    </Button>
                </Link>

            </div>
        </Card>

        // <Card className='overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-0 border border-gray-100'>

        //     {/* Image with badge */}
        //     <div className='relative w-full h-52'>
        //         <Image
        //             src={animal.image}
        //             fill
        //             alt={animal.name}
        //             className='object-cover'
        //         />
        //         {/* Category badge - top right */}
        //         <span className='absolute top-3 right-3 bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm'>
        //             {animal.category}
        //         </span>
        //     </div>

        //     {/* Content below image */}
        //     <div className='p-4'>

        //         {/* Name */}
        //         <h2 className='text-base font-semibold text-gray-800 mb-3'>{animal.name}</h2>

        //         {/* Likes & Downloads row */}
        //         <div className='flex items-center gap-5 mb-4 text-sm text-gray-500'>
        //             <span className='flex items-center gap-1'>
        //                 ❤️ {animal.likes ?? 0}
        //             </span>
        //             <span className='flex items-center gap-1'>
        //                 ⬇️ {animal.weight} kg
        //             </span>
        //         </div>

        //         {/* View Button */}
        //         <Link href={`/all-animals/${animal._id}`}>
        //             <Button className='w-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded-lg text-sm'>
        //                 See Full Details
        //             </Button>
        //         </Link>

        //     </div>
        // </Card>
    );
};

export default CardInfo;