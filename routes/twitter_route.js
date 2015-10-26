
var express=require('express');
var router=express.Router();
var dbfile=require('./twitter_db.js');

router.get('/',function(req,res){
  res.render('twitter');
});

router.post('/post_details',function(req,res){
  console.log("inside express");
  var name=req.body.UserName;
  var mail=req.body.Email;
  var pass=req.body.Password;
  console.log("name:",name,"mail:",mail,"pass:",pass);
  dbfile.addRecord_user(name, mail, pass).then(function(result){
    res.send(result)
  }).catch(function(err){
    res.send(err)
  });
});

router.post('/verify',function(req,res){
  var email = req.body.Email;
  var pass = req.body.Password;
  console.log(email,pass);
  dbfile.verify(email,pass).then(function(result){
    res.send(result);
    console.log("OKKK!!!")
  }).catch(function(error){
    res.send(error);
    console.log("ERROR!!!");
  });
});











// router.get('/',function(req,res){
//   res.render('twitter_showpage');
// });

// router.get('/login',function(req,res){
//   res.render('twitter_login',{msg: undefined});
// });

// router.get('/sign_up',function(req,res){
//   res.render('twitter_sign_up',{msg: undefined});
// });

// router.post('/sign_up/create',function(req,res){
//   var name=req.body.user_name;
//   var email=req.body.email;
//   var password=req.body.con_pass;
//   dbfile.addRecord_user(name,email,password)
//     .then(function(result){
//       res.render('twitter_sign_up',{'msg': result});
// //    res.redirect('/sign_up?success=' + result);
//     }).catch(function(err){
//       res.render('twitter_sign_up',{'msg': err});
// //    res.redirect('/sign_up?error=' + err);
//     });
// });
// router.post('/login/checking_details',function(req,res){
//  //console.log(data);
//   var mail=req.body.email;
//   var password=req.body.password;
//   console.log(mail, password);
//   dbfile.verify(mail,password)
//     .then(function(result){
//       var response_user = result;
//       console.log("resolve~~~~~~ ", response_user);
//       res.redirect('/login/'+response_user);
//     }).catch(function(error){
//       console.log("reject~~~~~~~ ",error);
//       res.render('twitter_login',{'msg': error});
//     });
// });

// router.get('/login/:response_user',function(req,res){
//   var user_Name=req.params.response_user;
//   dbfile.find_id(user_Name, function(id){
//     dbfile.find_tweets(id,function(tweets){
//       var info =
//         {
//           'user_name': user_Name,
//           'tweets': tweets
//         }
//       ;
//       res.send(info);
//     });
//     return res;
//   });
// });

// router.post('/login/:user/post_tweet',function(req,res){
//   var write=req.body.tweets_write;
//   var response_user=req.params.user;
//   dbfile.submit_tweet(response_user,write);
//   res.redirect('/login/'+response_user);
//   //  res.send(req.params.user);
//   // res.send("written tweets:", write);
// });

// router.get('/login/:user/home',function(req,res){
//   var response_user=req.params.user;
//   res.redirect('/login/'+response_user);
// });

// router.get('/login/user/logout',function(req,res){
//   res.render('twitter_login.ejs');
// })

module.exports=router;
