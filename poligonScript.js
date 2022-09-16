var playground = document.querySelector('.playground')

var player = document.createElement('div');
player.classList.add('player');
var position = {
    left: '45vh',
    top: '45vh',
    moveRight: function() {
        this.left = String(Number(this.left.slice(0, -2)) + 5) + 'vh';
    },
    moveLeft: function() {
        this.left = String(Number(this.left.slice(0, -2)) - 5) + 'vh';
    },
    moveUp: function() {
        this.top = String(Number(this.top.slice(0, -2)) - 5) + 'vh';
    },
    moveDown: function() {
        this.top = String(Number(this.top.slice(0, -2)) + 5) + 'vh';
    }
}
player.style.left = position.left;
player.style.top = position.top;
playground.appendChild(player);



document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 68) {
        if (player.style.left != '95vh') {
            position.moveRight();
        } else {
            position.left = '0vh';
        }
        player.style.left = position.left;
    } else if (evt.keyCode === 65) {
        if (player.style.left != '0vh') {
            position.moveLeft();
        } else {
            position.left = '95vh';
        }
        player.style.left = position.left;
    } else if (evt.keyCode === 87) {
        if (player.style.top != '0vh') {
            position.moveUp();
        } else {
            position.top = '95vh';
        }
        player.style.top = position.top;
    } else if (evt.keyCode === 83) {
        if (player.style.top != '95vh') {
            position.moveDown();
        } else {
            position.top = '0vh';
        }
        player.style.top = position.top;
    }
});