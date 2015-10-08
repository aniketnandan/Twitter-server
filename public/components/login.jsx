var Login_head=React.createClass({
  render: function(){
    return(
      <div className="insert_login">
        <span className="left"><h2>Login into your account</h2></span>
        <span id="HOME"><abbr title="Click to goback to Home page"> <a href="/">Home</a></abbr></span>
      </div>
    );
  }
});
var Login_body = React.createClass({
  getInitialState: function() {
    return {
      user: ''
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var email = React.findDOMNode(this.refs.email).value,
        password = React.findDOMNode(this.refs.password).value;
    fetch('/login/checking_details', {method: 'POST', data: {'email': email, 'password': password}})
    .then(function(data) {
      this.setState({ user: JSON.parse(data) })
    }.bind(this))
  },

  render: function(){
    return(
      <div className="form_login">
        <p>{this.state.user.email ? this.state.user.email : null}</p>
          <form onSubmit={this.handleSubmit}>
            <p>Enter your mail address</p>
            <input type="email" ref="email" placeholder="abc@xyz.com"/>
            <p>Enter Password</p>
            <input type="password" placeholder="write your password" ref="password" />
            <p><input type="Submit" value="click to proceed" /></p>
          </form>
        </div>
    );
  }
});
React.render(<Login_body />, document.querySelector(".middle"));
React.render(<Login_head />, document.querySelector(".header"));
