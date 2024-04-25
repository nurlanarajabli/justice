import React from "react";
import  style  from '../FirstSecond/FirstSecond.module.css';

const FirstSecond = () => {
  return (
    <div>
      <section className={style.one}>
        <div className={style.containerSection}>
          <div className={style.write}>
            <h1 className={style.colorfull}>We Fight</h1>
            <h1>For Your Right</h1>
            <p>Another cool free template by the fine folks at </p>
            <p className={style.colorP}>Colorlib.</p>
            <button className={style.btn}>FREE CONSULTATION</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstSecond;
