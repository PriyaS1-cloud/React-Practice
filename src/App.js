// write hello-react by importing  React

import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Link, Outlet, Router, RouterProvider} from "react-router-dom";
// import AboutUs from "./components/Aboutus";
import ErrorComponent from "./components/ErrorComp";
import User from "./components/User";
import HeaderComponent from "./components/HeaderComponent";
// import SearchComponent from "./components/SearchComponent";
import themeContext from "./components/ThemeContext";
import LoginPage from "./components/Login";
import { Provider } from "react-redux";
import store from "./components/Store";
import { lazy } from "react";


const AboutUs = lazy(() => import("./components/Aboutus"));
const SearchComponent= lazy(() =>
  import("./components/SearchComponent"));

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

 const AppLayoutComponent = () => {

 const [appTheme,setAppTheme]=React.useState("black");
 const [isLogin,setLogin]=React.useState(false);
  return (
    <Provider store={store}>
    <themeContext.Provider value={
      ({
        theme: appTheme,
        setTheme: setAppTheme
      })
    }>
    <>
      {!isLogin && <LoginPage setLogin={setLogin}/>}
     {
      isLogin && (
            <>
              <HeaderComponent />
              <Outlet></Outlet>
            </>
      )
     } 
      
    
    </>
   </themeContext.Provider>
   </Provider>
  )
}

const routeConfiguration =  [
  {
    path: "/",
    element: <AppLayoutComponent />,
    errorElement:<ErrorComponent/>,
    children:[
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
      path: "/user/:id",
      element: <User/>,
    },
    {
      
      path: "/search",
      element: 
      <Suspense fallback="loading">
      <SearchComponent/>
      </Suspense>
    }
      
   
    ]
  },
  {
    path: "/about-us",
    element: 
    <Suspense fallback="loading"><AboutUs /></Suspense>
    
  },
  
]


const appRoutes = createBrowserRouter(routeConfiguration);

root.render(<RouterProvider router ={appRoutes}/>);


