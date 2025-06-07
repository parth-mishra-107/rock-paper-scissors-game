let score=JSON.parse(localStorage.getItem('score')) || 
        {
            wins: 0,
            losses: 0,
            ties: 0
        }; 
        updateScore();

        /**if(score === null) {
           score = {
            wins: 0,
            losses: 0,
            ties: 0
           }; 
        }**/

        /*const score = {
            wins: 0,
            losses: 0,
            ties: 0
        };we are using local storage to save the score value instead of normal variables*/

        function playGame(playerMove) {
            let comp = computerMove();
            let result = '';

            if (playerMove === 'Scissors') {
                if (comp === 'Rock') {
                    result = 'You Lose';
                } else if (comp === 'Paper') {
                    result = 'You Win';
                } else {
                    result = 'Tie';
                }

            } else if (playerMove === 'Paper') {
                if (comp === 'Rock') {
                    result = 'You Win';
                } else if (comp === 'Paper') {
                    result = 'Tie';
                } else {
                    result = 'You Lose';
                }

            } else if (playerMove === 'Rock') {
                if (comp === 'Rock') {
                    result = 'Tie';
                } else if (comp === 'Paper') {
                    result = 'You Lose';
                } else {
                    result = 'You Win';
                }
            }

            if(result ==='You Win'){
                score.wins += 1;
            } else if(result ==='You Lose'){
                score.losses += 1;
            }else if(result ==='Tie'){
                score.ties += 1;
            }

            localStorage.setItem('score',JSON.stringify(score));

            updateScore();

            document.querySelector('.js-result').innerHTML=result;

            document.querySelector('.js-moves').innerHTML=`You
        <img src="images/${playerMove}-emoji.png" class="move-icon"> :
        <img src="images/${comp}-emoji.png" class="move-icon">
        Computer`;
        }

        function updateScore(){
            document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        function computerMove() {
            let randn = Math.random();
            let comp = '';

            if (randn < 1/3) {
                comp = 'Rock';
            } else if (randn < 2/3) {
                comp = 'Paper';
            } else {
                comp = 'Scissors';
            }

            return comp;
        }