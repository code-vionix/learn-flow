'use client';
import { Download } from "lucide-react";

const LecturesInfo = ({ id, title, description, isDownloadable, downloadUrl }) => {
    const handleDownload = () => {
        const fileUrl = downloadUrl;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Create account on webflow.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div id={id} className="mt-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                {isDownloadable &&
                    <button onClick={handleDownload} className="flex items-center gap-2 bg-orange-100 hover:bg-orange-200 text-orange-500 px-4 py-2 rounded-md transition-colors">
                        <Download className="h-5 w-5" />
                        <span className="md:block hidden">Download Notes</span>
                    </button>}
            </div>

            <div className="text-gray-700">
                <p className="leading-relaxed">
                    {description}
                </p>
            </div>
        </div >
    );
};

export default LecturesInfo;