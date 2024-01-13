import { Switch } from 'react-router-dom';
import MyRoute from './myroute';

import Login from '../pages/Login';
import Page404 from '../pages/404/index';

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path="/" component={Login} />
            <MyRoute path="*" component={Page404} />
        </Switch>
    );
}
