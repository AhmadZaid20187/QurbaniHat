import React from 'react';
import CardInfo from './CardInfo';

const FeaturedAnimals = async () => {
    const res = await fetch("https://qurbani-hat-flax.vercel.app/animal.json",
        {
            cache: 'no-store'
        }
    )
    const animal = await res.json()
    const topAnimals = animal.slice(0, 4)
    return (
        <div className='container mx-auto pb-8'>
            <h2 className='text-6xl font-bold text-center pb-8'>Featured animals</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto px-4'>
                {topAnimals.map(animal => <CardInfo key={animal.id} animal={animal} />

                )}
            </div>
        </div>
    );
};

export default FeaturedAnimals;