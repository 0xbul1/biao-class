// var age = 19;
// var name = 'whh';
// if (name=='whh')
// //============
// if (age < 18) {
//     console.log('kid');
// } else {
//     console.log('adult');
// }
 
// if (age == 18) {
//     console.log('三年血赚');
// } else if(age==17) {
//     console.log('死刑不亏');
// } else if(age==19) {
//     console.log('GK5神车啊 ');
// } else {
//     console.log ('嘿嘿嘿');
// }



//====================================
// 表哥

    /*选中页面中的#age元素*/
// var age_element = document.querySelector('#age');

// /*当<input id="age">发生改变时执行后面的函数*/
// age_element.addEventListener('change',
//   function () {

//     /*取到<input>中的值*/
//     var age = age_element.value;
//     /*将字符串转换为数字类型*/
//     age = parseInt(age);

//     if (!age) {
//       console.log('年龄不能为空');
//     } else if (age < 1) {
//       console.log('你逗我呢');
//     } else if (age == 18) {
//       console.log('刚成年');
//     } else if (age > 18 && age < 40) {
//       console.log('青年');
//     } else {
//       console.log('yo');
//     }

//   });
var name_element = document.querySelector('#name');
name_element.addEventListener('change', function () {
    var name = name_element.value;
  
    if (!name) {
      console.log('无名氏，请输入姓名');
    } else {
      console.log(name + '，雷猴啊');
    }
  });



var age_element = document.querySelector('#age');

    // console.log(age_element);
    // age_element.addEventListener('keyup'
age_element.addEventListener('change',function(){

    var age = age_element.value;

    // console.log type0f (age);
    console.log(typeof age);

    age = parseInt(age);
    console.log(typeof age);
    // console.log type0f (age);    
    // if(!age){
    // // if(age == '') {
    //     console.log('年龄不能为空');

    // }else if (age < 1) {
    //     console.log('你逗我呢');
    // // }else if(){

    // // }else if(){

    // }else {
    //     console.log('什么鬼没有空');
    // }
    if (!age && age !== 0) {
        console.log('年龄不能为空');
      } else if (age < 1) {
        console.log('你逗我呢');
      } else if (age == 18) {
        console.log('刚成年');
      } else if (age > 18 && age < 40) {
        console.log('青年');
      } else {
        console.log('yo');
      }

});
