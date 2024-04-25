import React from "react";
import style from "../ThirdSection/ThirdSection.module.css";

const ThirdSection = () => {
  return (
    <div>
      <section className={style.three}>
        <div className={style.sec}>
          <div className={style.years}>
            <h3 className={style.fiffty}>50 Years <span >of Experience in Various Cases</span></h3>
           
          </div>
          <div className={style.number}>
            <div className={style.ninth}>
              <h2 className={style.num}>
                90<h2 className={style.plus}>+</h2>
              </h2>
              <span className={style.awards}>Awards</span>
              <span className={style.key}>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </span>
            </div>
            <div>
              <h2 className={style.num}>
                3K<h2 className={style.plus}>+</h2>
              </h2>
              <span className={style.awards}>Cases Wins</span>
              <span className={style.key}>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </span>
            </div>
            <div>
              <h2 className={style.num}>
                2K<h2 className={style.plus}>+</h2>
              </h2>
              <span className={style.awards}>Clients</span>
              <span className={style.key}>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </span>
            </div>
            <div>
              <h2 className={style.num}>
                200<h2 className={style.plus}>+</h2>
              </h2>
              <span className={style.awards}>Attorneys</span>
              <span className={style.key}>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThirdSection;
