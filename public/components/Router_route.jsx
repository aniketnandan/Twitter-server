import React from 'react'
import  Router, {Route, Link, RouteHandler } from 'react-router'

var App=React.createClass({
  render: function(){
    return(
      <div className="full_page">
         <div className="header">
         <h1>Welcome to Twitter</h1>
         <nav className="links">
           <Link to="/login"> Login </Link>
           <Link to="/sign_up"> Sign Up </Link>
         </nav>
         <div className="contents"></div>
         <div className="footer"></div>
     <RouteHandler />
     </div>
    )
  }
});

var Log_in=React.createClass({
  render: function(){
    return(
      <h1> Log In Page </h1>
    )
  }
});

var Sign_Up=React.createClass({
  render: function(){
    return(
      <h1> Sign Up Page </h1>
    );
  }
})
var routes=(
  <Route path="/" handler={App}>
    <Route path="login" handler={Log_in}/>
    <Route path="sign_up" handler={Sign_Up}/>
  </Route>
)

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body)
})
