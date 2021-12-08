console.log("hello");
function randomNum() {
    return Math.floor(Math.random() * 6 + 1);
}



let player1Score;
let player2Score;
let player1Img = document.querySelector('#player1Img');
let player2Img = document.querySelector('#player2Img');
let showScoreSpan1 = document.querySelector('#player1Score');
let showScoreSpan2 = document.querySelector('#player2Score');
let instructor = document.querySelector('#instructor');
let showTheResultingScore = document.querySelector('#result');
let resetBtn = document.querySelector('#reset');



function player1Turn() {
    instructor.innerText = 'Player 1 turn';
    player1Img.addEventListener('click', (event) => {
        player1Score = randomNum();
        showScoreSpan1.innerText = player1Score;
        changeDiceImg(player1Img,player1Score);
        player2Turn();
    }, {once : true});
}


function player2Turn() {
    instructor.innerText = 'Player 2 turn';
    player2Img.addEventListener('click', () => {
        player2Score = randomNum();
        showScoreSpan2.innerText = player2Score;
        changeDiceImg(player2Img,player2Score);
        whoWon();
    }, {once : true});
}

function changeDiceImg(playerImg,score){
    if(score===1){
        playerImg.src = '1.jpg';
    }else if(score===2){
        playerImg.src = '2.jpg';
    }else if(score===3){
        playerImg.src = '3.jpg';
    }else if(score===4){
        playerImg.src = '4.jpg';
    }else if(score===5){
        playerImg.src = '5.jpg';
    }else if(score===6){
        playerImg.src = '6.jpg';
    }
}



function whoWon(){
    if (player1Score > player2Score) {
        console.log('player 1 won');
        showTheResultingScore.innerText ='Player 1 won';

    } else if (player1Score == player2Score) {
        console.log('It\'s a draw');
        showTheResultingScore.innerText ='It\'s a draw';
    }
    else {
        console.log('player 2 won');
        showTheResultingScore.innerText ='Player 2 won';
    }
    
}

player1Turn();

resetBtn.addEventListener('click',()=>{
    location.reload();
});

