import React, { useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Section from "../general/Section/Section";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/auth/authOperations";
import { useLocation } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  // const location = useLocation();

  useEffect(() => {
    dispatch(getCurrentUser());
    // return () => {
    //   dispatch(location());
    // };
  });

  return (
    <>
      <Header />
      <Section>
        <Main />
      </Section>
    </>
  );
};

export default App;
