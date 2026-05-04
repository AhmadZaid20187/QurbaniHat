import React from 'react';
import CardInfo from './CardInfo';
import Link from 'next/link';
import { Button } from '@heroui/react';

const TopLivestock = async () => {
    const res = await fetch(`${process.env.BETTER_AUTH_URL}/animal.json`,
        {
            cache: 'no-store'
        }
    )
    const animal = await res.json()
    const topAnimals = animal.slice(0, 8)
    console.log(topAnimals)


    return (
        <div className='container mx-auto space-y-6 pb-6 '>
            <h2 className='text-6xl font-bold text-center'>Our Top Livestocks</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto px-4'>
                {topAnimals.map(animal => <CardInfo key={animal.id} animal={animal} />

                )}
            </div>

            <div className='flex justify-center pt-4'>
                <Link href={"/all-animals"}>
                    <Button className='bg-blue-500 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300'>
                        See All Animals →
                    </Button>
                </Link>
            </div>

        </div>
    );
};

export default TopLivestock;