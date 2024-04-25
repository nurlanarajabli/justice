import React from "react";
import style from "../SecondSection/SecondSection.module.css";

const SecondSection = () => {
  return (
    <div>
      <section className={style.two}>
        <div className={style.containerTwo}>
          <div className={style.left}>
            <h3 className={style.our}>Our</h3>
            <h3>Practice Areas</h3>
            <p className={style.p}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in. Separated they live in Bookmarksgrove right at the
              coast of the Semantics, a large language ocean.
            </p>
            <button className={style.secBtn}>LEARN MORE</button>
          </div>

          <div className={style.right}>
            <div className={style.div}>
              <div className={style.icon}>
                <i class="fa-solid fa-bag-shopping"></i>
              </div>
              <div className={style.text}>
                <span className={style.span}> Banking and Finance Law</span>
                <p className={style.pTeqi}>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </div>
            </div>
            <div className={style.div}>
              <div className={style.icon}>
                <div className={style.div}>
                  <i class="fa-solid fa-users"></i>
                </div>
                <div className={style.text}>
                  <span className={style.span}> Commercial Law</span>
                  <p className={style.pTeqi}>
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
            </div>

            <div className={style.div}>
              <div className={style.icon}>
                <i class="fa-solid fa-bag-shopping"></i>
              </div>
              <div className={style.text}>
                <span className={style.span}> Corporate Law</span>
                <p className={style.pTeqi}>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </div>
            </div>

            <div className={style.div}>
              <div className={style.icon}>
                <i class="fa-solid fa-users"></i>
              </div>
              <div className={style.text}>
                <span className={style.span}> Criminal Law</span>
                <p className={style.pTeqi}>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </div>
            </div>
           
          </div> 
          {/* <div className={style.more}>
              <span className={style.morell}>More Practice Areas </span>
            </div> */}
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
