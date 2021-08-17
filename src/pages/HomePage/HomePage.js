import { HomePageStyled } from "./HomePageStyled";
import WeekTabs from "../../components/weekTabs/WeekTabs";
import WeekTabContent from "../../components/weekTabContent/WeekTabContent";
import CurrentWeekRange from "../../components/currentWeekRange/CurrentWeekRange";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="home-sidebar">
        <WeekTabs />
      </div>
      <section>
        <CurrentWeekRange />

        <WeekTabContent />
      </section>
    </HomePageStyled>
  );
};

export default HomePage;
