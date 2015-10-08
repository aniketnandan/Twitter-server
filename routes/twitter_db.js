module.exports={
  addRecord_user: function(name,email,password){
    var pg=require('pg');
    var connection="postgres://kreetiuser:root@localhost:5432/twitter";
    var qry="insert into user_sign_up(user_name,user_email,user_password) values('"+name+"','"+email+"','"+password+"')";
    var that=this;
    return new Promise(function(resolve, reject){
      pg.connect(connection,function(err,client){
        if(err){
          reject("Error in connection with database");
        }else{
          client.query(qry,null,function(err,res){
            if(err){
              console.log(err)
              reject(err.detail);
            }else{
              resolve("Congratulation! your have successfully created your account");
            }
            pg.end();
          });//client end
        }
      });//
    })
  },//addRecord user end

  find_id:function(user,cb){
    var pg=require('pg');
    var connection="postgres://kreetiuser:root@localhost:5432/twitter";
    var qry="select user_id from user_sign_up where user_name='"+user+"'";
    pg.connect(connection,function(err,client){
      if(err){
        console.log("Error in connection with database");
      }
      else{
        client.query(qry, null, function(err,res){
          if(res){
            cb(res.rows[0].user_id);
          }
        });// client end
      }
      pg.end();
    })
  },//find_id end

  find_tweets:function(id,cb){
    var pg=require('pg');
    var connection="postgres://kreetiuser:root@localhost:5432/twitter";
    var qry="select tweets from user_page where user_id="+id;
    var all=[];
    pg.connect(connection, function(err,client){
      if(err){
        console.log("Error in finding database");
      }
      else{
        client.query(qry, null, function(err,res){
          if(res){
            for(var i=0;i<res.rows.length; i++){
              all.push(res.rows[i].tweets);
            }
            cb(all);
          }

        });
      }
      pg.end();
    })
  },


  findTime:function(userId,tweets,cb){
    console.log("in find time");
    var pg=require('pg');
    var connection="postgres://kreetiuser:root@localhost:5432/twitter";
    var qry="select id from user_page where tweets='"+tweet+"' and user_id="+userId;
    pg.connect(connection, function(err,client){
      if(client){
        client.query(qry, null, function(err,res){
          if(err){
            console.log("Problem in retrieving the user_page id");
          }
          else{
            console.log(res);
            // client.query("select tweet_time from user_page where id="+res.rows[0].id, null,function(err,res){
            //   if(err){
            //     console.log("Problem in retrieving time from user_page");
            //   }
            //   else{
            //     cb(res.rows[0].tweet_time);
            //   }
            // })
          }
        })
      }
    })
  },//findTime end

  submit_tweet:function(user_name,tweets,tweet_time){
    console.log("in submit_tweet");
    var pg=require('pg');
    var connection="postgres://kreetiuser:root@localhost:5432/twitter";
    var qry="insert into user_page (tweets,user_id,tweet_time) values('"+tweets+"',(select user_id from user_sign_up where user_name='"+user_name+"'),'"+tweet_time+"')";

    pg.connect(connection,function(err,client){
      if(err){
        console.log("Error in connection with database!");
      }
      else{
        client.query(qry, null, function(err,res){
          if(err){
            console.log("your tweet can not be submitted,try later!");
          }
          else{
            console.log("success in submiting your tweets");
          }
        });//client end
      }
      pg.end();
    })
  },//submit_tweet end

  verify:function(mail,password,cb){
    var pg=require('pg');
    var connection="postgres://kreetiuser:root@localhost:5432/twitter";
    var qry1="select user_password from user_sign_up where user_email='"+mail+"'";
    var qry2="select user_name from user_sign_up where user_email='"+mail+"'and user_password='"+password+"'";
    return new Promise(function(resolve,reject){
      pg.connect(connection,function(err,client){
        if(err){
          reject("error in connection,try after some time");
        }else{
          client.query(qry1, null, function(error,response){
            if(error){
              reject("There is an error in checking your details. Please try after some time");
            }else{
              if(response.rows[0].user_password===password){
                //              console.log("ok!!");
                client.query(qry2, null, function(err,res){
                  if(err){
                    reject("No user name is available");
                  }else{
                    resolve(res.rows[0].user_name);
                  }
                });//qry2 end
              }else{
                reject("Sorry! you have entered wrong email address or password");
              }
            }
          });//qry1 end
        }
        pg.end();
      });//connection end
    })//1st Promise end
  }//verify end
}//module exports end
