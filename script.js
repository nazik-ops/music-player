const sound1=new Audio('./sound1.mp3');
const sound2= new Audio('./sound2.mp3')
const sound3= new Audio('./sound3.mp3')

let btn_play1=document.getElementById('Play1')
let btn_stop1=document.getElementById('Stop1')
let btn_play2=document.getElementById('play2')
let btn_stop2=document.getElementById('stop2')
let btn_play3=document.getElementById('Play3')
let btn_stop3=document.getElementById('Stop3')

btn_play1.addEventListener('click', function () {
        sound1.play().catch(function(){})
    }
)
btn_stop1.addEventListener('click', function () {
        sound1.pause()
        sound1.currentTime=0
    }
)

btn_play2.addEventListener('click', function () {
        sound2.play().catch(function(){})
    }
)
btn_stop2.addEventListener('click', function () {
        sound2.pause()
        sound2.currentTime=0
    }
)

btn_play3.addEventListener('click', function () {
        sound3.play().catch(function(){})
    }
)
btn_stop3.addEventListener('click', function () {
        sound3.pause()
        sound3.currentTime=0
    }
)