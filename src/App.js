// write hello-react by importing  React

import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../public/assets/logo.svg";
import user from "../public/assets/user.svg";

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
  return <h1>Title Component</h1>;
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

// Header Comonent from Scratch

const HeaderComponent = () => {
  return (
    <div className="title">
      <img width="100px" height="50px" src={logo} />
      <input
        style={{
          width: "-webkit-fill-available",
          color: "black",
          padding: "10px",
        }}
        type="text"
        placeholder="Search"
      />
      <img width="100px" height="50px" src={user} />
    </div>
  );
};
root.render(<HeaderComponent />);
