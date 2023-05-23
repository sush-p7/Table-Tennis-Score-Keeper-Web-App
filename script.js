const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const reset = document.querySelector('#reset')
const playTo = document.querySelector('#playTo');

let P1Score =0;
let P2Score =0;
let winningScore = 4;
let isGameOver = false;
const p1Score = document.querySelector('#p1Score')
const p2Score = document.querySelector('#p2Score')

playTo.addEventListener('change', function(e) {
    winningScore = parseInt(this.value)
    RESET();
})
p1Button.addEventListener('click',(e)=>{
    if(!isGameOver){
        P1Score +=1;
        if(winningScore === P1Score){
            isGameOver = true;
            p1Score.classList.add('winner');
            p2Score.classList.add('losser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Score.textContent = P1Score;
    }
});
p2Button.addEventListener('click',(e)=>{
    if(!isGameOver){
        P2Score +=1;
        if(winningScore === P2Score){
            isGameOver = true;
            p2Score.classList.add('winner');
            p1Score.classList.add('losser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Score.textContent = P2Score;
    }
});
reset.addEventListener('click',RESET);
function RESET(e){
    p1Score.classList.remove('winner','losser');
    p2Score.classList.remove('winner','losser');
    p1Button.disabled = false;
            p2Button.disabled = false;
    isGameOver=false; P1Score = 0;P2Score = 0;p1Score.textContent = P1Score; p2Score.textContent = P2Score;}