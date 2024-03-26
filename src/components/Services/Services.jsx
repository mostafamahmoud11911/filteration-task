import style from "./Services.module.css";
import card1 from "/imgs/card1.png";
import card2 from "/imgs/card2.png";
import card3 from "/imgs/card3.png";

export default function Services() {
  return (
    <div className={style.services}>
      <div className={style.header}>
        <span></span>
        <span></span>
        Services
        <span></span>
        <span></span>
      </div>
      <div className={style.container}>
        <div className={style.cards}>
          <div className={style.card}>
            <img src={card1} alt="" />
            <div className={style.content}>
              <p>Lorem Ipsum</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled
              </p>
            </div>
          </div>
          <div className={style.card}>
            <img src={card2} alt="" />
            <div className={style.content}>
              <p>Lorem Ipsum</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled
              </p>
            </div>
          </div>
          <div className={style.card}>
            <img src={card3} alt="" />
            <div className={style.content}>
              <p>Lorem Ipsum</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled
              </p>
            </div>
          </div>
        </div>
        <div className={style.btn}>
          <button>Help Me</button>
        </div>
      </div>
    </div>
  );
}
