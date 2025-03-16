'use client';
import React, { useState } from 'react';
import PurchaseCard from './_components/PurchaseCard';
import { PurchesAccordion } from '@/components/ui/purchesAccordion';
import { purchaseData } from './data';

const PurchaseHistory = () => {
    const [viewAll, setViewAll] = useState(false)
    const publishedData = viewAll ? purchaseData : purchaseData.slice(0, 4);
    return (
        <div className=''>
          <div>
                <h2 className="basic-title">Purchase History</h2>
                <PurchesAccordion defaultValue={`course-${publishedData[0]?.id}`} className='space-y-4 mt-4' type="single" collapsible>
                    {publishedData?.map((data, index) => <PurchaseCard purchase={data} key={data?.id} />)}
                </PurchesAccordion>
            </div>
            <div className="flex justify-center">
                <button onClick={() => setViewAll(!viewAll)} className='mt-12 duration-300 hover:bg-primary-100 px-4 m-auto py-2 mb-6 text-center'>
                    {viewAll ? 'Show Less' : 'Yay! You have seen all your purchase history.😎'}
                </button>
        </div>
        </div>
    );
};

export default PurchaseHistory;