import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavBar from '../components/Navbar';

import Home from '../pages/Home';
import Login from '../pages/Login';

import { fakeAuth } from '../utils';

export default function AuthExample() {
    useEffect(() => {
        (async function () {
            await fakeAuth.getAuthentication();
        })();
    }, [])

    return (
        <Router>
            <div className="dark">
                <NavBar />
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/">
                        <Home />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}


