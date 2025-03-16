'use client';
import { Download, FileText } from 'lucide-react';
import React from 'react';

const AttachFiles = ({ data }) => {
    const handleDownload = () => {
        const fileUrl = data?.file || '';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Create account on webflow.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id='attach-files' className='mt-8'>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Attach Files ({data?.length})</h2>

            <div className="space-y-3">
                {
                    data?.map(itm => <div key={itm?.name} className="bg-[#F5F7FA] p-4 ">
                        <div className="flex items-center justify-between">
                            <div className="flex items-start gap-3">
                                <div className="text-orange-500 mt-1">
                                    <FileText
                                        className=" stroke-orange-500 fill-none"
                                        size={47}
                                        strokeWidth={1} />
                                </div>

                                <div>
                                    <p className="font-medium md:text-md text-xs text-gray-800">Create account on webflow.pdf</p>
                                    <p className="text-sm text-gray-500">12.6 MB</p>
                                </div>
                            </div>

                            <button
                                className="md:bg-orange-500 hover:bg-orange-600 md:text-white px-4 py-2 transition-colors"
                                onClick={handleDownload}
                            >
                                <span className="md:block hidden">Download File</span>
                                <span className="md:hidden block"><Download size={26} /></span>
                            </button>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AttachFiles;