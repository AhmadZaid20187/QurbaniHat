import React from 'react';
import CardInfo from './CardInfo';

const TopLivestock = async () => {
    const res = await fetch("http://localhost:3000/animal.json")
    const animal = await res.json()
    const topAnimals = animal.slice(0, 6)
    console.log(topAnimals)


    return (
        <div className='container mx-auto'>
            <h2 className='text-6xl font-bold text-center'>Our Top Livestocks</h2>

            <div className='grid grid-cols-1 min-[500px]:grid-cols-3 py-5 gap-5'>
                {topAnimals.map(animal => <CardInfo key={animal.id} animal={animal} />

                )}
            </div>


        </div>
    );
};

export default TopLivestock;