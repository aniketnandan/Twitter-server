import React from 'react';
import Router, {Link} from 'react-router';

var SignUp = React.createClass({
  getInitialState: function(){
    return{
      message:''
    }
  },

  handleSubmit: function(e){
    e.preventDefault();
    var user_name = React.findDOMNode(this.refs.user_name).value;
    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.pass).value;
    var options = {method: 'POST', data: {UserName: user_name, Email: email, Password: password}};
    console.log("from jsx",options);
    fetch('/post_details',options).then(function(res){
      console.log(res);
      this.setState({message: res});
    }.bind(this)).catch(function(error){
      console.log(error);
    });

  },
  render: function(){
    return(
      <div>
        <div className="header">
          <h2> not a member yet? Fill up the form </h2>
          <span className="twitter_icon"><img src="images/icons-847272_640.png" height="57px" width="60px" /></span>
          <nav className="links">
            <Link to="/login"> <span className="gap_links_name"> Login </span> </Link>
            <Link to="/home"> <span className="gap_links_name">Home  </span></Link>
          </nav>
        </div>
        <div className="contents">
          <div className="notification_message">
            {this.state.message}
          </div>
          <div className="contents_Info">
            <form className="SignUp_Form" onSubmit={this.handleSubmit}>
              <p>Enter your User Name</p>
              <input type="text" placeholder="should be unique one" ref="user_name"/> <br/>
              <p>Enter your email address</p>
              <input type="email" placeholder="abc@xyz.com" ref="email"/> <br/>
              <p>Enter your Password</p>
              <input type="password" placeholder="Enter your password" ref="pass"/> <br/>
              <p><input type="submit" value="Sign Up" /></p>
            </form>
          </div>
        </div>
      </div>


    );
  }
})

export default SignUp;
