import Image from "./Image/image"
import UserInfo from "./UserInfo/userinfo"


function Profile() {
    return (<div className="profile">
        <Image image="https://i.pinimg.com/736x/96/cd/80/96cd80c89933980ed2d10b89c533b145.jpg"/>
        <UserInfo name="Vlad" email="vladdjuga@example.com" age="16"/>
    </div>)
    }
    export default Profile;
    