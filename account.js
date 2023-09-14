var register=document.getElementById('button1');
var login=document.getElementById('button2');
var Register=document.getElementById('register');
var Login=document.getElementById('login');
var logout=document.getElementById('logout');
var delete_button=document.getElementById('delete');

register.addEventListener('click', function(){
    document.getElementById('Register').style.visibility='visible';
    document.getElementById('select').style.visibility='hidden';
})
login.addEventListener('click', function(){
    document.getElementById('Login').style.visibility='visible';
    document.getElementById('select').style.visibility='hidden';

})

Register.addEventListener('click', function(){
    var username1=document.getElementById('userName1').value;
    var password1=document.getElementById('password1').value;
    localStorage.setItem('username', username1.toString());
    localStorage.setItem('password', password1.toString());
    document.write('Registered succesfully');
    localStorage.setItem('isLogged', true)
})
Login.addEventListener('click', function(){
    let username2=document.getElementById('userName2').value;
    let password2=document.getElementById('password2').value;
    let Password=localStorage.getItem("password");
    let Username=localStorage.getItem("username");
    if(username2==Username && password2==Password){
        localStorage.setItem('isLogged', true)
        document.write('Logged succesfully');
    }
})

logout.addEventListener('click', function(){
    document.write('Logged out succesfully');
    localStorage.setItem('isLogged', false);
})

if(localStorage.getItem('isLogged')=='false'){
    logout.style.visibility='hidden';
    delete_button.style.visibility='hidden';
}

if(localStorage.getItem('isLogged')=='true'){
    register.style.visibility='hidden';
    login.style.visibility='hidden';
}

delete_button.addEventListener('click', function(){
    document.write('Account deleted succesfully');
    localStorage.setItem('isLogged', false);
    localStorage.removeItem('username');
    localStorage.removeItem('password');
})