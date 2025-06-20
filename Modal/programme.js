//variables
let openButton=document.getElementById('btn1');
let modalContainer=document.getElementById('container');
let closeButton=document.getElementById('btn2');
btn1.addEventListener('click',function(){
    modalContainer.style.display='block';
});
btn2.addEventListener('click',function(){
    modalContainer.style.display='none';
});
window.addEventListener('click',function(e){
    if(e.target===modalContainer){
        modalContainer.style.display='none';
    }
});