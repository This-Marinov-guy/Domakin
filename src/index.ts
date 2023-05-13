import React from "react";
import ReactDOM from "react-dom/client";

//css
import '../public/assets/css/responsive.css'
import '../public/assets/css/style.css'
import '../public/assets/css/plugins.css'
import '../public/assets/css/font-icons.css'

const Root = () => {
  return <div>Hello</div>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
