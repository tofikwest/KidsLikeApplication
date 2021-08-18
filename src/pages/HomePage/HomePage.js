import { HomePageStyled } from "./HomePageStyled";
import WeekTabs from "../../components/weekTabs/WeekTabs";
// import WeekTabContent from "../../components/weekTabContent/WeekTabContent";
import CurrentWeekRange from "../../components/currentWeekRange/CurrentWeekRange";
import CardList from "../../components/cardList/CardList";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="home-sidebar">
        <WeekTabs />
      </div>
      <section>
        <CurrentWeekRange />
        {/* <WeekTabContent /> */}
        <CardList />
        {/* Сорри Таня, пока нету главной страницы я тут чекал карточки */}
        <Footer />
        {/* пока футер только для десктопа, подожду адаптивку от Тани  :) */}
      </section>
    </HomePageStyled>
  );
};

export default HomePage;
