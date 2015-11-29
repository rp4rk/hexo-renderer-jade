var jade = require('jade');

hexo.extend.renderer.register('jade', 'html', function(data, locals){
  
  // Get config
  var config = hexo.theme.config.jade;
  
  var options = {
    filename: data.path
  };
  
  
  
  // Append config to options
  for (var k in config) {
    options[k] = config[k];
  }
  
  console.log(this.config.jade);
  console.log(options);
  
  // Compile
  return jade.compile(data.text, options)(locals);
}, true);