import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes/index';
import { Provider } from 'react-redux';
import store from 'store';
import Articles from './Articles';
import Notes from './Notes';
import Twitters from './Twitters';
import DetailsPage from './DetailsPage';
import LoginPage from './LoginPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.home} render={() => <Redirect to={routes.notes} />} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetailsPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetailsPage} />
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
