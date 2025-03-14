import React from 'react';
import PurchaseCard from './_components/PurchaseCard';

const purchaseHistory = () => {
    return (
        <div className=' p-5'>
            <div className=" w-[1320px] m-auto">
                <h2 className="text-[24px] font-[600]">Purchase History</h2>

                {new Array(1).fill(0).map((_, index) => <PurchaseCard key={_} />)}
            </div>
        </div>
    );
};

export default purchaseHistory;