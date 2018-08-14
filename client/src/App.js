import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './components/layouts/About'
import Home from './components/layouts/Home'
import Layout from './components/layouts/Layout'
import NewsItemDetail from './components/presentation/NewsItemDetail';
import { Provider } from 'react-redux';
import store from './stores/store';
import NewsArticle from './containers/NewsArticle';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/new/:id" component={NewsArticle} />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
