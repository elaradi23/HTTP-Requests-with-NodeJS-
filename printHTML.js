function getAndPrintHTML () {
  var https = require('https');

  var reqOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var data = '';

  https.get(reqOptions, function (res){
    res.setEncoding('UTF-8');

    res.on('data', function(chunk){
      data += chunk;
    });

    res.on('end', function(){
      console.log(data);
      console.log('Response stream complete');
    });
  });
}

getAndPrintHTML();