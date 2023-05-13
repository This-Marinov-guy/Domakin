import React from "react";
import ReactDOM from "react-dom/client";

// Create Import File
import "./index.scss";


const Root = () => {
  return <div>Hello</div>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
