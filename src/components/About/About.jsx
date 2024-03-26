import style from "./About.module.css";
import aboutCon from "/imgs/aboutCon.png";

export default function About() {
  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.aboutContent}>
            <h4 className={style.aboutHead}>About Us</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an{" "}
            </p>
            <img src={aboutCon} alt="" />
          </div>
          <div className={style.aboutWhere}>
            <h4>Where</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <button className={style.btn}>Help me</button>
      </div>
    </div>
  );
}
