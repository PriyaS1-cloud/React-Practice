// write hello-react by importing  React

import React from "react";
import  ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", { class: 'react-app' }, "Hello React using React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);