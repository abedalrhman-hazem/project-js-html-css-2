let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let mountains3 =document.getElementById('mountains3');
let mountains4 =document.getElementById('mountains4');
let rivrr =document.getElementById('rivrr');
let boat =document.getElementById('boat');
let mountains7 =document.getElementById('mountains7');
let nouvil =document.querySelector('.nouvil');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value +'px';
    moon.style.top = value * 4 +'px';
    mountains3.style.top = value * 2 +'px';
    mountains4.style.top = value * 1.2 +'px';
    rivrr.style.top = value  +'px';
    boat.style.left = value  +'px';
    boat.style.left = value * 3 +'px';
    nouvil.style.fontSize = value +'px';
    if (scrollY >= 70){
        nouvil.style.fontSize = 70 +'px';
        nouvil.style.position = 'fixed';
        if(scrollY >= 378){
        nouvil.style.display ='none';
        }else{
            nouvil.style.display ='block';
        }
        if(scrollY >=91){
            document.querySelector('.main').style.background = 'linear-gradient(#21e7db,#8e2eba)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#2b2525,#8e2eba)'
        }
    }    
}