let scores = 20;
let highscore = 0;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMesaage = function (message){
     document.querySelector('.message').textContent = message;
}


document.querySelector('.btn.check').addEventListener('click',function(){
    const guess = Number (document.querySelector('.guess').value)
    console.log( guess)
    
// when score is too high
    if (!guess){
        // document.querySelector('.message').textContent='⛔No number'
        displayMesaage('⛔No number')
    }else if (guess === secretNumber) {
        // document.querySelector('.message').textContent='🙂👍Correct Number'
        displayMesaage('🙂👍Correct Number')
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('body').style.backgroundColor='blue'
        document.querySelector('.number').style.width= '30rem'
        
        if(scores > highscore) {
            highscore =scores;
            document.querySelector('.highscore').textContent= highscore
        }

    }
    else if(guess !== secretNumber){
         if(scores>=1){
        // document.querySelector('.message').textContent=
        // guess > secretNumber? '📈Too  high': '📈Too  Low'
        displayMesaage(guess > secretNumber? '📈Too  high': '📈Too  Low')
        scores--; 
        document.querySelector('.score').textContent=scores;
        }else{
            //  document.querySelector('.message').textContent='😢🤦‍♀️ You Lost the Game'
            displayMesaage('😢🤦‍♀️ You Lost the Game' )
             document.querySelector('.score').textContent=0;
        }
    }

    document.querySelector(".btn.again").addEventListener('click',function() {
        const intial = 0;
         document.querySelector('.number').textContent = intial
                 document.querySelector('.score').textContent=intial;
                         document.querySelector('body').style.backgroundColor='#4dbd72ff'

    })

    
   
})

