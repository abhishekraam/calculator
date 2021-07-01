const numberBtn = document.getElementsByClassName('numberbtn');
const operationBtn = document.getElementsByClassName('operationbtn');
const operation = document.getElementById('operation');
const result = document.getElementById('result');
const AC = document.getElementById('Clear');
const DEL = document.getElementById('DEL');
const equals = document.getElementById('equals');  


function appendNo(data){
    result.value+= data; 
} 
function allClear(){
    result.value= '';
}
function equate(){
    result.value= eval(result.value);
}
function del(){
    result.value=result.value.split('').reverse().slice(1).reverse().join('');
}
function key(event){
   console.log(event);
   if(!((event.key<=9) && (event.key>=0)) ){
      alert('Enter  a number');
   }
}