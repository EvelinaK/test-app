import React from 'react';
import{BrowserRouter,  Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import ProductsViews from './views/ProductsView';
import  './index.css'
import ButtonAppBar from './components/AppBar';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <ButtonAppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/products" component={ProductsViews}/>
      </Switch>
      </BrowserRouter>
    </>
  );
}
