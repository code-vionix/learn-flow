import { Mail } from "lucide-react";
import GridSeparator from "./GridSeparator";
import { ArrowRight } from "lucide-react";

const HelpCenter = () => {
    return (
        <div className='py-16 bg-primary-100'>
            <div className="instructor-container m-auto flex gap-5">
                <GridSeparator
                    isRight={true}
                    title="Don’t worry we’re always here to help you"
                    description="Mauris aliquet ornare tortor, ut mollis arcu luctus quis. Phasellus nec augue malesuada, sagittis ligula vel, faucibus metus. Nam viverra metus eget nunc dignissim."
                    bgImg="bg-[url('/images/Union(2).png')] bg-cover"
                >
                    <ul className='mt-6 space-y-4  list-inside'>
                        <li className="flex gap-2 items-center">
                            <ArrowRight size={20} strokeWidth={1.8} className="text-primary-500" />
                            Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel.
                        </li>
                        <li className="flex gap-2 items-center">
                            <ArrowRight size={20} strokeWidth={1.8} className="text-primary-500" />
                            Those who are looking to reboot their work life and try a new profession that.
                        </li>
                        <li className="flex gap-2 items-center">
                            <ArrowRight size={20} strokeWidth={1.8} className="text-primary-500" />
                            Nunc auctor consequat lorem, in posuere enim hendrerit sed.
                        </li>
                        <li className="flex gap-2 items-center">
                            <ArrowRight size={20} strokeWidth={1.8} className="text-primary-500" />
                            Duis ornare enim ullamcorper congue.
                        </li>
                        <li className='mt-6 flex items-center gap-4'>
                            <div className="size-14 bg-white rounded-full flex items-center justify-center">
                                <Mail className='text-primary-500' />
                            </div>
                            <div className="">
                                <p className="text-sm text-gray-500">EMAIL US ANYTIME ANYWHERE</p>
                                <h2 className="text-gray-900 font-semibold">help.nahid@gmail.com</h2>
                            </div>
                        </li>
                    </ul>
                </GridSeparator>
            </div>
        </div>
    );
};

export default HelpCenter;