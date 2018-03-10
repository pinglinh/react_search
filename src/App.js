import React from "react";
import ReactDOM from "react-dom";
import style from "./App.css";
const App = () => {
  console.log(style);
  return (
    <div className={style.hello}>
      <p>React here!</p>
      <h1>How you doing?</h1>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
