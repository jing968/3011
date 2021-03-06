import "./App.css";
import styled from "styled-components";
// Routing imports
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
// Import components and path
import * as ROUTES from "./Constants/routes";
import Navbar from "./Components/Navbar";

const Home = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
`;

function App() {
  return (
    <Home>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={ROUTES.HOME} element={<ROUTES.Home />} />
          <Route path={ROUTES.RESULT} element={<ROUTES.Result />} />
          <Route path={ROUTES.COVIDCASE} element={<ROUTES.Covidcase />} />
          <Route path={ROUTES.DISEASE} element={<ROUTES.Disease />} />
          <Route path={ROUTES.RISKRANK} element={<ROUTES.RiskRank />} />
          <Route
            exact
            path="/"
            element={<Navigate replace to={ROUTES.HOME} />}
          />
        </Routes>
      </BrowserRouter>
    </Home>
  );
}

export default App;
