module.exports={
  tweetsList:[],
  create:function(name,tweets){
    this.tweetsList.push({id: this.tweetsList.length+1, name: name, tweet: tweets})
  },
  show:function(){
    return this.tweetsList;
  },
  find:function(id){
    return this.tweetsList.filter(function(tweets){
      return tweets.id==id;
      })[0];
    }
  }
