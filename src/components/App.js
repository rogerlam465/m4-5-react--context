import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

import { GameContext } from './GameContext';

function App(props) {

  // const { numCookies, setNumCookies, purchasedItems, setPurchasedItems, calculateCookiesPerSecond } = React.useContext(GameContext);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}

export default App;
