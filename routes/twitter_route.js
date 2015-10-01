var express=require('express');
var router=express.Router();
var dbfile=require('./twitter_db.js');

router.get('/',function(req,res){
  res.render('twitter_showpage');
});

router.get('/login',function(req,res){
  res.render('twitter_login');
});

router.get('/sign_up',function(req,res){
  var error, success;
  if(req.query.error===undefined && req.query.success===undefined){
    res.render('twitter_sign_up',{msg: undefined});
  }

  else if(req.query.error){
    error = req.query.error;
    res.render('twitter_sign_up',{msg: error});
  }

  else if(req.query.success)
  {
    success = req.query.success;
    res.render('twitter_sign_up',{msg: success});
  }

  console.log("error ",error);
  console.log("success ", success);
});

router.post('/sign_up/create',function(req,res){
  var name=req.body.user_name;
  var email=req.body.email;
  var password=req.body.con_pass;
  dbfile.addRecord_user(name,email,password)
    .then(function(result){
      res.redirect('/sign_up?success=' + result);
    }).catch(function(err){
      res.redirect('/sign_up?error=' + err);
    });
});
router.post('/login/checking_details',function(req,res){
  var mail=req.body.email_id;
  var password=req.body.password;
  var userName = dbfile.verify(mail,password,function(response_user){
    console.log("user name:", response_user);
    res.redirect('/login/'+response_user);
    return response_user;
  });
});

router.get('/login/:response_user',function(req,res){
  var user_Name=req.params.response_user;
  dbfile.find_id(user_Name, function(id){
    dbfile.find_tweets(id,function(tweets){
      res.render('twitter_user',{'user':user_Name , 'tweets':tweets});

      //      return tweets;
    });
    return res;
  });

  //
});

router.post('/login/:user/post_tweet',function(req,res){
  var write=req.body.tweets_write;
  var response_user=req.params.user;
  dbfile.submit_tweet(response_user,write);
  res.redirect('/login/'+response_user);
  //  res.send(req.params.user);
  // res.send("written tweets:", write);
});

router.get('/login/:user/home',function(req,res){
  var response_user=req.params.user;
  res.redirect('/login/'+response_user);
});

router.get('/login/user/logout',function(req,res){
  res.render('twitter_login.ejs');
})

module.exports=router;
