let canvas, ctx;

function draw () {
    let time = (function () {
            let midnight = new Date();
            midnight.setHours(0);
            midnight.setMinutes(0);
            midnight.setSeconds(0);
            midnight.setMilliseconds(0);
            return Date.now() - midnight.getTime();
        })(),
        hours = time / (60 * 60 * 1000),
        minutes = hours * 60 % 60,
        seconds = minutes * 60 % 60,
        c = {x: canvas.width / 2, y: canvas.height / 2};

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineCap = 'round';

    secondHand();
    minuteHand();
    hourHand();
    face();

    function face () {
        // Border
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.arc(c.x, c.y, 140, 0, Math.PI * 2);
        ctx.stroke();

        // Dashes
        ctx.lineWidth = 3;
        for (let i = 0; i < 60; i++) {
            let r = 135,
                l = 5;
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
            if (i % 5 === 0)
                r -= l,
                l *= 2,
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
            let v = new Vector(r, Math.PI * 2 * (i / 60) - Math.PI / 2);
            ctx.beginPath();
            ctx.moveTo(v.getX() + c.x, v.getY() + c.y);
            v.setMag(r + l);
            ctx.lineTo(v.getX() + c.x, v.getY() + c.y);
            ctx.stroke();
        }

        // Numbers
        ctx.font = '18px Noto Sans';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let i = 1; i <= 12; i++) {
            let v = new Vector(113, Math.PI * 2 * (i / 12) - Math.PI / 2);
            ctx.fillText(i, v.getX() + c.x, v.getY() + c.y);
        }

        // Center button
        ctx.beginPath();
        ctx.arc(c.x, c.y, 3.75, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.5;
        ctx.fill();
        ctx.stroke();
    }

    function secondHand () {
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        let a = Math.PI * 2 * (seconds / 60) - Math.PI / 2;
        let v = new Vector(95, a);
        let v2 = new Vector(-20, a);
        ctx.moveTo(v2.getX() + c.x, v2.getY() + c.y);
        ctx.lineTo(v.getX() + c.x, v.getY() + c.y);
        ctx.stroke();
    }

    function minuteHand () {
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        let a = Math.PI * 2 * (minutes / 60) - Math.PI / 2;
        let v = new Vector(95, a);
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(v.getX() + c.x, v.getY() + c.y);
        ctx.stroke();
    }

    function hourHand () {
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        let a = Math.PI * 2 * (hours / 12) - Math.PI / 2;
        let v = new Vector(60, a);
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(v.getX() + c.x, v.getY() + c.y);
        ctx.stroke();
    }
}

function init () {
    canvas = document.getElementById('clock');
    canvas.width = canvas.height = 300;
    ctx = canvas.getContext('2d');

    setInterval(draw, 10);
}

init();
