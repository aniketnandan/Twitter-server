var Sign_up_header=React.createClass({
  render: function(){
    return(
      <div className="head">
        <span><h2> Create your twitter account </h2></span>
        <div className="home"><abbr title="Click to goback to Home page"> <a href="/"> <span id="change_font">Home</span></a></abbr></div>
      </div>
    );
  }
});

var Sign_up_body=React.createClass({

  render: function(){
    return(
      <div className="middle">
        <form method="post" action="/sign_up/create">
          <p>User Name</p>
          <input type="text" placeholder="Enter your user name" name="user_name" />
          <p>Email Address</p>
          <input type="email" placeholder="abc@xyz.com" name="email" />
          <p>Create Password</p>
          <input type="password" placeholder="Enter new password" name="con_pass" />
          <p><input type="submit" value="Sign Up" /></p>
        </form>
      </div>
    );
  }
});

React.render(<Sign_up_header />, document.querySelector(".header_sign_up"));
React.render(<Sign_up_body />, document.querySelector(".content"));
