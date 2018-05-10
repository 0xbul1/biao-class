var history = require('../src/history');

history.init({
  el: '#history-list',
  on_click: function (keyword, e) {
    console.log(keyword);
  },
});

// history.add('a');
// history.add('b');
// // history.remove('b');
// history.clear();

// var history = require('../src/history');

// history.init({
//     el: '#history-list',
//     on_click : function(keyword, e){
//         console.log(keyword)
//     }
// });
history.add('波多野结衣');
history.add('天海翼');
history.add('苍井空');
