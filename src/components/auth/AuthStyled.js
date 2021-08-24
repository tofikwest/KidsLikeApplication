import styled from "styled-components";
import backMob from "../../images/auth-background/back-mobile.png";
import backTabImg1 from "../../images/auth-background/back1-tablet.png";
import backTabImg2 from "../../images/auth-background/back2-tablet.png";
import backTabImg3 from "../../images/auth-background/back3-tablet.png";
import back2xTabImg1 from "../../images/auth-background/back1-tablet@2x.png";
import back2xTabImg2 from "../../images/auth-background/back2-tablet@2x.png";
import back2xTabImg3 from "../../images/auth-background/back3-tablet@2x.png";
import backDeskImg1 from "../../images/auth-background/back-desk1.png";
import backDeskImg2 from "../../images/auth-background/back-desk2.png";
import backDeskImg3 from "../../images/auth-background/back-desk3.png";
import backDeskImg4 from "../../images/auth-background/back-desk4.png";

export const AuthContainer = styled.div`
  padding: 60px 0px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: 0.04em;
  color: #858598;
  /* width: 100vw; */
  margin: 0 auto;
  background: url(${backMob}) bottom;
  background-repeat: no-repeat;

  .authTitle {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    text-align: center;
    color: #000;
    margin-bottom: 40px;
  }
  .authText {
    margin-bottom: 20px;
    margin-top: 0px;
  }
  .user-form {
    display: flex;
    flex-direction: column;
    max-width: 280px;
    align-self: center;
  }
  .user-label {
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .user-input {
    height: 42px;
    width: 100%;
    border: none;
    padding-left: 8px;
    font-family: "Montserrat";
    background-color: #f6f7fb;
    box-shadow: inset 0px 1px rgba(0, 0, 0, 0.15);
  }
  .user-input:focus +,
  .user-input:not(:placeholder-shown) {
    opacity: 0;
  }
  .user-input:not(:placeholder-shown)::placeholder {
    opacity: 0;
  }
  .user-input:focus::placeholder {
    opacity: 0;
  }
  .user-input::placeholder {
    color: #a6abb9;
    /* padding-left: 10px; */
    font-size: 14px;
    line-height: 1.21;
    transition: opacity 300ms linear;
    font-family: "Montserrat";
  }
  .accent-red {
    color: red;
  }
  .icon-user {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
  .user-button {
    font-size: 10px;
    line-height: 1.22;
    font-family: inherit;
    align-self: center;
    width: 135px;
    height: 48px;
    color: white;
    background-color: #ffbc33;
    border: none;
    border-radius: 4px;
    box-shadow: offset 0px, 2px, rgba(0, 0, 0, 0.15);
    margin-top: 23px;
    :not(:last-child) {
      margin-right: 10px;
    }
  }
  .auth-btn-wrap {
    display: flex;
    justify-content: space-around;
  }
  .googleBtn {
    width: 150px;
    display: flex;
    align-items: center;
    padding: 11px 32px;
    font: inherit;
    font-size: 14px;
    line-height: 1.22;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 30px;
    background-color: #f6f7fb;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
  }
  @media screen and (min-width: 768px) {
    padding: 0px 164px 305px 164px;
    background: url(${backTabImg3}) bottom center,
      url(${backTabImg1}) left bottom, url(${backTabImg2}) right bottom;
    background-repeat: no-repeat;
    margin-left: -94px;
    margin-right: -94px;

    .authTitle {
      font-size: 28px;
      margin-top: 72px;
      margin-bottom: 38px;
      max-width: 400px;
    }
    .user-form {
      max-width: 400px;
      padding: 40px;
      border-radius: 4px;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    }
    .user-button {
      width: 154px;
      font-size: 12px;
      line-height: 1.22;
    }
  }
  /* @media (min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px),
    (min-resolution: 2dppx) and (min-width: 768px) {
    background: url(${back2xTabImg3}) bottom center, url(${back2xTabImg2}) right bottom, url(${back2xTabImg1}) left bottom;
    background-repeat: no-repeat;
  } */

  @media screen and (min-width: 1280px) {
    padding: 0px 80px 0px 206px;
    flex-basis: calc(50%);
    /* background: url(${backDeskImg2}) bottom right, url(${backDeskImg3}) left, url(${backDeskImg4}) right,
      url(${backDeskImg1});
    background-repeat: no-repeat; */
    background: none;
    .authTitle {
      text-align: start;
      margin-top: 50px;
      margin-bottom: 32px;
      max-width: 400px;
    }
    .user-form {
      margin-bottom: 78px;
    }
  }
`;

// export const BackMobImg = styled.div`
//   background: url(${backMob}) bottom;
//   background-repeat: no-repeat;
//   width: 100vw;
//   height: auto;
// `;

export const BackDeskImg = styled.div`
  @media screen and (min-width: 1280px) {
    flex-basis: calc(50%);

    background: url(${backDeskImg2}) bottom right, url(${backDeskImg3}) left,
      url(${backDeskImg4}) right, url(${backDeskImg1});
    background-repeat: no-repeat;
  }
`;

export const DeskWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    height: calc(100vh - 48px);
    display: flex;
    padding-top: 22px;
    padding-bottom: 22px;
    height: 100%;
  }
`;
