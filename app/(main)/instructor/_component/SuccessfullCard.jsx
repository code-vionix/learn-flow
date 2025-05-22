import Image from 'next/image';
import React from 'react';

const SuccessfullCard = ({ data, index }) => {
    return (
        <div className="p-6 flex flex-col gap-4 items-center bg-white">
            <div className={` ${data?.color} w-20 h-20 flex items-center justify-center`}>
                <Image
                    src={data?.icon || '/icons/stackicon.svg'}
                    alt='item'
                    width={500}
                    height={500}
                    className='w-10'
                />
            </div>

            <h1 className="text-lg font-semibold text-center">{index}. {data?.title}</h1>
            <p className="mt- text-gray-600 text-center">
                {data?.subtitle}
            </p>
        </div>

    );
};

export default SuccessfullCard;