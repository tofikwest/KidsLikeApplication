import React, { useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Section from "../general/Section/Section";
import { useHistory, useLocation } from "react-router-dom";
import { parse } from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserOperation } from "../redux/auth/authOperations";
import { setGoogleToken } from "../redux/auth/authActions";
import { setLastLocation } from "../redux/location/locationAction";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { search } = useLocation();
  const history = useHistory();
  const lastLocation = useSelector((state) => state.lastLocation.location);

  useEffect(() => {
    if (search) {
      const { token } = parse(search);
      dispatch(setGoogleToken(token));
    }
  }, [dispatch, search]);

  useEffect(() => {
    dispatch(getCurrentUserOperation());
    dispatch(setLastLocation(location.pathname));
  }, [dispatch, location]);

  useEffect(() => {
    history.push(lastLocation);
  }, [dispatch, history]);

  return (
    <>
      <Section>
        <Header />
        <Main />
      </Section>
    </>
  );
};

export default App;
