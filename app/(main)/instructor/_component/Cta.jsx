import React from 'react';
import CtaSliderCarousel from './CtaSliderCarousel';
import Image from 'next/image';
import ctaImage from '@/public/images/cta-img.png'

const Cta = () => {
    return (
        <div className='bg-white text-center mx-auto lg:py-12'>
            <div className="instructor-container items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                <div className="lg:pr-8">
                    <h1  className=" text-3xl lg:text-4xl font-semibold">
                        20k+ Instructor created their success story with eduguard
                    </h1>
                    <p className="mt-3 text-[1rem] text-gray-600">
                        Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros justo, id commodo ante laoreet nec. Phasellus aliquet, orci id pellentesque mollis.
                    </p>

                    <div className="mt-6  ">
                        <CtaSliderCarousel />
                    </div>
                </div>

                <div className="ml-10 sm:ml-20 md:ml-24 w-full flex items-center justify-center ">
                    <Image 
                    src={ctaImage}
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