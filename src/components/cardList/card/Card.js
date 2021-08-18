import { CardItemStyled } from "./CardStyled";

const Card = ({ img, taskName, taskReward, children }) => {
  function declOfNum(n, text) {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
      return text[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text[1];
    }
    if (n1 === 1) {
      return text[0];
    }
    return text[2];
  }

  return (
    <CardItemStyled>
      <div className="card">
        <img className="card__image" src={img} alt={taskName} />
        <div className="card__footer">
          <div className="card__info">
            <h3 className="card__taskName">{taskName}</h3>
            <span className="card__rewardTag">{`${taskReward} ${declOfNum(
              taskReward,
              ["балл", "балла", "баллов"]
            )}`}</span>
          </div>

          {children}
        </div>
      </div>
    </CardItemStyled>
  );
};

export default Card;
