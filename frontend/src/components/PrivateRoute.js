import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const localStorage = window.localStorage.getItem("token");
  console.log({ auth });
  return (
    <Route
      {...rest}
      render={(props) => {
        {
          console.log(props);
        }
        if (auth.isLoading) {
          return <h2>Loading ...</h2>;
        } else if (!localStorage) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
const maptStateToProps = (state) => ({
  auth: state.products,
});

export default connect(maptStateToProps)(PrivateRoute);
