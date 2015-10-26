var Profile = React.createClass({

  render: function(){
    return(
      <div>
        <div className = "header"> This is a header </div>
        <div className = "contents"> This is a body {this.context.router}</div>
        <div className = "footer"> This is a footer </div>
      </div>
    )
  }
});
export default Profile;
