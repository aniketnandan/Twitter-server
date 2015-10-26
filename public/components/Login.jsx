import React from 'react';
import Router, {Link} from 'react-router';

var LogIn = React.createClass({
  contextTypes: {
   router: React.PropTypes.object
  },

  handleSubmit: function(e){
    e.preventDefault();
    var email=React.findDOMNode(this.refs.email).value;
    var password=React.findDOMNode(this.refs.password).value;
    console.log('Email address: ' + email + ', Password: ' + password );
    var options={method: 'POST', data:{ Email: email, Password: password}};
    fetch('/verify',options).then(function(result){

      this.context.router.transitionTo('user', { Profile_userName: result });

    }.bind(this)).catch(function(error){
      console.error("there is an error ~~~~~ ", error);
    });

  },

  render: function(){
    return(
      <div>
        <div className="header">
          <h2>Login to your Twitter Account</h2>
          <span className="twitter_icon"><img src="images/icons-847272_640.png" height="57px" width="60px" /></span>
          <nav className="links">
            <Link to="/sign_up"> <span className="gap_links_name"> Sign Up </span> </Link>
            <Link to="/home"> <span className="gap_links_name">Home  </span></Link>
          </nav>
        </div>
        <div className="contents">
          <div className="notification_message">

          </div>
          <div className="contents_Info">
            <form className="LogIn_Form" onSubmit={this.handleSubmit}>
              <p>Enter your registered email address</p>
              <input type="email" placeholder="abc@xyz.com" ref="email"/> <br/>
              <p>Enter your Password</p>
              <input type="password" placeholder="Your Password here" ref="password"/> <br/>
              <p><input type="submit" onClick={this.handleLogIn} value="Log In"/></p>
            </form>
          </div>
        </div>
      </div>

    )
  }
});
export default LogIn;
