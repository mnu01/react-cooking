import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ROUTES from './constants/ROUTES';

import PageNotFound from './modules/page-not-found/PageNotFound';
import { LayoutMain } from './modules/layout-main/LayoutMain';
import { Home } from './modules/home/Home';
import RecipeList from './modules/recipe-list/RecipeList';
import Recipe from './modules/recipe/Recipe';

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
