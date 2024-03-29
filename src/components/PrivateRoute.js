import React from 'react';
import { UserContext } from '../context/user';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = React.useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() => {
        // return user.token ? children : <Redirect to="/login"></Redirect>;
        return user.token ? children : <Redirect to='/login'></Redirect>;
      }}
    ></Route>
  );

  // if (user.token) {
  //   return <Route {...rest} render={() => children}></Route>;
  // }

  // return <Redirect to='/login' />;
}
