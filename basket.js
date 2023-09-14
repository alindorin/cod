var Orders=0;
var total=0.00;
var clear=document.getElementById('clear');
var cancel1=document.getElementById('cancel1');
var cancel2=document.getElementById('cancel2');
var cancel3=document.getElementById('cancel3');
var cancel4=document.getElementById('cancel4');
var cancel5=document.getElementById('cancel5');
var cancel6=document.getElementById('cancel6');
var cancel7=document.getElementById('cancel7');
var cancel8=document.getElementById('cancel8');

var price1=document.getElementById('Price1');
var price2=document.getElementById('Price2');
var price3=document.getElementById('Price3');
var price4=document.getElementById('Price4');
var price5=document.getElementById('Price5');
var price6=document.getElementById('Price6');
var price7=document.getElementById('Price7');
var price8=document.getElementById('Price8');

cancel1.addEventListener('click', function(){
    price1.innerHTML="";
    if(Orders>0){
    Orders-=1;
    }
    if(msg1.innerHTML=='Hamburger'){
        localStorage.setItem('hamburger', 'no');
        msg1.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg1.innerHTML=='Fries'){
        localStorage.setItem('fries', 'no');
        msg1.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg1.innerHTML=='Chicken Nuggets'){
        localStorage.setItem('chicken nuggets', 'no');
        msg1.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg1.innerHTML=='Hot Dog'){
        localStorage.setItem('hot dog', 'no');
        msg1.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg1.innerHTML=='Onion Rings'){
        localStorage.setItem('onion rings', 'no');
        msg1.innerHTML="";
        total-=0.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg1.innerHTML=='Pizza'){
        localStorage.setItem('pizza', 'no');
        msg1.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg1.innerHTML=='Ice Cream'){
        localStorage.setItem('ice cream', 'no');
        msg1.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg1.innerHTML=='Taco'){
        localStorage.setItem('taco', 'no');
        msg1.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    check();
    window.location.reload();
})
cancel2.addEventListener('click', function(){
    price2.innerHTML="";
    if(Orders>0){
    Orders-=1;
    }
    if(msg2.innerHTML=='Hamburger'){
        localStorage.setItem('hamburger', 'no');
        msg2.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg2.innerHTML=='Fries'){
        localStorage.setItem('fries', 'no');
        msg2.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg2.innerHTML=='Chicken Nuggets'){
        localStorage.setItem('chicken nuggets', 'no');
        msg2.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg2.innerHTML=='Hot Dog'){
        localStorage.setItem('hot dog', 'no');
        msg2.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg2.innerHTML=='Onion Rings'){
        localStorage.setItem('onion rings', 'no');
        msg2.innerHTML="";
        total-=0.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg2.innerHTML=='Pizza'){
        localStorage.setItem('pizza', 'no');
        msg2.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg2.innerHTML=='Ice Cream'){
        localStorage.setItem('ice cream', 'no');
        msg2.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg2.innerHTML=='Taco'){
        localStorage.setItem('taco', 'no');
        msg2.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    check();
    window.location.reload();
})
cancel3.addEventListener('click', function(){
    price3.innerHTML="";
    if(Orders>0){
    Orders-=1;
    }
    if(msg3.innerHTML=='Hamburger'){
        localStorage.setItem('hamburger', 'no');
        msg3.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg3.innerHTML=='Fries'){
        localStorage.setItem('fries', 'no');
        msg3.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg3.innerHTML=='Chicken Nuggets'){
        localStorage.setItem('chicken nuggets', 'no');
        msg3.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg3.innerHTML=='Hot Dog'){
        localStorage.setItem('hot dog', 'no');
        msg3.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg3.innerHTML=='Onion Rings'){
        localStorage.setItem('onion rings', 'no');
        msg3.innerHTML="";
        total-=0.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg3.innerHTML=='Pizza'){
        localStorage.setItem('pizza', 'no');
        msg3.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg3.innerHTML=='Ice Cream'){
        localStorage.setItem('ice cream', 'no');
        msg3.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg3.innerHTML=='Taco'){
        localStorage.setItem('taco', 'no');
        msg3.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    check();
    window.location.reload();
})
cancel4.addEventListener('click', function(){
    price4.innerHTML="";
    if(Orders>0){
    Orders-=1;
    }
    if(msg4.innerHTML=='Hamburger'){
        localStorage.setItem('hamburger', 'no');
        msg4.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg4.innerHTML=='Fries'){
        localStorage.setItem('fries', 'no');
        msg4.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg4.innerHTML=='Chicken Nuggets'){
        localStorage.setItem('chicken nuggets', 'no');
        msg4.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg4.innerHTML=='Hot Dog'){
        localStorage.setItem('hot dog', 'no');
        msg4.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg4.innerHTML=='Onion Rings'){
        localStorage.setItem('onion rings', 'no');
        msg4.innerHTML="";
        total-=0.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg4.innerHTML=='Pizza'){
        localStorage.setItem('pizza', 'no');
        msg4.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg4.innerHTML=='Ice Cream'){
        localStorage.setItem('ice cream', 'no');
        msg4.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg4.innerHTML=='Taco'){
        localStorage.setItem('taco', 'no');
        msg4.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    check();
    window.location.reload();
})
cancel5.addEventListener('click', function(){
    price5.innerHTML="";
    if(Orders>0){
    Orders-=1;
    }
    if(msg5.innerHTML=='Hamburger'){
        localStorage.setItem('hamburger', 'no');
        msg5.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg5.innerHTML=='Fries'){
        localStorage.setItem('fries', 'no');
        msg5.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg5.innerHTML=='Chicken Nuggets'){
        localStorage.setItem('chicken nuggets', 'no');
        msg5.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg5.innerHTML=='Hot Dog'){
        localStorage.setItem('hot dog', 'no');
        msg5.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg5.innerHTML=='Onion Rings'){
        localStorage.setItem('onion rings', 'no');
        msg5.innerHTML="";
        total-=0.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg5.innerHTML=='Pizza'){
        localStorage.setItem('pizza', 'no');
        msg5.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg5.innerHTML=='Ice Cream'){
        localStorage.setItem('ice cream', 'no');
        msg5.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg5.innerHTML=='Taco'){
        localStorage.setItem('taco', 'no');
        msg5.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    check();
    window.location.reload();
})
cancel6.addEventListener('click', function(){
    price6.innerHTML="";
    if(Orders>0){
    Orders-=1;
    }
    if(msg6.innerHTML=='Hamburger'){
        localStorage.setItem('hamburger', 'no');
        msg6.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg6.innerHTML=='Fries'){
        localStorage.setItem('fries', 'no');
        msg6.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg6.innerHTML=='Chicken Nuggets'){
        localStorage.setItem('chicken nuggets', 'no');
        msg6.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg6.innerHTML=='Hot Dog'){
        localStorage.setItem('hot dog', 'no');
        msg6.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg6.innerHTML=='Onion Rings'){
        localStorage.setItem('onion rings', 'no');
        msg6.innerHTML="";
        total-=0.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg6.innerHTML=='Pizza'){
        localStorage.setItem('pizza', 'no');
        msg6.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg6.innerHTML=='Ice Cream'){
        localStorage.setItem('ice cream', 'no');
        msg6.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg6.innerHTML=='Taco'){
        localStorage.setItem('taco', 'no');
        msg6.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    check();
    window.location.reload();
})
cancel7.addEventListener('click', function(){
    price7.innerHTML="";
    if(Orders>0){
    Orders-=1;
    }
    if(msg7.innerHTML=='Hamburger'){
        localStorage.setItem('hamburger', 'no');
        msg7.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg7.innerHTML=='Fries'){
        localStorage.setItem('fries', 'no');
        msg7.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg7.innerHTML=='Chicken Nuggets'){
        localStorage.setItem('chicken nuggets', 'no');
        msg7.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg7.innerHTML=='Hot Dog'){
        localStorage.setItem('hot dog', 'no');
        msg7.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg7.innerHTML=='Onion Rings'){
        localStorage.setItem('onion rings', 'no');
        msg7.innerHTML="";
        total-=0.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg7.innerHTML=='Pizza'){
        localStorage.setItem('pizza', 'no');
        msg7.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg7.innerHTML=='Ice Cream'){
        localStorage.setItem('ice cream', 'no');
        msg7.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg7.innerHTML=='Taco'){
        localStorage.setItem('taco', 'no');
        msg7.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    check();
    window.location.reload();
})
cancel8.addEventListener('click', function(){
    price8.innerHTML="";
    if(Orders>0){
    Orders-=1;
    }
    if(msg8.innerHTML=='Hamburger'){
        localStorage.setItem('hamburger', 'no');
        msg8.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg8.innerHTML=='Fries'){
        localStorage.setItem('fries', 'no');
        msg8.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg8.innerHTML=='Chicken Nuggets'){
        localStorage.setItem('chicken nuggets', 'no');
        msg8.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg8.innerHTML=='Hot Dog'){
        localStorage.setItem('hot dog', 'no');
        msg8.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg8.innerHTML=='Onion Rings'){
        localStorage.setItem('onion rings', 'no');
        msg8.innerHTML="";
        total-=0.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg8.innerHTML=='Pizza'){
        localStorage.setItem('pizza', 'no');
        msg8.innerHTML="";
        total-=3.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg8.innerHTML=='Ice Cream'){
        localStorage.setItem('ice cream', 'no');
        msg8.innerHTML="";
        total-=1.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    else if(msg8.innerHTML=='Taco'){
        localStorage.setItem('taco', 'no');
        msg8.innerHTML="";
        total-=2.99;
        document.getElementById('sum').innerHTML=total+'$';
    }
    check();
    window.location.reload();
})

clear.addEventListener('click', function(){
    localStorage.setItem('hamburger', 'no');
    localStorage.setItem('fries', 'no');
    localStorage.setItem('chicken nuggets', 'no');    
    localStorage.setItem('hot dog', 'no');    
    localStorage.setItem('onion rings', 'no');    
    localStorage.setItem('pizza', 'no');    
    localStorage.setItem('ice cream', 'no');    
    localStorage.setItem('taco', 'no');
    Orders=0;
    msg1.innerHTML="";
    msg2.innerHTML="";
    msg3.innerHTML="";
    msg4.innerHTML="";
    msg5.innerHTML="";
    msg6.innerHTML="";
    msg7.innerHTML="";
    msg8.innerHTML="";
    price1.innerHTML="";
    price2.innerHTML="";
    price3.innerHTML="";
    price4.innerHTML="";
    price5.innerHTML="";
    price6.innerHTML="";
    price7.innerHTML="";
    price8.innerHTML="";
    cancel1.style.visibility='hidden';
    cancel2.style.visibility='hidden';
    cancel3.style.visibility='hidden';
    cancel4.style.visibility='hidden';
    cancel5.style.visibility='hidden';
    cancel6.style.visibility='hidden';
    cancel7.style.visibility='hidden';
    cancel8.style.visibility='hidden';
    total=0.00;
    document.getElementById('sum').innerHTML='0$';
})

if(localStorage.getItem('hamburger')=='yes'){
    Orders+=1;
}
if(localStorage.getItem('fries')=='yes'){
    Orders+=1;
}
if(localStorage.getItem('chicken nuggets')=='yes'){
    Orders+=1;
}
if(localStorage.getItem('hot dog')=='yes'){
    Orders+=1;
}
if(localStorage.getItem('onion rings')=='yes'){
    Orders+=1;
}
if(localStorage.getItem('pizza')=='yes'){
    Orders+=1;
}
if(localStorage.getItem('ice cream')=='yes'){
    Orders+=1;
}
if(localStorage.getItem('taco')=='yes'){
    Orders+=1;
}

var msg1=document.getElementById('msg1');
var msg2=document.getElementById('msg2');
var msg3=document.getElementById('msg3');
var msg4=document.getElementById('msg4');
var msg5=document.getElementById('msg5');
var msg6=document.getElementById('msg6');
var msg7=document.getElementById('msg7');
var msg8=document.getElementById('msg8');

var hamburger=false;
var fries=false;
var chicken_nuggets=false;
var hot_dog=false;
var onion_rings=false;
var pizza=false;
var ice_cream=false;
var taco=false;

function display(){
if(localStorage.getItem('isLogged')=='true'){
    if(Orders>=1 && localStorage.getItem('hamburger')=='yes' && hamburger==false){
        msg1.innerHTML='Hamburger';
        hamburger=true;
        total+=2.99;
        price1.innerHTML="2.99$";
    }
    else if(Orders>=1 && localStorage.getItem('fries')=='yes' && fries==false){
        msg1.innerHTML='Fries';
        fries=true;
        total+=1.99;
        price1.innerHTML="1.99$";
    }
    else if(Orders>=1 && localStorage.getItem('chicken nuggets')=='yes' && chicken_nuggets==false){
        msg1.innerHTML='Chicken Nuggets';
        chicken_nuggets=true;
        total+=3.99;
        price1.innerHTML="3.99$";
    }
    else if(Orders>=1 && localStorage.getItem('hot dog')=='yes' && hot_dog==false){
        msg1.innerHTML='Hot Dog';
        hot_dog=true;
        total+=2.99;
        price1.innerHTML="2.99$";
    }
    else if(Orders>=1 && localStorage.getItem('onion rings')=='yes' && onion_rings==false){
        msg1.innerHTML='Onion Rings';
        onion_rings=true;
        total+=0.99;
        price1.innerHTML="0.99$";
    }
    else if(Orders>=1 && localStorage.getItem('pizza')=='yes' && pizza==false){
        msg1.innerHTML='Pizza';
        pizza=true;
        total+=3.99;
        price1.innerHTML="3.99$";
    }
    else if(Orders>=1 && localStorage.getItem('ice cream')=='yes' && ice_cream==false){
        msg1.innerHTML='Ice Cream';
        ice_cream=true;
        total+=1.99;
        price1.innerHTML="1.99$";
    }
    else if(Orders>=1 && localStorage.getItem('taco')=='yes' && taco==false){
        msg1.innerHTML='Taco';
        taco=true;
        total+=2.99;
        price1.innerHTML="2.99$";
    }
    if(Orders>=2 && localStorage.getItem('hamburger')=='yes' && hamburger==false){
        msg2.innerHTML='Hamburger';
        hamburger=true;
        total+=2.99;
        price2.innerHTML="2.99$";
    }
    else if(Orders>=2 && localStorage.getItem('fries')=='yes' && fries==false){
        msg2.innerHTML='Fries';
        fries=true;
        total+=1.99;
        price2.innerHTML="1.99$";
    }
    else if(Orders>=2 && localStorage.getItem('chicken nuggets')=='yes' && chicken_nuggets==false){
        msg2.innerHTML='Chicken Nuggets';
        chicken_nuggets=true;
        total+=3.99;
        price2.innerHTML="3.99$";
    }
    else if(Orders>=2 && localStorage.getItem('hot dog')=='yes' && hot_dog==false){
        msg2.innerHTML='Hot Dog';
        hot_dog=true;
        total+=2.99;
        price2.innerHTML="2.99$";
    }
    else if(Orders>=2 && localStorage.getItem('onion rings')=='yes' && onion_rings==false){
        msg2.innerHTML='Onion Rings';
        onion_rings=true;
        total+=0.99;
        price2.innerHTML="0.99$";
    }
    else if(Orders>=2 && localStorage.getItem('pizza')=='yes' && pizza==false){
        msg2.innerHTML='Pizza';
        pizza=true;
        total+=3.99;
        price2.innerHTML="3.99$";
    }
    else if(Orders>=2 && localStorage.getItem('ice cream')=='yes' && ice_cream==false){
        msg2.innerHTML='Ice Cream';
        ice_cream=true;
        total+=1.99;
        price2.innerHTML="1.99$";
    }
    else if(Orders>=2 && localStorage.getItem('taco')=='yes' && taco==false){
        msg2.innerHTML='Taco';
        taco=true;
        total+=2.99;
        price2.innerHTML="2.99$";
    }
    if(Orders>=3 && localStorage.getItem('hamburger')=='yes' && hamburger==false){
        msg3.innerHTML='Hamburger';
        hamburger=true;
        total+=2.99;
        price3.innerHTML="2.99$";
    }    
    else if(Orders>=3 && localStorage.getItem('fries')=='yes' && fries==false){
        msg3.innerHTML='Fries';
        fries=true;
        total+=1.99;
        price3.innerHTML="1.99$";
    }
    else if(Orders>=3 && localStorage.getItem('chicken nuggets')=='yes' && chicken_nuggets==false){
        msg3.innerHTML='Chicken Nuggets';
        chicken_nuggets=true;
        total+=3.99;
        price3.innerHTML="3.99$";
    }
    else if(Orders>=3 && localStorage.getItem('hot dog')=='yes' && hot_dog==false){
        msg3.innerHTML='Hot Dog';
        hot_dog=true;
        total+=2.99;
        price3.innerHTML="2.99$";
    }
    else if(Orders>=3 && localStorage.getItem('onion rings')=='yes' && onion_rings==false){
        msg3.innerHTML='Onion Rings';
        onion_rings=true;
        total+=0.99;
        price3.innerHTML="0.99$";
    }
    else if(Orders>=3 && localStorage.getItem('pizza')=='yes' && pizza==false){
        msg3.innerHTML='Pizza';
        pizza=true;
        total+=3.99;
        price3.innerHTML="3.99$";
    }
    else if(Orders>=3 && localStorage.getItem('ice cream')=='yes' && ice_cream==false){
        msg3.innerHTML='Ice Cream';
        ice_cream=true;
        total+=1.99;
        price3.innerHTML="1.99$";
    }
    else if(Orders>=3 && localStorage.getItem('taco')=='yes' && taco==false){
        msg3.innerHTML='Taco';
        taco=true;
        total+=2.99;
        price3.innerHTML="2.99$";
    }
    if(Orders>=4 && localStorage.getItem('hamburger')=='yes' && hamburger==false){
        msg4.innerHTML='Hamburger';
        hamburger=true;
        total+=2.99;
        price4.innerHTML="2.99$";
    }
    else if(Orders>=4 && localStorage.getItem('fries')=='yes' && fries==false){        
        msg4.innerHTML='Fries';
        fries=true;
        total+=1.99;
        price4.innerHTML="1.99$";
    }
    else if(Orders>=4 && localStorage.getItem('chicken nuggets')=='yes' && chicken_nuggets==false){
        msg4.innerHTML='Chicken Nuggets';
        chicken_nuggets=true;
        total+=3.99;
        price4.innerHTML="3.99$";
    }
    else if(Orders>=4 && localStorage.getItem('hot dog')=='yes' && hot_dog==false){
        msg4.innerHTML='Hot Dog';
        hot_dog=true;
        total+=2.99;
        price4.innerHTML="2.99$";
    }
    else if(Orders>=4 && localStorage.getItem('onion rings')=='yes' && onion_rings==false){
        msg4.innerHTML='Onion Rings';
        onion_rings=true;
        total+=0.99;
        price4.innerHTML="0.99$";
    }
    else if(Orders>=4 && localStorage.getItem('pizza')=='yes' && pizza==false){
        msg4.innerHTML='Pizza';
        pizza=true;
        total+=3.99;
        price4.innerHTML="3.99$";
    }
    else if(Orders>=4 && localStorage.getItem('ice cream')=='yes' && ice_cream==false){
        msg4.innerHTML='Ice Cream';
        ice_cream=true;
        total+=1.99;
        price4.innerHTML="1.99$";
    }
    else if(Orders>=4 && localStorage.getItem('taco')=='yes' && taco==false){
        msg4.innerHTML='Taco';
        taco=true;
        total+=2.99;
        price4.innerHTML="2.99$";
    }
    if(Orders>=5 && localStorage.getItem('hamburger')=='yes' && hamburger==false){
        msg5.innerHTML='Hamburger';
        hamburger=true;
        total+=2.99;
        price5.innerHTML="2.99$";
    }
    else if(Orders>=5 && localStorage.getItem('fries')=='yes' && fries==false){
        msg5.innerHTML='Fries';        
        fries=true;
        total+=1.99;
        price5.innerHTML="1.99$";
    }
    else if(Orders>=5 && localStorage.getItem('chicken nuggets')=='yes' && chicken_nuggets==false){
        msg5.innerHTML='Chicken Nuggets';
        chicken_nuggets=true;
        total+=3.99;
        price5.innerHTML="3.99$";
    }
    else if(Orders>=5 && localStorage.getItem('hot dog')=='yes' && hot_dog==false){
        msg5.innerHTML='Hot Dog';
        hot_dog=true;
        total+=2.99;
        price5.innerHTML="2.99$";
    }
    else if(Orders>=5 && localStorage.getItem('onion rings')=='yes' && onion_rings==false){
        msg5.innerHTML='Onion Rings';
        onion_rings=true;
        total+=0.99;
        price5.innerHTML="0.99$";
    }
    else if(Orders>=5 && localStorage.getItem('pizza')=='yes' && pizza==false){
        msg5.innerHTML='Pizza';
        pizza=true;
        total+=3.99;
        price5.innerHTML="3.99$";
    }
    else if(Orders>=5 && localStorage.getItem('ice cream')=='yes' && ice_cream==false){
        msg5.innerHTML='Ice Cream';
        ice_cream=true;
        total+=1.99;
        price5.innerHTML="1.99$";
    }
    else if(Orders>=5 && localStorage.getItem('taco')=='yes' && taco==false){
        msg5.innerHTML='Taco';
        taco=true;
        total+=2.99;
        price5.innerHTML="2.99$";
    }
    if(Orders>=6 && localStorage.getItem('hamburger')=='yes' && hamburger==false){
        msg6.innerHTML='Hamburger';
        hamburger=true;
        total+=2.99;
        price6.innerHTML="2.99$";
    }
    else if(Orders>=6 && localStorage.getItem('fries')=='yes' && fries==false){
        msg6.innerHTML='Fries';
        fries=true;       
         total+=1.99;
         price6.innerHTML="1.99$";
    }
    else if(Orders>=6 && localStorage.getItem('chicken nuggets')=='yes' && chicken_nuggets==false){
        msg6.innerHTML='Chicken Nuggets';
        chicken_nuggets=true;
        total+=3.99;
        price6.innerHTML="3.99$";
    }
    else if(Orders>=6 && localStorage.getItem('hot dog')=='yes' && hot_dog==false){
        msg6.innerHTML='Hot Dog';
        hot_dog=true;
        total+=2.99;
        price6.innerHTML="2.99$";
    }
    else if(Orders>=6 && localStorage.getItem('onion rings')=='yes' && onion_rings==false){
        msg6.innerHTML='Onion Rings';
        onion_rings=true;
        total+=0.99;
        price6.innerHTML="0.99$";
    }
    else if(Orders>=6 && localStorage.getItem('pizza')=='yes' && pizza==false){
        msg6.innerHTML='Pizza';
        pizza=true;
        total+=3.99;
        price6.innerHTML="3.99$";
    }
    else if(Orders>=6 && localStorage.getItem('ice cream')=='yes' && ice_cream==false){
        msg6.innerHTML='Ice Cream';
        ice_cream=true;
        total+=1.99;
        price6.innerHTML="1.99$";
    }
    else if(Orders>=6 && localStorage.getItem('taco')=='yes' && taco==false){
        msg6.innerHTML='Taco';
        taco=true;
        total+=2.99;
        price6.innerHTML="2.99$";
    }
    if(Orders>=7 && localStorage.getItem('hamburger')=='yes' && hamburger==false){
        msg7.innerHTML='Hamburger';
        hamburger=true;
        total+=2.99;
        price7.innerHTML="2.99$";
    }
    else if(Orders>=7 && localStorage.getItem('fries')=='yes' && fries==false){
        msg7.innerHTML='Fries';
        fries=true;
        total+=1.99;   
        price7.innerHTML="1.99$";
    }
    else if(Orders>=7 && localStorage.getItem('chicken nuggets')=='yes' && chicken_nuggets==false){
        msg7.innerHTML='Chicken Nuggets';
        chicken_nuggets=true;
        total+=3.99;
        price7.innerHTML="3.99$";
    }
    else if(Orders>=7 && localStorage.getItem('hot dog')=='yes' && hot_dog==false){
        msg7.innerHTML='Hot Dog';
        hot_dog=true;
        total+=2.99;
        price7.innerHTML="2.99$";
    }
    else if(Orders>=7 && localStorage.getItem('onion rings')=='yes' && onion_rings==false){
        msg7.innerHTML='Onion Rings';
        onion_rings=true;
        total+=0.99;
        price7.innerHTML="0.99$";
    }
    else if(Orders>=7 && localStorage.getItem('pizza')=='yes' && pizza==false){
        msg7.innerHTML='Pizza';
        pizza=true;
        total+=3.99;
        price7.innerHTML="3.99$";
    }
    else if(Orders>=7 && localStorage.getItem('ice cream')=='yes' && ice_cream==false){
        msg7.innerHTML='Ice Cream';
        ice_cream=true;
        total+=1.99;
        price7.innerHTML="1.99$";
    }
    else if(Orders>=7 && localStorage.getItem('taco')=='yes' && taco==false){
        msg7.innerHTML='Taco';
        taco=true;
        total+=2.99;
        price7.innerHTML="2.99$";
    }
    if(Orders>=8 && localStorage.getItem('hamburger')=='yes' && hamburger==false){
        msg8.innerHTML='Hamburger';
        hamburger=true;
        total+=2.99;
        price8.innerHTML="2.99$";
    }
    else if(Orders>=8 && localStorage.getItem('fries')=='yes' && fries==false){
        msg8.innerHTML='Fries';
        fries=true;
        total+=1.99;
        price8.innerHTML="1.99$";
    }    
    else if(Orders>=8 && localStorage.getItem('chicken nuggets')=='yes' && chicken_nuggets==false){
        msg8.innerHTML='Chicken Nuggets';
        chicken_nuggets=true;
        total+=3.99;
        price8.innerHTML="3.99$";
    }
    else if(Orders>=8 && localStorage.getItem('hot dog')=='yes' && hot_dog==false){
        msg8.innerHTML='Hot Dog';
        hot_dog=true;
        total+=2.99;
        price8.innerHTML="2.99$";
    }
    else if(Orders>=8 && localStorage.getItem('onion rings')=='yes' && onion_rings==false){
        msg8.innerHTML='Onion Rings';
        onion_rings=true;
        total+=0.99;
        price8.innerHTML="0.99$";
    }
    else if(Orders>=8 && localStorage.getItem('pizza')=='yes' && pizza==false){
        msg8.innerHTML='Pizza';
        pizza=true;
        total+=3.99;
        price8.innerHTML="3.99$";
    }
    else if(Orders>=8 && localStorage.getItem('ice cream')=='yes' && ice_cream==false){
        msg8.innerHTML='Ice Cream';
        ice_cream=true;
        total+=1.99;
        price8.innerHTML="1.99$";
    }
    else if(Orders>=8 && localStorage.getItem('taco')=='yes' && taco==false){
        msg8.innerHTML='Taco';
        taco=true;
        total+=2.99;
        price8.innerHTML="2.99$";
    }
}
else{
check();
alert('You need to register or login before purchasing');
}
}
display();

var sum=document.getElementById('sum');
sum.innerHTML=total+'$';
function buy(){
    if(total>0.00){
        alert('Selected products will be there soon');
    }
    else{
        alert('Select a product before pressing this button');
    }
}
function check(){
if(msg8.innerHTML==''){
    cancel8.style.visibility='hidden';
    price8.innerHTML="";
}
if(msg7.innerHTML==''){
    cancel7.style.visibility='hidden';
    price7.innerHTML="";
}
if(msg6.innerHTML==''){
    cancel6.style.visibility='hidden';
    price6.innerHTML="";
}
if(msg5.innerHTML==''){
    cancel5.style.visibility='hidden';
    price5.innerHTML="";
}
if(msg4.innerHTML==''){
    cancel4.style.visibility='hidden';
    price4.innerHTML="";
}
if(msg3.innerHTML==''){
    cancel3.style.visibility='hidden';
    price3.innerHTML="";
}
if(msg2.innerHTML==''){
    cancel2.style.visibility='hidden';
    price2.innerHTML="";
}
if(msg1.innerHTML==''){
    cancel1.style.visibility='hidden';
    price1.innerHTML="";
}
}
check();