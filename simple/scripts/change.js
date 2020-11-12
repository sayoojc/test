/* global document */
var nn="Defult"
nn = window.prompt("Enter name:");
var hd=document.querySelector('h1');
hd.textContent = "Hello "+nn+"...";
 var a=document.querySelector('img');
 a.onclick = function()
 {
    var ims= a.getAttribute('src');
    if(ims=="images/me.jpg"){
        a.setAttribute('src','images/me2.jpg');
    }
    else{
        a.setAttribute('src','images/me.jpg');
    }
 }

 //Code for welcome messgae
 var bu=document.querySelector('button');
bu.onclick = function(){
    nn = window.prompt("Enter name:");
    if(nn==null){
        nn='Default';
    }
    hd.textContent = "Hello "+nn+"...";
}