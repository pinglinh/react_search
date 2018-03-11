import React from "react";
import style from "./Form.css";

const Form = () => {
  return (
    <form>
      I am a Form component!
      <br />
      <button className={style.primaryButton}>Submit</button>
    </form>
  );
};

export default Form;
