import styled from "styled-components";
import modalImage from "../../../images/planning-modal.png";

export const AddCustomTaskModalStyled = styled.div`
  background-color: #ffffff;
  border-radius: 6px;

  .closeModalImg {
    display: block;
    margin: 5px 5px 0 auto;
  }

  .modalTopWrapper {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 131px;
    width: 280px;
    background-image: url(${modalImage});
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .modalImageLabel {
    margin: 15px;
  }

  .modalImageLabel:hover,
  .modalImageLabel:focus {
    outline: 1px solid ${({ colors }) => colors.userLogoBgColor};
  }

  .modalImageInput {
    display: none;
  }

  .modalBottomWrapper {
    display: flex;
    flex-direction: column;

    padding: 20px 27px 30px 27px;

    background: ${({ colors }) => colors.primaryBgColor};
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.25);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .modalInputLabel {
    position: relative;
  }

  .modalInputLabel:first-child {
    margin-bottom: 10px;
  }

  .modalInputPenImg {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .modalInput {
    display: block;
    padding-left: 28px;

    height: 28px;
    width: 100%;
    background-color: ${({ colors }) => colors.primaryBgColor};
    border: none;
    border-bottom: 1px solid ${({ colors }) => colors.modalTextColor};
  }

  .modalInput::placeholder {
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: ${({ colors }) => colors.modalTextColor};
  }

  .modalButton {
    align-self: center;
    width: min-content;
    margin-top: 20px;
    padding: 5px 17px;

    background-color: ${({ colors }) => colors.modalTextColor};
    border-radius: 4px;
    border-color: transparent;

    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: ${({ colors }) => colors.primaryTextColor};
  }
`;
