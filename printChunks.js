function getAndPrintHTMLChunks () {
  var https = require('https');

  var reqOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(reqOptions, function (res){
    res.setEncoding('UTF-8');

    res.on('data', function(data){
      console.log('Chunk length: ', data.length);
      console.log(data + '\n');
    });

    res.on('end', function(){
      console.log('Response stream complete');
    });
  });
}

getAndPrintHTMLChunks();