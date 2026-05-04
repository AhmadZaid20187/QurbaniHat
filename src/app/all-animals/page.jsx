import React from 'react';
import CardInfo from '../Component/CardInfo';

const AllAnimals = async () => {

    const res = await fetch("http://localhost:3000/animal.json",
        {
            cache: 'no-store'
        }
    )
    const animal = await res.json()

    console.log(animal)


    return (
        <div className='container mx-auto space-y-6 pb-6 '>
            <h2 className='text-6xl font-bold text-center pt-6'>Find Your Best Livestock</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto px-4'>
                {animal.map(animal => <CardInfo key={animal.id} animal={animal} />

                )}
            </div>

        </div>
    );
};

export default AllAnimals;