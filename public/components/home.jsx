var ShowPage = React.createClass({
  render: function(){
    return(
      <div className="insert">
        <a href="https://about.twitter.com/"> About </a>
        <a href="/login"> Login </a>
        <a href="/sign_up"> Sign Up </a>
      </div>
    );
  }
});



React.render(<ShowPage />, document.querySelector(".options"));
