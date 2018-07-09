var https = require('https');

module.exports = function getHTML (options, callback) {
  /* Your code here */
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
};

