const ba = document.getElementById('ba');
const ros = document.getElementById('ros');
const punta = document.getElementById('punta');
const montevideo = document.getElementById('montevideo');
const brasilia = document.getElementById('brasilia');
const rio = document.getElementById('rio');
const bogota = document.getElementById('bogota');
const medellin = document.getElementById('medellin');
const span = document.getElementById('score');
const correctAnswers = document.getElementById('correct');

const button = document.querySelector('#check');
let correct = [];
let score = 0;

ba.addEventListener('click', () =>{
   score+= 25;
   ba.remove();
   ros.remove();
   correct.push('Buenos Aires')
})

montevideo.addEventListener('click', () =>{
    score+= 25;
    montevideo.remove();
    punta.remove();
    correct.push('Montevideo')
})

rio.addEventListener('click', () =>{
     score+= 25;
     rio.remove();
     brasilia.remove();
     correct.push('Rio de Janeiro')
})

bogota.addEventListener('click', () =>{
     score+= 25;
     bogota.remove();
     medellin.remove();
     correct.push('Bogota')
})

ros.addEventListener('click', () =>{
    
    ba.remove();
    ros.remove();
 })

punta.addEventListener('click', () =>{
    
    montevideo.remove();
    punta.remove();
})

brasilia.addEventListener('click', () =>{
    
    rio.remove();
    brasilia.remove();
})

medellin.addEventListener('click', () =>{
    
    bogota.remove();
    medellin.remove();
})

button.addEventListener('click', () => {
    if( score === 100 ){
        span.innerHTML = "100%"
    }
    else if( score === 75 ){
        span.innerHTML = "75%"
    }else if( score === 50 ){
        span.innerHTML = "50%"
    }else if( score === 25 ){
        span.innerHTML = "25%"
    }
    else{
        span.innerHTML = "0%"
    }
    correctAnswers.innerHTML = `<li>Your correct answers were: ${correct.join(' - ')}`;
})















