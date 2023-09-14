var button=document.getElementById('button');

function main(){
var order1=document.getElementById('order1');
var order2=document.getElementById('order2');
var order3=document.getElementById('order3');
var order4=document.getElementById('order4');
var order5=document.getElementById('order5');
var order6=document.getElementById('order6');
var order7=document.getElementById('order7');
var order8=document.getElementById('order8');

order1.addEventListener('click', function(){
    if(localStorage.getItem('isLogged')=='true'){
    localStorage.setItem('hamburger', 'yes');
    }
})
order2.addEventListener('click', function(){
    if(localStorage.getItem('isLogged')=='true'){
    localStorage.setItem('fries', 'yes');
    }
})
order3.addEventListener('click', function(){
    if(localStorage.getItem('isLogged')=='true'){
    localStorage.setItem('chicken nuggets', 'yes');
    }
})
order4.addEventListener('click', function(){
    if(localStorage.getItem('isLogged')=='true'){
    localStorage.setItem('hot dog', 'yes');
    }
})
order5.addEventListener('click', function(){
    if(localStorage.getItem('isLogged')=='true'){
    localStorage.setItem('onion rings', 'yes');
    }
})
order6.addEventListener('click', function(){
    if(localStorage.getItem('isLogged')=='true'){
    localStorage.setItem('pizza', 'yes');
    }
})
order7.addEventListener('click', function(){
    if(localStorage.getItem('isLogged')=='true'){
    localStorage.setItem('ice cream', 'yes');
    }
})
order8.addEventListener('click', function(){
    if(localStorage.getItem('isLogged')=='true'){
    localStorage.setItem('taco', 'yes');
    }
})
}

function activate(){
    localStorage.setItem('hamburger', 'no');
    localStorage.setItem('fries', 'no');
    localStorage.setItem('chicken nuggets', 'no');
    localStorage.setItem('hot dog', 'no');
    localStorage.setItem('onion rings', 'no');
    localStorage.setItem('pizza', 'no');
    localStorage.setItem('ice cream', 'no');
    localStorage.setItem('taco', 'no');
}