
function UserInfo(prop) {
    return (<div className="class-userinfo">
        <ul>
            <li>Name : {prop.name}</li>
            <li>Email : {prop.email}</li>
            <li>Age : {prop.age}</li>
        </ul>
    </div>)
}
export default UserInfo;