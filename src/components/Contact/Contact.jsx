import style from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    phone: 0,
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const getUser = ({ target }) => {
    setCredential({ ...credential, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // simple vildation
    if (!credential.name && !credential.email && !credential.phone) {
      return;
    }
    setLoading(true);
    // request data
    try {
      const { data } = await axios.post(
        `http://upskilling-egypt.com:3001/contact`,
        credential
      );
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setErr("something went wrong!");
    }
  };

  return (
    <div className={style.contact}>
      <div className={style.header}>
        <span></span>
        <span></span>
        Contact
        <span></span>
        <span></span>
      </div>
      <div className={style.container}>
        <div className={style.cards}>
          <form onSubmit={handleSubmit} className={style.form}>
            <input
              type="text"
              name="name"
              className={style.input}
              placeholder="name"
              onChange={getUser}
            />
            <input
              type="text"
              name="email"
              className={style.input}
              placeholder="email"
              onChange={getUser}
            />
            <input
              type="text"
              name="phone"
              className={style.input}
              placeholder="phone"
              onChange={getUser}
            />
            <button className={style.btn}>
              {loading ? "send...." : "send"}
            </button>
            <p className={style.error}>{err}</p>
          </form>

          <div className={style.info}>
            <span className={style.email}>
              <MdEmail color="#6d91ee" /> <span>upskilling.eg1@gmail.com</span>
            </span>
            <span className={style.phone}>
              <FaPhoneAlt color="#6d91ee" /> <span>+201154932137</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
