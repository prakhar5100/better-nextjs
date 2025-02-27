'use client'
import React, { useState } from 'react';
import { customerReviews } from '@/utils';
import Image from 'next/image';

const Swap = () => {
    const [personId, setPersonId] = useState(1);
    const styles = "text-mortageGreen font-semibold border-4 !border-mortageGreen";

    return (
        <div className='text-black lg:col-start-1 lg:col-end-4 grid place-content-center'>
            
            <div className="relative w-[300px] h-[540px] overflow-hidden ">
                {customerReviews.map((customer) => (
                    <Image
                        key={customer.id}  
                        src={customer.image}
                        width={300}
                        height={800}
                        alt={customer.name}
                        className={`rounded-xl absolute top-0 left-0 transition-opacity duration-500 ${
                            customer.id === personId ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>

            <div className='grid grid-flow-col my-6 gap-4'>
                {customerReviews.map((customer) => (
                    <div key={customer.id} onClick={() => setPersonId(customer.id)}
                        className={`cursor-pointer p-3 grid place-content-center border border-slate-500 rounded-full 
                        ${customer.id === personId && styles}`}>
                        {customer.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Swap;
