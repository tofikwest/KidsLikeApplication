import { HomePageStyled } from "./HomePageStyled";
import planer from "../../images/planer.png";
// import CardList from "../../components/cardList/CardList"; внизу тестил карточки :)
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="home-sidebar">
        <ul className="weekDays-list">
          <li className="weekDays-listItem">Понедельник</li>
          <li className="weekDays-listItem">Вторник</li>
          <li className="weekDays-listItem">Среда</li>
          <li className="weekDays-listItem">Четверг</li>
          <li className="weekDays-listItem">Пятница</li>
          <li className="weekDays-listItem">Суббота</li>
          <li className="weekDays-listItem">Воскресенье</li>
        </ul>
      </div>
      <section>
        <div className="stats-wrapper">
          <div className="current-time">
            <p className="current-week">Неделя: 21-27 Декабря</p>
            <span className="current-tasks">Мoи задачи:</span>
            <span className="current-day">ПЯТНИЦА, 25-12-2020</span>
          </div>
          <div>
            <p className="stats">
              Заработано баллов за эту неделю:<span>0</span>
            </p>

            <p className="stats">
              Запланировано баллов на эту неделю:
              <span>0</span>
            </p>

            {/* <p> %% выполнения</p> */}
          </div>
        </div>
        <p className="notification">На этот день задач нет</p>
        <button type="button" className="home-button">
          Запланировать задачи
        </button>
        <img src={planer} alt="children" />
        {/*  <CardList />  Сорри Таня, пока нету главной страницы я тут чекал карточки */}
        <Footer />
        {/* пока футер только для десктопа, подожду адаптивку от Тани  :) */}
      </section>
    </HomePageStyled>
  );
};

export default HomePage;
