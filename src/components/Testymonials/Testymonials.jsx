import style from "./Testymonials.module.css";
import ellipe from "/imgs/Ellipse 1.png";
import { FaStar } from "react-icons/fa";

export default function Testymonials() {
  return (
    <div className={style.testymonials}>
      <div className={style.header}>
        <span></span>
        <span></span>
        Testymonials
        <span></span>
        <span></span>
      </div>
      <div className={style.container}>
        <div className={style.cards}>
          <div className={style.card}>
            <img src={ellipe} alt="" />
            <div>
              <h5>Courtney Henry</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book
              </p>
              <div className={style.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div className={style.card}>
            <img src={ellipe} alt="" />
            <div>
              <h5>Courtney Henry</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book
              </p>
              <div className={style.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div className={style.card}>
            <img src={ellipe} alt="" />
            <div>
              <h5>Courtney Henry</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book
              </p>
              <div className={style.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div className={style.card}>
            <img src={ellipe} alt="" />
            <div>
              <h5>Courtney Henry</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book
              </p>
              <div className={style.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
