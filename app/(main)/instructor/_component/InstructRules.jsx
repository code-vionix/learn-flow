import React from 'react';
import GridSeparator from './GridSeparator';

const InstructRules = () => {
    return (
        <div className='py-16'>
            <div className="instructor-container m-auto">
                <GridSeparator
                    isRight={false}
                    maskColor='bg-white'
                    title="Instructor rules & regulations"
                    description="   Sed auctor, nisl non elementum ornare, turpis orci consequat arcu, at iaculis quam leo nec libero. Aenean mollis turpis velit, id laoreet sem luctus in. Etiam et egestas lorem."
                    bgImg="bg-[url('https://s3-alpha-sig.figma.com/img/a6d0/b752/3995ee8bda333ff925e69d9447385d46?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qjt-wotLgL2pWCA9x13L4NLM0IHhw50mCVjXJSi5Y088CF1IDyTxJthBrPWvRXrF8HVmeHfWxsRngpXxwB2XE4juoiP1l0ayssEfDwVGdLdOe8p1X0~0kshLtfG4wfeN0oc8n~~mK3v9P8bBl4r2M7md2qQJOQQda5zb~uo-gP51tAPfkv79QNifI~KNoK0Qto7ZkiOV34OpZm0bTRPmUiYlxmHhYMg0JYQcfKp6uMRvthJB1gKZQpw2xzkhdTSYTro06rF5QEvQXx5-gW2bpcOXQFRTJgdywT0yrIUAApMfmloSZn9x0Wdc8P6goyaFjItjXlbwMI-fZmYHd5TJeg__')] bg-cover"
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