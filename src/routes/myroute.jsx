import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

MyRoute.defaultProps = {
    isClosed: false,
};

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    isClosed: PropTypes.bool,
};

export default function MyRoute({ component: Component, isClosed, ...rest }) {
    const isLoggedIn = false;

    if (isClosed && !isLoggedIn) {
        return (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { prevPath: rest.location.pathname },
                }}
            />
        );
    }

    return <Route {...rest} component={Component} />;
}
