import styled from "styled-components";

export const AuthContainer = styled.div`
  padding: 60px 0px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: 0.04em;
  color: #858598;
  width: 100%;
  margin: 0 auto;
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
    /* width: 280px; */
    /* padding: 10px; */
    align-self: center;
  }
  .user-label {
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .user-input {
    height: 42px;
    width: 100%;
    outline: none;
    padding-left: 8px;
    font-family: "Montserrat";
    background-color: #f6f7fb /* box-shadow: inset 0px 1px rgba(0, 0, 0, 0.15); */ * /;
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
    display: flex;
    align-items: center;
    padding: 11px 32px;
    font: inherit;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 30px;
    background-color: #f6f7fb;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
  }
`;
