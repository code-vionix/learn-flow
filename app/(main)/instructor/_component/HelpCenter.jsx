import { Mail } from "lucide-react";
import GridSeparator from "./GridSeparator";
import { ArrowRight } from "lucide-react";

const HelpCenter = () => {
    return (
        <div className='py-16 bg-primary-100'>
            <div className="instructor-container m-auto">
                <GridSeparator
                    isRight={true}
                    title="Don’t worry we’re always here to help you"
                    description="Mauris aliquet ornare tortor, ut mollis arcu luctus quis. Phasellus nec augue malesuada, sagittis ligula vel, faucibus metus. Nam viverra metus eget nunc dignissim."
                    bgImg="bg-[url('https://s3-alpha-sig.figma.com/img/2d13/ba74/8567a39421c04e8b08ca0db517f30900?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h-POXkODoH9cvl~ol0BZbbtsSS3O~dYtdHfr0dYlaPGw2B8NkyodNes7EL-HEt-y2Nm-03qnvHrqTb11VlayaRxVYN9AWQXhwiVdodjW-WaHAUzsreLkKJEChyu2SGdGTZ7zR7GRllOiCtPLI7Qvks7tFz8ThYEpuOC9r4fPjGgOp6hwQi9czZ7dVSmtCkv5GwwGAtwYxsEamrAqA0f7YfOWWssognRu6Gge4BoyTeL5YtJF5cSszGKbHtCdgq1QrglBe1s3q~Hs5gatzwXGI8PG2qma6BiKwAgNXhP1D5~0EaCGJmYp4GbCUVRlhEgBaczwzVuWtrbnk1wqMwyuHQ__')] bg-cover"
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