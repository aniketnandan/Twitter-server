$.getScript("/routes/tweet_db_new.js")
  .done(function(script){
    console.log(script);
    console.log("loaded successfully!");
    $(".right").on("click",function(e){
      var id=e.target.id;
      alert(id);
      e.deleteRecord(id);
      e.alerting();
    });
  })
  .fail(function(){
    console.log("not loaded");
  })



// var db = document.write('<script src="./routes/tweet_db_new.js" type="text/javascript"></script>');
// $(".right").on("click",function(e){
//   var id=e.target.id;
//   alert(id);
//   db.deleteRecord(id);
//   db.alerting();
// });
