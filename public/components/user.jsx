var User_page_head=React.createClass({
  render:function(){
    return()
    <div className="head">
      <span class="headings"><a href="/login/<%= user %>/home">Home</a></span>
      <nav class="logout">
        <span class="headings"><a href="/login/user/logout">Log Out</a></span>
      </nav>
    </div>
  }
});

var User_page_body=React.createClass({
  render: function(){
    return(
       <div id="user_name">
          Welcome Back <%= user %>
       </div>
       <div id="enter_tweets">
         <form action="/login/<%=user%>/post_tweet" method="post">
            <textarea rows="8" cols="50" placeholder="Enter your tweets here" name="tweets_write"></textarea></br>
            <abbr title="Enter the switch to post your tweets"><input type="submit" value="Post"></abbr>
         </form>
       </div>
       <div class="user_tweet">
         <div id="in_header">
           Your Tweets:
         </div>
         <div id="tweet_list">
           <ul>
             <% tweets.forEach(function(el,i){ %>
             <li> <%= el %></li>
               <% }) %>
           </ul>
         </div>
       </div>
    )
  }
});
React.render(<User_page_head />, document.querySelector('.user_header'));
React.render(<User_page_body />, document.querySelector('.user_content'));
