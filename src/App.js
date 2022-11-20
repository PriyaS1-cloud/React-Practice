// write hello-react in the div element which is having the id root, using React
const h1 = React.createElement("h1", { id: 'main' }, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);