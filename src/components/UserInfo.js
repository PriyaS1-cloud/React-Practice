import { useSelector } from "react-redux";

const UserInfo=()=>{

const User= useSelector((store)=>store.user.value);
return <span className="text-white">User: {User.user.uname}</span>
}
export default UserInfo;