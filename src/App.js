import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { HashRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { setIsInitialization } from './redux/actions/app';

import HomePage from "./components/Pages/Home";
import ArtistsPage from "./components/Pages/Artists";
import ArtworksPage from "./components/Pages/Artworks";
import NotesPage from "./components/Pages/Notes";


class App extends Component {
  
  componentDidMount() {
    this.props.setIsInitialization(true);
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/notes" component={NotesPage} />
          <Route path="/artists/:itemId*" component={ArtistsPage} />
          <Route path="/artworks" component={ArtworksPage} />
        </Switch>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  // state
})

export default connect(mapStateToProps, {
  setIsInitialization
})(App);
