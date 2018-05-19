var max_id = 101;

var todo_list = [
    {
        id: 100,
        name: '买菜',
        completed: false, 
    },
    {
        id: 101,
        name: '洗菜',
        completed: false,
    },
];
// 增
function add(row){
  row_id = max_id +1;
  todo_list.push(row);

}
// add (
//     {
//         id: 101,
//         name: '洗菜',
//         completed: false,  
//     }
// );
// console.log(todo_list);
// 删
function remove(id){
    var index = find_index_by_id(todo_list,id);

    if (index < 0)
    return;
    todo_list.splice(index,1);
}

function find_index_by_id (arr ,id ){
    return arr.findIndex(function (row){
        return row.id == id;
    });
}
// remove (1000);
// console.log('todo_list',todo_list);


// 改
function update (id, new_row){
    var index = find_index_by_id(todo_list,id);
    
    if (index < 0)
    return;

    var old_row = todo_list[index];
    todo_list[index] = Object.assign({},old_row.new_row);
}
update(100,{
    completed:true,
    remind_at:'2030',
})
console.log('todo_list:', todo_list);

// 查
function read(id){
    if (id)
        return find_by_id(todo_list,id);

    return todo_list;   
}
function find_by_id(arr, id) {
    return arr.find(function (row) {
      return row.id === id;
    });
  }
// console.log(read(100));