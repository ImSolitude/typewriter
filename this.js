/*global console, alert, confirm, prompt*/
var letterE = document.getElementById('letter'),
    messageE = document.getElementById('message'),
    sound = document.getElementById('myAudio'),
    p = document.getElementsByTagName('p');
sound.volume = 0.3;



function updateLetter(keyCode, letter) {
    'use strict';
    if (keyCode === 8) {
        messageE.innerHTML = messageE.innerHTML.slice(0, -1);
    } else if (keyCode === 13) {
        messageE.innerHTML  += '<br>';
    } else if (keyCode === 32) {
        messageE.innerHTML  += ' ';
    } else {
        messageE.innerHTML += letter;
    }
}
function once() {
    'use strict';
    messageE.textContent = '';
    messageE.removeEventListener('click', once);
}

document.addEventListener('keydown', function (e) {
    'use strict';
    if (e.keyCode === 8) {
        updateLetter(e.keyCode);
    }
});
document.addEventListener("keypress", function (event) {
    'use strict';
    if (sound.paused) {
        sound.play();
    } else {
        sound.currentTime = 0;
    }
    console.log(event.keyCode);
    var letter = String.fromCharCode(event.keyCode);
    console.log(letter);
    letterE.textContent = letter;
    messageE.click();
    updateLetter(event.keyCode, letter);
});

messageE.addEventListener('click', once);

p[0].onclick = function() {
    'use strict';
    sound.volume = 0;
};