const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const startButton = document.querySelector('#startButton')
const pauseButton = document.querySelector('#pauseButton')
const continueButton = document.querySelector('#continueButton')
const resetButton = document.querySelector('#reseteButton')
const musicRelax = new Audio('/audios/relax-music.mp3')
const buttonMusic = document.querySelector('#alternar-musica')

let minutos = 0;
let segundos = 0;
let interval;
let isPaused = false;
musicRelax.loop = true

startButton.addEventListener('click', iniciar)
pauseButton.addEventListener('click', pausar)
continueButton.addEventListener('click', continuar)
resetButton.addEventListener('click', resetar)


buttonMusic.addEventListener('change', ()=>{
    if(musicRelax.paused){
        musicRelax.play();
    }else{
        musicRelax.pause();
    }
})

function iniciar(){
    interval = setInterval(()=>{
        if(!isPaused){
            segundos++
        }
        if(segundos === 60){
            minutos++
            segundos = 0
        }

        minutes.innerHTML = formatarTime(minutos)
        seconds.innerHTML = formatarTime(segundos)
        avisarDescanso()

    }, 1000)
    startButton.style.display = 'none'
    pauseButton.style.display = 'block'

}

function formatarTime(time){
    return time < 10 ? `0${time}` : time;
}

function pausar(){
    isPaused = true;
    pauseButton.style.display = 'none'
    continueButton.style.display = 'block'
}

function continuar(){
    isPaused = false;
    pauseButton.style.display = 'block'
    continueButton.style.display = 'none'
}

function resetar() {
    clearInterval(interval);    
    minutos = 0;
    segundos = 0;
    iniciar();
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    continueButton.style.display = 'none'
}

