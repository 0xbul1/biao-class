/*搜索模块
* user: 获取github用户数据。具体这个数据用来干嘛，我不在乎，由调用者
* 决定*/

/*搜用户
* @param String keyword 用户名关键词
* @param Function on_success 当搜到数据时怎么办（回调函数）
* */
function user(keyword, on_success) {
    var http = new XMLHttpRequest();
    http.open('get', 'https://api.github.com/search/users?q=' + keyword);
    http.send();
  
    http.addEventListener('load', function () {
      var data = JSON.parse(this.responseText);
      on_success(data)
    });
  }
  
  module.exports = {
    user: user
  }