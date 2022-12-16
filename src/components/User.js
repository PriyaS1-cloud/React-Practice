import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./CardComponent";


const User = ()=>{
    
    const {id} = useParams();

    useEffect(()=>{
      fetchUser();
    },[])

    const [userInfo, setUserInfo]= useState();

    async  function fetchUser () {
       const result = await fetch(`https://api.github.com/users/${id}`);
       const json   = await result.json();
       console.log(result,json);
       setUserInfo(json);
       console.log(userInfo);
    }

    return <Card member={userInfo}></Card>;
}
export default User;