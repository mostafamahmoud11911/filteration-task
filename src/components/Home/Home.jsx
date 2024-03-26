import style from "./Home.module.css";
import group from "/imgs/Group 560.svg";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.container}>
        <div className={style.content}>
          <img src={group} className={style.img} alt="" />
          <button className={style.btnExp}>Experts</button>
          <p className={style.head}>Lorem</p>
          <p className={style.headtwo}>Lorem lorem</p>
          <p className={style.prag}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, cum
            et officiis doloremque sint sunt incidunt! Expedita nesciunt
            inventore 
          </p>
          <button className={style.helpMe}>Help Me</button>
        </div>
      </div>
    </div>
  );
}
