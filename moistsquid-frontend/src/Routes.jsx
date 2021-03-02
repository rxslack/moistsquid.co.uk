import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {
  HomePage,
  BinDaysPage,
} from './pages';

import {
  DefaultLayout
} from './layouts'

export const Routes = () => {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          </Route>
          <Route path="/bin-days" exact>
            <DefaultLayout>
              <BinDaysPage />
            </DefaultLayout>
          </Route>
      </Switch>
    </Router>
  )
}

export default Routes;