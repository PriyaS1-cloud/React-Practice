
import { title } from "../utils/constant"
import { Link } from "react-router-dom";
import { useContext} from "react";
import themeContext from "./ThemeContext";
import UserInfo from "../components/UserInfo";

const HeaderComponent = () => {
  const theme = useContext(themeContext);
    return (
     
      <div className="flex justify-evenly h-8" style = {
      { backgroundColor : theme.theme}
        }>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/5/51/Stormtrooper_%28Star_Wars%29.png"/>
        
        <h2 className="font-bold text-lg  text-yellow-500">{title}</h2> 
        
       <Link to = {"/search"} >
        <span className="text-white cursor-pointer">Search</span>
       </Link>
       <Link to = {"/about-us"} >
       <span className="text-white cursor-pointer">About-Us</span>
       </Link>
       <button className="border-current text-white bg-black cursor-pointer" onClick={()=>{theme.setTheme("beige")}}>Toggle Theme</button>
       <UserInfo></UserInfo>
      </div>
    );
  };

  export default HeaderComponent;