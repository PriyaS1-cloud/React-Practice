import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import  CardContainer  from "./CardContainer";


const SearchComponent = () => {
    const [listofMembers, setlistofMembers] = useState([]);
    const [filteredListofMembers, setFilteredListofMembers] = useState([]);
  
  
    useEffect(() => {
     fetchTeamData();
    }, []);
  
    
    async function fetchTeamData () 
    {
      let teamMebers = ["mharshita", "aman3113", "vickydarlinn", "ap221882", "prateek27", "aditifarkya", "Ayushsaxen",
        "ShivamPandey001", "rasika260896", "anujjainbatu", "SharmilaNarendra", "soumyagangamwar", "jayedrashid", "nikitaj-57", "gavandivya"];
      let tempArray=[];
      teamMebers.forEach( async (teamMemberId) =>{
      teamData = await fetch(`https://api.github.com/users/${teamMemberId}`)
      teamDataList = await teamData.json() 
      tempArray.push(teamDataList);
      setTimeout(()=>{
        setlistofMembers(tempArray);
      },1000)
      
      })
     
  
    }
  
    return (
      <>
        <SearchBar listofMembers={listofMembers} setFilteredListofMembers={setFilteredListofMembers} />
        <div className="card-container">
          <CardContainer filteredListofMembers={filteredListofMembers.length ? filteredListofMembers : listofMembers} />
        </div>
      </>
    )
  }
  export default SearchComponent;