import Header from "../../../Header/Header";
import { ProjectForm } from "../[productId]/edit/projectForm";
import style from "./page.module.scss";

export default async function AppPage() {
  return (
    <>
      <Header />
      <div className={style.main}>
        <ProjectForm />
        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </>
  );
}
