import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import style from "./page.module.scss";
import Header from "../Header/Header";

const AppPage = () => {
  return (
    <AuthWrapper>
      <Header />
      <div className={style.main}>
        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </AuthWrapper>
  );
};

export default AppPage;
