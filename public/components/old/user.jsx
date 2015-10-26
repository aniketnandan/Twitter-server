var User_page_head=React.createClass({
  componentDidMount: function(){
    fetch('/login/response_user').then(function(data){
      console.log(data);
    });
  },
  render:function(){
    return(
    <div className="head">
      <span className="headings"><a href="/login/<%= user %>/home">Home</a></span>
      <nav className="logout">
        <span className="headings"><a href="/login/user/logout">Log Out</a></span>
      </nav>
    </div>
    );
  }
});

var User_page_body=React.createClass({
  render: function(){
    return(
      <div className="wrap">
       <div id="user_name">
          Welcome Back
       </div>
       <div id="enter_tweets">
         <form action="/login/<%=user%>/post_tweet" method="post">
            <textarea rows="8" cols="50" placeholder="Enter your tweets here" name="tweets_write"></textarea>
            <abbr title="Enter the switch to post your tweets"><input type="submit" value="Post" /></abbr>
         </form>
       </div>
      </div>
    );
  }
});
React.render(<User_page_head />, document.querySelector('.user_header'));
React.render(<User_page_body />, document.querySelector('.user_content'));
