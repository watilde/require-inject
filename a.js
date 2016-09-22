require.cache['child_process'] = {
  exports: {
    'execFile': function (cmd, args, options, cb) {
      console.log('hi')
    }
  }
}

var exec = require('child_process').execFile;
exec('a');
