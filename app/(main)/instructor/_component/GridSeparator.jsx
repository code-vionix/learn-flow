import { Mail } from 'lucide-react';
import React from 'react';

const GridSeparator = ({
    isRight = true,
    title,
    maskColor = 'bg-primary-100',
    maskHeight = 'h-[160px]',
    bgImg = "bg-[url('https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
    description,
    children,
    leftColStyle,
    rightColStyle,
    imgHeight = 'h-[470px]'
}) => {
    return (
        <div className="grid items-center grid-cols-2 gap-12">
            <div className={`${leftColStyle} ${isRight ? 'order-2' : 'order-1'}`}>
                <h1 style={{ lineHeight: '55px' }} className="text-5xl font-semibold">{title}</h1>

                <p className="p text-gray-500 mt-6">
                    {description}
                </p>
                {children}
            </div>
            <div className={`${isRight ? 'order-1' : 'order-2'} ${rightColStyle}`}>
                <div className={`w-[550px] relative ml-auto ${imgHeight} ${bgImg} bg-cover`}>
                    <div className={`span w-[180px] ${maskHeight} absolute top-0 ${isRight ? 'right-0' : 'left-0'} ${maskColor}`}></div>
                    <div className={`span w-[14px] h-full absolute top-0 ${!isRight ? 'right-0 mr-[360px]' : 'right-0 mr-[170px]'} ${maskColor}`}></div>
                </div>
            </div>
        </div>
    );
};

export default GridSeparator;