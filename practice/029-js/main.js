//alert("yo");
/*var list = [
    '赵旋',
    '赵旋',
    '赵旋',
    '赵旋',
    '赵旋',
    '赵旋',
    '赵旋',
    '赵旋',
    '赵旋',
    '赵旋',
    '赵旋'
];*/

// var person1 = list[1];
// var person2 = list[2];
// var len = list.length;

//console.log(person1,person2,len);
//===Number
// 1;
// 2.1;
// 1e3;
// NaN；

// //=========String
// "yo"
// 'yo'
// `
// asdffdfg
// sadsa

// `


//-----------Boolean

//Object
var person = {
    name: 'whh',
   //name: whh, 
    age: 18,
    wife: {
        name:'lbb',
        age:20,        
    },
    pet: {
        name:'muhaha',
        type:'cat'
    }
}
console.log(person.name);
console.log(person);
console.log(person.wife.name);
console.log(person.wife.age);
console.log(person.pet.name);


  //11111111111111111
var a = {
    a1: [
      'a', 'b', {v: 666}
    ]
  }
  console.log(a.a1[2].v);

  //222222222222222222222222 
  var b = [
    1, 3, 'a', {
      b2: {
        a: 1,
        v: 7,
        c: [{
          z: 666
        }]
      }
    }
  ]  
  console.log(b[3].b2.c[0].z);
  //333333333333333333333333333
  var c = {
    a: {
      u: 1,
      d: {
        o: {
          z: { 1: 2, y: [1, 2] }
        },
        p: {
          yo: [3, 5, 666]
        }
      }
    }
  }
  console.log (c.a.d.p.yo[2]);
  //4444444444444444444444444
  var d = [
    [1, 3, 'abc'],
    [
      'muhaha',
      { d: 1, v: ['a', 'b', { z: 666 }] }
    ]
  ]
  console.log(d[1][1].v[2].z);
  //5555555555555555555555555
  var e = {
    a: [3, {
      b: 1,
      v: [1, 3, {
        p: 666
      }]
    }, 9]
  }
  console.log(e.a[1].v[2].p);