import { useState } from "react";
import UserInfo from "./UserInfo";
import stateCityObj from "../utils/statecity.json"
import UseCities from "./UseCities";

const SearchBar = ({ listofMembers, setFilteredListofMembers }) => {

    const searchMembers = (text) => {
        if(text.length==0){
            return listofMembers;
        }
        return p = listofMembers.filter((data) => {
            console.log(typeof text, text)
            return data?.name.toLowerCase().includes(text.toLowerCase());
        })


    }

    const [text, setText] = useState("");
    const [stateName, setStateName] = useState("Madhya Pradesh");
    const [cityName, setCityName] = useState("");
    const cityList= UseCities(stateName);
    return (
   
    <div className="m-5 p-4 bg-yellow-100 flex justify-evenly">
       
        <input className="rounded-lg bg-white w-7/12" value={text} onChange={
            (e) => setText(e.target.value)
        }
        />
        <button className="p-1 rounded-lg bg-lime-900" onClick={() => {
            filteredMember = searchMembers(text);
            setFilteredListofMembers(filteredMember)
        }}>Search</button>
      
        

  
       <select className="rounded-lg mx-1" value={stateName} onChange={(e)=>
        setStateName(e.target.value)
       }>
        {
            Object.keys(stateCityObj).map((state)=>
            <option key={state} value={state}>{state}</option>)
        }
       </select>
       <select className="rounded-lg" value={cityName} onChange={(e)=>
        setCityName(e.target.value)
       }>
        {
            cityList.map((city)=>
            <option key={city} value={city}>{city}</option>)
        }
       </select>
     
       </div>
    
  )

}
export default SearchBar;