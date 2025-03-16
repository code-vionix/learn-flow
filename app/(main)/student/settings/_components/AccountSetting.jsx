import ProfileForm from "./ProfileForm";
import ProfilePictureCard from "./ProfilePictuerCard";

const AccountSetting = () => {
    return (
        <div className=" grid md:grid-cols-3 gap-6">
            <ProfilePictureCard />
            <ProfileForm />
        </div>
    );
};

export default AccountSetting;