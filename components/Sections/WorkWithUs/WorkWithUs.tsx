import React from 'react';
import Image from "next/image";
import {TextCard} from "../../Common/TextCard/TextCard";
import {bennefitsData} from "./data";
import CurveLine from "../../../public/elements/curveLine.svg"

export const WorkWithUs = () => {
    return (
        <div className='my-16'>
            <div className='bg-blue-600 rounded-2xl flex justify-between items-center h-[150px] md:h-full text-center mb-4 md:mb-8'>
                <h2 className='text-white text-5xl md:text-6xl tracking-wide ml-10'><span
                    className='font-pacifico'>Easy</span> to Work</h2>
                <Image src={CurveLine} alt='curve line' width={662} height={210} className="hidden md:block"/>
            </div>
            <div>
                <div className="flex gap-[16px] md:flex-row flex-col justify-between mb-4">
                    {bennefitsData.map(item => <TextCard service={item} isHighlighted={item.id === 2} key={item.id}/>)}
                </div>
            </div>
        </div>
    );
};

