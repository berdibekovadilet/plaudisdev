import React from 'react';
import Image from "next/image";
import {ComponentsData} from "./data";

interface ComponetsProps {
    item: ComponentsData;
}

export const ComponentsCard: React.FC<ComponetsProps> = ({item}) => {
    return (
        <div className="flex flex-col gap-[8px] mb-4">
            <Image src={item.image} alt="Card Image" width={282} height={170}
                   className='rounded-xl border border-gray-300'/>
            <p className='text-gray-500'>{item.title}</p>
        </div>
    );
};

