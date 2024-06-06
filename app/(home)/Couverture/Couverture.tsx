import { Layout } from "@/components/Layout";
import style from "./Couverture.module.scss";

export default async function Couverture() {
  return (
    <div className={style.main}>
      <span className={style.light}></span>
      <img className={style.bg} src="/image/bg.png" alt="" />
      <div className={style.container__title}>
        <h1 className={style.title}>
          Concepteur de piscine <br /> virtuel.
        </h1>
        <small className={style.small}>
          Utilisez notre outil innovant pour concevoir des piscines de manière
          réaliste et
          <br /> impressionner vos clients.
        </small>
        <button className={style.try__free}></button>
      </div>

      <img className={style.app} src="/image/app.png" alt="" />
      <img className={style.app__window} src="/image/app-window.png" alt="" />
    </div>
  );
}
