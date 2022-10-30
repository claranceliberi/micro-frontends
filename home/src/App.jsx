import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header app={{name:'home'}}/>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Footer />
    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
