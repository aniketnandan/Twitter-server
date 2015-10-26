import React from 'react';
import Router, {Route, Link, RouteHandler, Redirect} from 'react-router';
import LogIn from './Login.jsx';
import SignUp from './Signup.jsx';
import UserProfile from './user_profile.jsx';

var App = React.createClass({

  render: function(){
    return(
      <div>
        <div className="header">
          <h1>Welcome to Twitter</h1>
          <span className="twitter_icon"><img src="images/icons-847272_640.png" height="57px" width="60px" /></span>
          <nav className="links">
            <Link to="/login"> <span className="gap_links_name"> Login </span> </Link>
            <Link to="/sign_up"> <span className="gap_links_name"> Sign Up </span> </Link>
          </nav>
        </div>
        <RouteHandler />
      </div>
    )
  }
})

var routes=(
  <Route>
    <Route path="/" handler={App}>
      <Redirect from="home" to="/" />
    </Route>

    <Route path = "login" handler={LogIn} >
      <Route name="user" path = ":Profile_userName" handler = {UserProfile} />
    </Route>

    <Route path = "sign_up" handler={SignUp} />
  </Route>

)
Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body)
})
