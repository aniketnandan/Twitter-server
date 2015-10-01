var Login = React.createClass({
  render: function(){
    return(
      <div className="form_login">
          <form method="post" action="/login/checking_details">
            <p>Enter your mail address</p>
            <input type="email" placeholder="abc@xyz.com" name="email_id" />
            <p>Enter Password</p>
            <input type="password" placeholder="write your password" name="password" />
            <p><input type="Submit" value="click to proceed" /></p>
          </form>
        </div>
    );
  }
});
React.render(<Login />, document.querySelector(".middle"));
