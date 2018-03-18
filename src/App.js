import React from "react";
import ReactDOM from "react-dom";

import Form from "./Form/Form.js";
import { Search } from "./Search/Search.js";

import style from "./App.css";

const App = () => {
  return (
    <div className={style.wrapper}>
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
