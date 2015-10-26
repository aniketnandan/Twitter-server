function fetch(url, options){

  return new Promise(function(resolve,reject) {
    var xhr;
    var dataToBeSent = options.data;
    if(window.XMLHttpRequest){
      xhr=new XMLHttpRequest();
    }
    xhr.onreadystatechange = function(){
      if(xhr.readyState==4 && xhr.status==200){
        resolve(xhr.responseText);
      }
    };
    xhr.onerror = function(error){
      reject(error);
    };
    xhr.open(options.method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    if(options.data !== undefined){
      if(typeof dataToBeSent === 'object'){
        dataToBeSent = Object.keys(options.data).map(function(key){
          return key +"="+ options.data[key]
        }).join('&');
      }
      xhr.send(dataToBeSent);
      console.log("dataToBeSent~~~~~",dataToBeSent);
    }

  });
}
