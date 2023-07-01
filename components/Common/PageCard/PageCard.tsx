import React from 'react';
import Image from "next/image";
import Banner from "../../../public/pages/case1.png"
import {PageCases} from "./data";

interface PageCardProps {
    item: PageCases
}

export const PageCard: React.FC<PageCardProps> = ({item}) => {
    return (
        <div>
            <Image src={item.image} alt="Page image" width={600} height={500} className='rounded-2xl border border-gray-300'/>
        </div>
    );
};

