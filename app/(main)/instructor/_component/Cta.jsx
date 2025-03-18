import React from 'react';
import CtaSliderCarousel from './CtaSliderCarousel';
import Image from 'next/image';

const Cta = () => {
    return (
        <div className='bg-white py-12'>
            <div className="instructor-container items-center grid grid-cols-2 gap-20">
                <div className="pr-8">
                    <h1 style={{ lineHeight: '55px' }} className="text-4xl font-semibold">
                        20k+ Instructor created their success story with eduguard
                    </h1>
                    <p className="mt-3 text-[1rem] text-gray-600">
                        Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros justo, id commodo ante laoreet nec. Phasellus aliquet, orci id pellentesque mollis.
                    </p>

                    <div className="mt-6  ">
                        <CtaSliderCarousel />
                    </div>
                </div>

                <div className="">
                    <Image src={'/images/cta-img.png'}
                        alt="img"
                        className='w-full h-full'
                        width={800}
                        height={800} />
                </div>
            </div>
        </div>
    );
};

export default Cta;