import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { PageNotFound } from './containers/PageNotFound';
import ROUTE from './constants/ROUTES';
import { Home } from './containers/Home';
import { RecipeList } from './containers/RecipeList';
import { Recipe } from './containers/Recipe';

const App: React.FC = () => {
  return (
    <>
      <ul>
        <li><Link to={ROUTE.HOME}>Home</Link></li>
        <li><Link to={ROUTE.RECIPE_LIST}>RecipeList</Link></li>
        <li><Link to={ROUTE.RECIPE + "/test"}>Recipe</Link></li>
        <li><Link to={ROUTE.PAGE_NOT_FOUND}>404</Link></li>
      </ul>
      <div>
        <Switch>
          <Route path={ROUTE.HOME} component={Home} exact />
          <Route path={ROUTE.RECIPE_LIST} component={RecipeList} exact />
          <Route path={ROUTE.RECIPE + ROUTE.PARAM_ID} component={Recipe} exact />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
