import { useState } from "react";

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
    return (<><div className="search">
        <input className="search-input" value={text} onChange={
            (e) => setText(e.target.value)
        }
        />
        <button className="btn-search" onClick={() => {
            filteredMember = searchMembers(text);
            console.log(filteredMember);
            setFilteredListofMembers(filteredMember)
        }}>Search</button>

    </div>
        <div className="searchText">Searching For  {text} </div>
    </>)

}
export default SearchBar;