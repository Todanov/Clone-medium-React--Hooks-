import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import Routers from "routers";
import TopBar from "components/topBar/toBar";
import { CurrentUserProvider } from "contexts/currentUser";
import CurrentUserCheker from "components/currentUserCheker/currentUserCheker";

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserCheker>
        <div className="App">
          <Router>
            <TopBar />
            <Routers />
          </Router>
        </div>
      </CurrentUserCheker>
    </CurrentUserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
