import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const FruitsList = ({ item, active, setActive, setIsMainBarOpen }) => {



    return (
        <div
            onClick={() => {
                setActive(item.id); 
                if(setIsMainBarOpen){
                    setIsMainBarOpen(false)
                }
            }}
            className={`${active == item.id ? "border-opacity-100" : "border-opacity-0"} border-[1.5px] flex gap-3 mt-1 items-center py-2 px-[10px] border-[#E55527]  rounded-lg cursor-pointer`}>

                {/* image background  */}
            <div className="bg-[#dd4c4126] rounded-[10px] h-[40px] w-[40px] rotate-45 flex justify-center items-center">
                <Image
                    src={item.image}
                    alt='img'
                    height={42}
                    width={42}
                    className="-rotate-45"
                />
            </div>

            <div>
                <p className="text-sm font-medium text-gray-800">{item.name}</p>
                <p className="text-xs font-normal text-[#101010b3]">Vitamin {item.vitamin}</p>
            </div>
        </div>
    );
};

export default FruitsList;