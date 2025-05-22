import React from 'react';
import AccountSetting from './_components/AccountSetting';
import PasswordSetting from './_components/PasswordSetting';

const SettingPage = () => {
    return (
         <div className="">
                <div className="mb-12">
                <h1 className="basic-title mb-6">Account settings</h1>
                <AccountSetting />
                </div>

                <div className="">
                    <h1 className="basic-title mb-6">Change password</h1>
                    <PasswordSetting />
                    
                </div>
           </div>
    );
};

export default SettingPage;