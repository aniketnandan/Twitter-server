module.exports={
  user:[],
  tweets:[],
  addRecord_user:function(name){
    var pg = require('pg');
    var connection = "postgres://kreetiuser:root@localhost:5432/upandrunning";
    var user_stmnt = "insert into twitter_user (user_name) values ('"+name+"')";

    pg.connect(connection,function(err,client){
      if(err){
        return err;
      }
      else {
        client.query(user_stmnt, null, function(err,res){
          if(err){
            return err;
          }
          pg.end();
        });
      }
    });
  },
  addRecord_tweets:function(name,tweet){
    var pg = require('pg');
    var connection = "postgres://kreetiuser:root@localhost:5432/upandrunning";
    var tweet_stmnt = "insert into twitter_tweets (tweet,user_id) values ('"+tweet+"', (select user_id from twitter_user where user_name='"+name+"'))";
    var user = `select user_id from twitter_user where user_name='${name}'`;

    pg.connect(connection, function(err, client) {
      client.query(user, null, function(err, res) {
        console.log(err)
        console.log("user", res);
        var insertTweet = `insert into twitter_tweets (tweet, user_id) values (${tweet}, ${res})`;
        client.query(insertTweet, null, function(err, res) {
          if(!err) pg.end();
        })
      })
    })

    // pg.connect(connection,function(err,client) {
    //   if(err){
    //     return err;
    //   } else {
    //     client.query(tweet_stmnt, null, function(err,res){
    //       if(err){
    //         console.log(err);
    //         return err;
    //       } else {
    //         console.log(res)
    //       }
    //       pg.end();
    //     });
    //   }
    // });
  },
  deleteRecord:function(id){
    var pg = require('pg');
    var connection = "postgres://kreetiuser:root@localhost:5432/upandrunning";
    pg.connect(connection,function(err,client){
      if (err){
        return err;
      }
      else{
        var stmnt="delete from tweet_list where tweet_id="+id;
        client.query(stmnt, null, function(err,res){
          if(err){
            return err;
          }
          else{
            console.log("deleted!");
          }
          pg.end();
        });
      }
    });
  },

  showAll:function() {
    var pg = require('pg');
    var that = this;
    var connection = "postgres://kreetiuser:root@localhost:5432/upandrunning";
    var show_tweet = "select tweet from twitter_tweets order by id";
    var show_user = "select user_name from twitter_user order by user_id";

    return pg.connect(connection,function(err,client){
      if (err){
        return(err);
      }
      else{
        var promise_tweet = new Promise (function(resolve,reject){
          client.query(show_tweet,null,function(err,res){
            if(err){
              reject("Error in push into tweets array");
            }
            else{
              resolve(res);
            }
          });//client end
        });//promise_tweet end
        promise_tweet.then(function(res){
          that.tweets.push(res.rows);
          console.log("tweet array",that.tweets);
        })

        var promise_user = new Promise (function(resolve,reject){
          client.query(show_user,null,function(err,res){
            if(err){
              reject("Error in push into user array");
            }
            else{
              resolve(res);
            }
          });//client end
        });//promise_user end
        promise_user.then(function(res){
          that.user.push(res.rows);
          console.log("user array",that.user);
        });
      }
    });
  }//showAll closed
}
