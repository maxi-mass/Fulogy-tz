import React from "react";
import Main from "./pages/Main";
import Info from "./pages/Info";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
const App = () => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <BurgerMenu />
        <div className="main">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/info" component={Info} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
