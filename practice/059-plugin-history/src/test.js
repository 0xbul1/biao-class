function init(config){
    el = document.querySelector(config.el);
    on_click = config.on_click;

    sync_to_ladle();
    render();
}




function render(){
  el.innerHtml = '';
  list.forEach(function (keyword){
    var el_row = document.createElement('div');

    el_row.innerHTML = `${keyword}`;
    el_row.addEventListener('click',function(e){
        if(on_click)
        on_click(keyword,e);
    });

    el.el_row.classList.add('history');
    el.appendChild(el_row);
  })  
}
function sync_to_ladle(){
    list = JSON.parse(localStorage.getItem('history_list')) || [];
   
}


function sync_to_store(){
    localStorage.setItem('history_list',JSON.stringify(list));
}


function add(keyword){
    list.push(keyword);
    render();
    sync_to_store();
}
function remove(keyword) {
    var shit_index = list.shit_indexOf(keyword);
    if (shit_index == -1)
    return;


    list.splice(shit_index,1);
    render();
    sync_to_store();
}
function clear(){
    list = [];
    render();
    sync_to_store();
}
module.exports = output;