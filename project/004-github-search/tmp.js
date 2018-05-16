var history = require('./src/plugin/history'); 

history.config({
  el:'#history-list',

});
history.add('yo');
history.remove('yo');
history.show();
history.hide();


history.clear();