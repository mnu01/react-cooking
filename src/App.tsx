import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import ROUTES from './constants/ROUTES';

import { PageNotFound } from './containers/PageNotFound';
import { LayoutMain } from './containers/LayoutMain';
import { Home } from './containers/Home';
import { RecipeList } from './containers/RecipeList';
import { Recipe } from './containers/Recipe';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <LayoutMain>
      </LayoutMain>
      <div>
        <Switch>
          <Route path={ROUTES.HOME} component={Home} exact />
          <Route path={ROUTES.RECIPE_LIST} component={RecipeList} exact />
          <Route path={ROUTES.RECIPE + ROUTES.PARAM_ID} component={Recipe} exact />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
