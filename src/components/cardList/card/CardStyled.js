import styled from "styled-components";

export const CardItemStyled = styled.li`
  margin-top: 20px;
  filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));

  @media screen and (min-width: 768px) {
    margin-top: 30px;
    margin-left: 20px;
    flex-basis: calc((100% - 40px) / 2);
  }

  @media screen and (min-width: 1280px) {
    margin-top: 20px;
    flex-basis: ${({ location }) =>
      location === "/planning" || location === "/awards"
        ? "calc((100% - 80px) / 4)"
        : "calc((100% - 60px) / 3)"};
  }

  .card__image {
    object-fit: cover;
    display: block;
    border-radius: 6px 6px 0px 0px;
    width: 100%;
    height: 194px;
  }

  .card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 14px 20px;
    background-color: #ffbc33;
    border-radius: 0px 0px 6px 6px;
  }

  .card__info {
    margin-bottom: 3px;
  }

  .card__taskName {
    margin-bottom: 4px;

    font-family: "Montserrat", sans-serif;
    color: #000000;
    text-transform: uppercase;

    font-weight: 700;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
  }

  .card__rewardTag {
    padding: 3px 10px;

    background-color: #5679d7;
    border-radius: 3px;

    font-family: "Montserrat", sans-serif;
    color: #ffffff;
    font-weight: 500;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;
