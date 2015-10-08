var ShowPage_head = React.createClass({
  render: function(){
    return(
      <div className="head">
        <span class="left"> <h2>Home Page </h2></span>
        <div className="insert">
          <span class="font-color"> <a href="https://about.twitter.com/"> About </a> </span>
          <span class="font-color"> <a href="/login"> Login </a> </span>
          <span class="font-color"> <a href="/sign_up">Sign Up </a> </span>
        </div>
      </div>

    );
  }
});
var Foo=React.createClass({
  render: function(){
    return(
      <div className="foo">
        <div id="name">This site is created by Aniket Nandan</div>
        <a target="_blank" title="find us on Facebook" href="http://www.facebook.com/aniket.nandan.1"><img alt="follow me on facebook" src="//login.create.net/images/icons/user/facebook_40x40.png" border="0" /></a>
      </div>
    )
  }
})


React.render(<ShowPage_head />, document.querySelector(".header"));
React.render(<Foo />,document.querySelector(".footer"));
