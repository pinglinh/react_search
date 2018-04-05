import React from "react";
import ReactDOM from "react-dom";

import SearchContainer from "./containers/Search";

import style from "./App.css";

const App = () => {
  return (
    <div className={style.wrapper}>
      <SearchContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
