var https = require('https');

function getHTML (options, callback) {
  var data = '';

  https.get(options, function (res, err){
    console.log(err);

    res.setEncoding('UTF-8');

    res.on('data', function(chunk){
      data += chunk;
    });

    res.on('end', function(){
      callback(data);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var reqOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(reqOptions, printHTML);