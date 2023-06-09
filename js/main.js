let number = 245;
let ballPosition = 376;
let direction = 'rightUp';
let points = 0;
let playerName = document.querySelector('.playerName')

for (x = 0; x < 156; x++) {
    document.querySelector(".main-wrapper").innerHTML += `<div class='div i${x}'></div>`;
    document.querySelector(`.i${x}`).style.backgroundColor = 'white';
}
for (x = 0; x < 260; x++) {
    if (x + 156 >= 390 && x + 156 <= 415) {
        document.querySelector(".main-wrapper").innerHTML += `<div class='black-box PL${x} blue i${x + 156}'></div>`;
    } else {
        document.querySelector(".main-wrapper").innerHTML += `<div class='black-box i${x + 156}'></div>`;
    }
}

const blueSquares = document.querySelectorAll('.blue');

function changeBlueSquare() {
    blueSquares.forEach(function (data) { data.style.backgroundColor = 'black'; })
    for (i = 0; i < 4; i++) {
        const square = document.querySelector(`.PL${number + i}`);
        square.style.backgroundColor = 'red';

    }
}

function myName() {
    let text;
    let person = prompt('Please enter your name:', 'Name');
    if (person == null || person == '') {
      text = 'Player dont wanna put a name.';
    } else {
      text = '' + person;
    }
    document.querySelector('.playerName').innerHTML = text;
  }

function keydown(event) {
    if (event.key == 'ArrowLeft') {
        if (number != 234) {
            number -= 1;
        }
        changeBlueSquare();
    } else if (event.key == 'ArrowRight') {
        if (number != 256) {
            number += 1;
        }
        changeBlueSquare();
    }
}

function ballMove() {
    if (direction == 'rightUp') {
        // white above
        if (document.querySelector(`.i${ballPosition - 26}`).style.backgroundColor == 'white') {
            document.querySelector(`.i${ballPosition - 26}`).style.backgroundColor = 'black';
            direction = 'rightDown';
            ballMove();
            addpoints();
            // wall right
        } else if ((ballPosition - 25) % 26 == 0) {
            direction = 'leftUp';
            ballMove();

            // white diagonal
        } else if (document.querySelector(`.i${ballPosition - 25}`).style.backgroundColor == 'white') {
            document.querySelector(`.i${ballPosition - 25}`).style.backgroundColor = 'black';
            direction = 'leftDown';
            addpoints();
            ballMove();
        }
        else {
            document.querySelector(`.i${ballPosition}`).style.backgroundColor = 'black';
            ballPosition -= 25;
            document.querySelector(`.i${ballPosition}`).style.backgroundColor = 'blue';
        }
    } else if (direction == 'rightDown') {
        // wall right
        if ((ballPosition + 27) % 26 == 0) {
            direction = 'leftDown';
            ballMove();
            // platform down
        } else if (document.querySelector(`.i${ballPosition + 26}`).style.backgroundColor == 'red') {
            direction = 'rightUp';
            ballMove();
            // platform diagonal
        } else if (document.querySelector(`.i${ballPosition + 27}`).style.backgroundColor == 'red') {
            direction = 'leftUp';
            ballMove();
            // white down
        } else if (document.querySelector(`.i${ballPosition + 25}`).style.backgroundColor == 'white') {
            document.querySelector(`.i${ballPosition + 25}`).style.backgroundColor = 'black';
            direction = 'leftDown';
            ballMove();
            addpoints();
            // white down diagonal
        } else if (document.querySelector(`.i${ballPosition + 27}`).style.backgroundColor == 'white') {
            document.querySelector(`.i${ballPosition + 27}`).style.backgroundColor = 'black';
            direction = 'rightUp';
            ballMove();
            addpoints();
        } else {
            document.querySelector(`.i${ballPosition}`).style.backgroundColor = 'black';
            ballPosition += 27;
            document.querySelector(`.i${ballPosition}`).style.backgroundColor = 'blue';
        }
    } else if (direction == 'leftDown') {
        // platform down
        if (document.querySelector(`.i${ballPosition + 26}`).style.backgroundColor == 'red') {
            direction = 'leftUp';
            ballMove();
            // wall left
        } else if ((ballPosition + 25) % 26 == 25) {
            direction = 'rightDown';
            ballMove();
            // platform diagonal
        } else if (document.querySelector(`.i${ballPosition + 25}`).style.backgroundColor == 'red') {
            direction = 'leftUp';
            ballMove();
            // white down
        } else if (document.querySelector(`.i${ballPosition + 25}`).style.backgroundColor == 'white') {
            document.querySelector(`.i${ballPosition + 25}`).style.backgroundColor = 'black';
            direction = 'leftDown';
            ballMove();
            addpoints();
            // white down diagonal
        } else if (document.querySelector(`.i${ballPosition + 25}`).style.backgroundColor == 'white') {
            document.querySelector(`.i${ballPosition + 25}`).style.backgroundColor = 'black';
            direction = 'rightUp';
            ballMove();
            addpoints();
        } else {
            document.querySelector(`.i${ballPosition}`).style.backgroundColor = 'black';
            ballPosition += 25;
            document.querySelector(`.i${ballPosition}`).style.backgroundColor = 'blue';
        }
    } else if (direction == 'leftUp') {
        // white up
        if (document.querySelector(`.i${ballPosition - 26}`).style.backgroundColor == 'white') {
            document.querySelector(`.i${ballPosition - 26}`).style.backgroundColor = 'black';
            direction = 'leftDown';
            ballMove();
            addpoints();
            // white wall
        } else if ((ballPosition + 25) % 26 == 25) {
            direction = 'rightUp';
            ballMove();
            // white diagonal
        } else if (document.querySelector(`.i${ballPosition - 27}`).style.backgroundColor == 'white') {
            document.querySelector(`.i${ballPosition - 27}`).style.backgroundColor = 'black';
            direction = 'leftDown';
            addpoints();
            ballMove();
        } else {
            document.querySelector(`.i${ballPosition}`).style.backgroundColor = 'black';
            ballPosition -= 27;
            document.querySelector(`.i${ballPosition}`).style.backgroundColor = 'blue';
        }
    }
}

function addpoints() {
    points += 75;
    document.querySelector('.points').innerHTML = 'Points:' + ' ' + points;
}


document.addEventListener('keydown', keydown)
document.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowUp') {
        setInterval(ballMove, 150)
    }
})

changeBlueSquare();
myName();