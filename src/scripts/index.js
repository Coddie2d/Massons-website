
import '../styles/index.scss'



audio.volume = 1;
    let str = ''
    let state = true;
    let on = document.querySelector('.fa-volume-high');
    let off = document.querySelector('.fa-volume-xmark');

on.addEventListener('click', function(){
    state = !state
    on.classList.toggle('hidden')
    off.classList.toggle('hidden')
})
 
off.addEventListener('click', function(){
    state = !state
    on.classList.toggle('hidden')
    off.classList.toggle('hidden')
})


state ? str = 'Sound: On' : 'Sound: Off';
if(state){
    document.querySelector('.nav__sound').insertAdjacentHTML('beforeend',str)
}
    



