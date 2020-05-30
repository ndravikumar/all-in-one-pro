import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';
import { Html, Css, Javascript, ReactJs, Angular} from './CourseDetails';
import AllInOne from './AllInOne';

const Routes = ({match}) =>
  <Switch>
    <Route path={`${match.url}/AllInOne`} isExact component={AllInOne}/>
    <Route path={`${match.url}/AllInOne/html`}  component={Html}/>
    <Route path={`${match.url}/AllInOne/css`} component={Css}/>
    <Route path={`${match.url}/javascript`} component={Javascript}/>
    <Route path={`${match.url}/AllInOne/reactjs`} component={ReactJs}/>
    <Route path={`${match.url}/AllInOne/angular`} component={Angular}/>
    {/*<Route component={asyncComponent(() => import("app/routes/extraPages/routes/404"))}/>*/}
  </Switch>;


export default withRouter(Routes);

