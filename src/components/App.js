import React from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Section from "../general/Section/Section";

const App = () => {
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
