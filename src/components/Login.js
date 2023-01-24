import { useState } from "react";
import { addItem } from "./userSlice";
import { useDispatch } from "react-redux";

const LoginPage = ({ setLogin }) => {

  const [user, setUser] = useState({ uname: "", upassword: "" });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
    dispatch(addItem({user}));
    console.log("sumitted", user);

  }
  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)} >
        <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" value={user.uname}
            onChange={(e) => {
              console.log(e.target.value)
              setUser({
                ...user, uname: e.target.value
              })
            }}

            required />

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" value={user.upassword}
            onChange={(e) => setUser({
              ...user, upassword: e.target.value
            }
            )} required />

          <button type="submit">Login</button>

        </div>

        <div className="container" style={{ "backgroundColor": "#f1f1f1" }}>
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </>
  )
}
export default LoginPage;