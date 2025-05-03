'use client';
import { PurchesAccordion } from '@/components/ui/purchesAccordion';
import { useGetPurchesHistoryQuery } from '@/store/api/purchesHistory';
import { useState } from 'react';
import PurchaseCard from './_components/PurchaseCard';


const PurchaseHistory = () => {
    const [viewAll, setViewAll] = useState(false)
    // const publishedData = viewAll ? purchaseData : purchaseData.slice(0, 4);
    const {data = [], isLoading,isError} = useGetPurchesHistoryQuery("67e3de89529e63530afa1c88")
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong!</p>;
    const publishedData = viewAll ? data : data.slice(0, 4);
    console.log(data);
    return (
        <div className=''>
          <div>
                <h2 className="basic-title">Purchase History</h2>
                <PurchesAccordion defaultValue={`course-${publishedData[0]?.id}`} className='space-y-4 mt-4' type="single" collapsible>
                   
                    {publishedData.map((purchase) => (
                        <PurchaseCard purchase={purchase} key={purchase.id} />
                    ))}
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