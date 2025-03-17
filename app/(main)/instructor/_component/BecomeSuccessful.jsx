import Image from 'next/image';
import React from 'react';
import SuccessfullCard from './SuccessfullCard';

const BecomeSuccessful = () => {
    const cardIfo = [
        {
            id: 1,
            icon: '/icons/NewspaperClipping.svg',
            color: 'bg-secondary-100',
            title: 'Apply to become instructor.',
            subtitle: 'Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.'
        },
        {
            id: 2,
            icon: '/icons/IdentificationCard.svg',
            color: 'bg-danger-100',
            title: 'Setup & edit your profile.',
            subtitle: 'Duis non ipsum at leo efficitur pulvinar. Morbi semper nisi eget accumsan ullamcorper.'
        }, {
            id: 4,
            icon: '/icons/PlayCircle.svg',
            color: 'bg-warning-100',
            title: 'Create your new course',
            subtitle: 'Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque. '
        }, {
            id: 1,
            icon: '/icons/Handshake.svg',
            color: 'bg-success-100',
            title: 'Start teaching & earning',
            subtitle: 'Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque. '
        }
    ]
    return (
        <div className='bg-gray-50 py-14'>
            <div className="instructor-container">
                <h1 style={{ lineHeight: "48px" }} className="m-auto md:text-4xl md:w-[400px] font-semibold">How you&apos;ll become successful instructor</h1>
                <br />
                <div className="grid grid-cols-4 gap-3">
                    {
                        cardIfo?.map((itm, index) => <SuccessfullCard key={itm?.id} data={itm} index={index + 1} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default BecomeSuccessful;