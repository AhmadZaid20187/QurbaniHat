import { Card } from '@heroui/react';
import Image from 'next/image';

const CardInfo = ({ animal }) => {
    console.log(animal)
    return (
        <Card>
            <div>
                <Image
                    src={animal.image}
                    height={200}
                    width={200}
                    alt={animal.name}
                />
            </div>

            <h2>{animal.name}</h2>

        </Card>
    );
};

export default CardInfo;