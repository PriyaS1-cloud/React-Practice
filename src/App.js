// write hello-react by importing  React

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../public/assets/logo.svg";
import user from "../public/assets/user.svg";
import Card from "./components/CardComponent";
import SearchBar from "./components/SearchBar";
import data from "./utils/data.json";
import NoResult from "./components/NoResult";
import {createBrowserRouter, Link, Outlet, Router, RouterProvider} from "react-router-dom";
import AboutUs from "./components/Aboutus";
import ErrorComponent from "./components/ErrorComp";
import User from "./components/User";


const h1 = React.createElement(
  "h1",
  { class: "react-app" },
  "Hello React using React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

//create nested heading element
const heading = React.createElement("div", { class: "title" }, [
  React.createElement("h1", null, "H1"),
  React.createElement("h2", null, "H2"),
  React.createElement("h3", null, "H3"),
]);

//title component
const TitleComponent = () => {
  return <h1>Hunger Hub</h1>;
};

// functional component Using JSX
const HeadingWithJSX = () => {
  return (
    <div className="title">
      <TitleComponent />
      <h2>H2</h2>
      <h3>H3</h3>
    </div>
  );
};

// Header Component from Scratch

const title = "Strom Troopers"; // we can put this constants in another file

const HeaderComponent = () => {

  return (

    <div className="title">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/5/51/Stormtrooper_%28Star_Wars%29.png" />
      {title}

    </div>
  );
};



const CardContainer = ({ filteredListofMembers }) => {
  console.log(filteredListofMembers);
   if( !filteredListofMembers.length){
    return <NoResult></NoResult>
   }
  return filteredListofMembers.map((member) =>
    <Link to={`/user/${member?.login}`}>
    <Card member={member} key={member.id}></Card>
    </Link>
  )
}



const SearchComponent = () => {
  const [listofMembers, setlistofMembers] = React.useState([]);
  const [filteredListofMembers, setFilteredListofMembers] = React.useState([]);


  useEffect(() => {
   fetchTeamData();
  }, []);

  
  async function fetchTeamData () 
  {
    let teamMebers = ["mharshita", "PriyaS1-cloud", "aman3113","vickydarlinn","ap221882"];
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



const AppLayoutComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet></Outlet>
    </>
  )
}
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    errorElement:<ErrorComponent/>,
    children:[
    {
      path: "/user/:id",
      element: <User/>,
    },
    {
      path: "/search",
      element: <SearchComponent/>
    }
      
   
    ]
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  
]);

root.render(<RouterProvider router ={appRoutes}/>);

// this is for my refrence will delete it later
console.log(HeaderComponent());  //will return an object -which is react element -for dom it is an html
console.log(<HeaderComponent />); //will retun an object
console.log(HeaderComponent); // it is a normal constant will return the skeleton of the function

