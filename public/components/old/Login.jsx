import React from 'react';
import Router, {Route, Link, RouteHandler } from 'react-router';

var LogIn = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var email=React.findDOMNode(this.refs.email).value;
    var password=React.findDOMNode(this.refs.password).value;
    console.log('Email address: ' + email + ', Password: ' + password );
  },

  render: function(){
    return(
      <div className="fullPageLogIn">
        <div className="header">
           <h1>Login </h1>
           <nav className="links">
             <Link to="/sign_up"> <span className="gap_links_name"> Sign Up </span> </Link>
             <Link to="/home"> <span className="gap_links_name">Home  </span></Link>
           </nav>
        </div>

        <div className="contents">
          <div className="contents_Info">
            <h2> Twitter Login </h2>
            <form className="LogIn_Form" onSubmit={this.handleSubmit}>
               <p>Enter your registered email address</p>
               <input type="email" placeholder="abc@xyz.com" ref="email"/> <br/>
               <p>Enter your Password</p>
               <input type="password" placeholder="Your Password here" ref="password"/> <br/>
               <p><input type="submit" value="Log In"/></p>
            </form>
          </div>
        </div>
      </div>
    )
  }
});
export default LogIn;
