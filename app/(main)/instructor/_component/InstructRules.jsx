import React from 'react';
import GridSeparator from './GridSeparator';


const InstructRules = () => {
    return (
        <div className='py-16'>
            <div className="instructor-container  text-center lg:text-start mx-auto">
                <GridSeparator
                    isRight={false}
                    maskColor='bg-white'
                    title="Instructor rules & regulations"
                    description="   Sed auctor, nisl non elementum ornare, turpis orci consequat arcu, at iaculis quam leo nec libero. Aenean mollis turpis velit, id laoreet sem luctus in. Etiam et egestas lorem."
                    bgImg={`bg-[url('/images/Union(1).png')] bg-cover`}
                >
                    
                    <ul className='mt-6 space-y-4 list-disc list-inside'>
                        <li>
                            Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel.
                        </li>
                        <li >
                            Those who are looking to reboot their work life and try a new profession that.
                        </li>
                        <li>
                            Nunc auctor consequat lorem, in posuere enim hendrerit sed.
                        </li>
                        <li>
                            Duis ornare enim ullamcorper congue.
                        </li>

                    </ul>
                    </GridSeparator>
            </div>
        </div >
    );
};

export default InstructRules;