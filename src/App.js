import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "./assets/banner.jpg";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SimpleBottomNavigation from "./components/BottomNavbar/BottomNavbar";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";
import More from "./pages/More/More";

const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 95vw;
  background: url(${BackgroundImage}) no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: black;
  padding: 80px 0;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppContainer>
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/trending" component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
            <Route path="/more" component={More} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </Container>
      </AppContainer>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
};

export default App;
