'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import frame from '@/app/assets/header/Frame.svg'
import { fruitsAndVegetables } from '@/app/fakeData/Data';
import FruitsList from '@/app/components/Fruits List/FruitsList';

const MainBar = ({setIsMainBarOpen=null,isMainBarOpen=null, active, setActive}) => {
    const [items, setItems] = useState([]);
    
    const [className, setClassName] = useState('');
    const [toggle, setToggle] = useState("Fruits");


    useEffect(()=>{

        if(!isMainBarOpen){
            setTimeout(() => {
                setClassName(" hidden lg:block")
            }, 200);
        }
        else{
                setClassName(" ")
        }

        const filterdData = fruitsAndVegetables.filter(data=> data.category == toggle);

        setItems(filterdData)

    },[isMainBarOpen, toggle])



    return (
        <div onClick={(e)=> e.stopPropagation()} className={`md:sticky min-w-[200px] top-0 bg-white w-4/5 xl:w-[16%] h-screen rounded-2xl 2xl:p-[15px] p-[10px] duration-700` + className}>
            {/* toggle section */}
            <div className="flex border-2 rounded-lg justify-between items-center p-1">
                <div
                    onClick={() => setToggle("Fruits")}
                    className={"h-9 w-full rounded-md flex justify-center items-center p-1 text-sm cursor-pointer" + " " + (toggle == "Fruits" && "bg-[#e655271a]")}>
                    <p>Fruits</p>
                </div>
                <div
                    onClick={() => setToggle("Vegetables")}
                    className={"h-9 w-full rounded-md flex justify-center items-center p-1 text-sm cursor-pointer" + " " + (toggle == "Vegetables" && "bg-[#e655271a]")}>
                    <p>Vegetables</p>
                </div>
            </div>


            {/* search part */}
            <div className='h-10 w-full border-2 border-[#F0F2F4] rounded-lg flex items-center py-1 pr-1 my-3'> {/* TODO- margin increase in large device */}
                <input
                    type="text"
                    name="" id=""
                    className="outline-none h-full w-full pl-2 pr-1 text-sm placeholder:text-gray-700 placeholder:text-xs"
                    placeholder='Search by Fruits Name'
                />

                <button className="bg-[#ffded1] h-full rounded-md w-10">
                    <Image src={frame} alt='icon' className='mx-auto' />
                </button>

            </div>


            {/* Fruits List */}

            <div className="h-[calc(100vh-148px)]">
                <p className="text-xs font-medium text-gray-800">Fruits List</p>

                <div className="h-full overflow-y-scroll no-scrollbar select-none">
                    {
                        items.map(item => <FruitsList
                            setIsMainBarOpen={setIsMainBarOpen}
                            key={item.id}
                            item={item}
                            active={active}
                            setActive={setActive}
                        />
                        )
                    }
                </div>
            </div>


        </div>
    )
};

export default MainBar;