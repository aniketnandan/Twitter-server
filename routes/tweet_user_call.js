var express=require('express');
var router=express.Router();
var tweet=require('./tweet_user');
var dbfile=require('./tweet_db_new');
//var tweet_jq=require('/public/javascript/tweet_jquery');

router.get('/back',function(req,res){
  res.redirect('/');
});

router.get('/delete/id=:id',function(req,res){
  var id = (req.params.id) - 1;
  console.log(id);
  dbfile.deleteRecord(id);
  res.redirect('/');
});

router.get('/',function(req,res){
  dbfile.showAll();
  console.log("from db file user list :", dbfile.user);
  console.log("from db file twitter list :", dbfile.tweets);
  res.render('tweet_user_showpage',{list:dbfile.user});
});

router.get('/:id',function(req,res){
  res.render('tweet_index',{msg:tweet.find(req.params.id)});
});

router.post('/create',function(req,res){
  var author=req.body.author;
  var tweets=req.body.tweets;
  //if(author!=null && tweets!=null){
    // tweet.create(author,tweets);
    // console.log(tweet.tweetsList);
    dbfile.addRecord_user(author);
    dbfile.addRecord_tweets(author,tweets);
    res.redirect('/');
  //}
});

module.exports=router;
