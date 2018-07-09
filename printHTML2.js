var https = require('https');

function getAndPrintHTML (options) {
  var data = '';

  https.get(options, function (res, err){
    console.log(err);

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

var reqOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(reqOptions);