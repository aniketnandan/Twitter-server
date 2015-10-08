function fetch(url, opts){
  var xhr;
  return new Promise(function(resolve,reject){
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
    xhr.open(opts.method || 'GET', url, true);
    xhr.send(JSON.stringify(opts.data));
  });
}
