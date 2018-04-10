(function () {
    function Board(id, c, r) {
        if (this instanceof Board) {
            this.CANVAS = document.getElementById(id);
            this.CTX = this.CANVAS.getContext("2d");
            this.WIDTH = this.CANVAS.width || 0;
            this.HEIGHT = this.CANVAS.height || 0;
            this.COLS = c || 3;
            this.ROWS = r || 3;
            this.TILEWIDTH = (this.WIDTH / this.COLS);
            this.moveCount = 0;
            this.board = this.gameBoard(this.TILEWIDTH, this.COLS, this.ROWS);
            this.CANVAS.addEventListener('selectstart', function (e) {
                e.preventDefault();
                return false;
            }, false);
            this.winner = [false, ""];
            this.boardDisabled = false;
        } else {
            return new Board(id, c, r);
        }
    }
    Board.prototype.draw = function () {
        var ctx = this.CTX;
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#168dd9";
        // Draw column dividers
        for (var i = 1; i <= this.COLS - 1; i++) {
            ctx.moveTo(this.TILEWIDTH * i, 0);
            ctx.lineTo(this.TILEWIDTH * i, this.HEIGHT);
        }
        //Draw horizontal dividers
        for (var i = 1; i <= this.ROWS - 1; i++) {
            ctx.moveTo(0, this.TILEWIDTH * i);
            ctx.lineTo(this.WIDTH, this.TILEWIDTH * i);
        }
        ctx.stroke();
    };
    Board.prototype.gameBoard = function (t, c, r) {
        var b = [],
            count = 0;
        // Create gameboard array with the following data:
        // [x pos, y pos, tile count, empty string for move symbol (x or o)]
        for (var y = 0; y < r; y++) {
            for (var x = 0; x < c; x++) {
                b.push([x * t, y * t, count++, ""]);
            }
        }
        return b;
    };
    Board.prototype.updateScore = function () {
        if (supports_html5_storage()) {
            var p = sessionStorage.score || {
                    "score_x": 0,
                    "score_o": 0,
                    "score_tie": 0
                },
                w = "score_" + (this.winner[1][0] || "tie");
            if (sessionStorage.score) {
                p = JSON.parse(p);
            }
            p[w] ++;
            sessionStorage.score = JSON.stringify(p);
            this.updateScoreBoard();
        }
    };
    Board.prototype.updateScoreBoard = function () {
        if (supports_html5_storage()) {
            var p = sessionStorage.score ? JSON.parse(sessionStorage.score) : {
                "score_x": 0,
                "score_o": 0,
                "score_tie": 0
            };
            for (var s in p) {
                if (p.hasOwnProperty(s)) {
                    document.getElementById(s).innerHTML = p[s];
                }
            }
        }
    };
    Board.prototype.reset = function (x) {
        var timer = x || 4000;
        window.setTimeout(function () {
                window.location.reload(false);
            }, timer);
    };
    Board.prototype.resetScore = function () {
        if (supports_html5_storage()) {
            sessionStorage.removeItem("score");
            this.updateScoreBoard();
        }
    };
    Board.prototype.move = function (coor) {
        var width = this.TILEWIDTH,
            ctx = this.CTX,
            board = this.board,
            blen = board.length;
        //Loop through and find tile that click was detected on
        for (var i = 0; i < blen; i++) {
            if (coor.x > board[i][0] && coor.y > board[i][1] && coor.x < board[i][0] + width && coor.y < board[i][1] + width) {
                var x = board[i][0],
                    y = board[i][1],
                    validTile = board[i][3] === "";
                if (validTile) {
                    if (this.moveCount++ % 2 === 1) {
                        moveO(x, y, width, ctx);
                        board[i][3] = "o";
                    } else {
                        moveX(x, y, width, ctx);
                        board[i][3] = "x";
                    }
                }
                //Check board for winner if move count is 5 or more
                if (this.moveCount > 4) {
                    this.winner = checkWinner(board);
                    var w = this.winner,
                        winner = w[0],
                        shape = w[1][0],
                        boardDisabled = this.boardDisabled;
                    //If there is a winner, redraw winning tiles in red
                    if (winner && !boardDisabled) {
                        if (shape === "o") {
                            for (var j = 1; j < 4; j++) {
                                moveO(board[w[j][1]][0], board[w[j][1]]
                                    [1], width, ctx, "red", 5);
                            }
                        } else {
                            for (var j = 1; j < 4; j++) {
                                moveX(board[w[j][1]][0], board[w[j][1]]
                                    [1], width, ctx, "red", 5);
                            }
                        }
                    }
                    if ((winner || this.moveCount === board.length) && !boardDisabled) {
                        if (!winner) {
                            //If tie, redraw all moves in red
                            for (var j = 0; j < board.length; j++) {
                                if (board[j][3] === "o") {
                                    moveO(board[j][0], board[j][1], width, ctx, "red", 5);
                                } else {
                                    moveX(board[j][0], board[j][1], width, ctx, "red", 5);
                                }
                            }
                        }
                        this.boardDisabled = true;
                        this.updateScore();
                        this.reset();
                    }
                }
                break;
            }
        }
    };

    function checkWinner(mArr) {
        var winner = [false, ""];
        for (var i = 0; i < mArr.length; i++) {
            var hor = [],
                ver = [],
                diag = [];
            if (mArr[i][3] !== "") {
                //horizontal
                if (i % 3 === 0) {
                    for (var j = 0; j < 3; j++) {
                        hor.push([mArr[i + j][3], i + j]);
                    }
                    if (hor.length === 3) {
                        winner = isWinner(hor);
                        if (winner[0]) {
                            return winner;
                        }
                    }
                }
                //vertical && diag/anti diag
                if (i < 3) {
                    for (var j = 0; j + i < mArr.length; j += 3) {
                        ver.push([mArr[i + j][3], i + j]);
                    }
                    if (ver.length === 3) {
                        winner = isWinner(ver);
                        if (winner[0]) {
                            return winner;
                        }
                    }
                    if (i !== 1) {
                        for (var z = 0; z + i < mArr.length - i; z += (4 - i)) {
                            diag.push([mArr[i + z][3], i + z]);
                        }
                        if (diag.length === 3) {
                            winner = isWinner(diag);
                            if (winner[0]) {
                                return winner;
                            }
                        }
                    }
                }
            }
        }
        return winner;
    }

    function isWinner(arr) {
        arr.sort();
        var w = arr[0][0] && arr[0][0] === arr[arr.length - 1][0] ? [true].concat(arr) : [false, ""];
        return w;
    }

    function moveO(x, y, r, ctx, fill, lineW) {
        var x = x + r / 2,
            y = y + r / 2,
            r = r / 2 - (r * 0.15);
        ctx.beginPath();
        ctx.lineWidth = lineW || 3;
        ctx.strokeStyle = fill || "#333";
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function moveX(x, y, w, ctx, fill, lineW) {
        var pad = w * 0.15,
            lineCoor = [
                [
                    [x + pad, y + pad], //line 1 start
                    [x + w - pad, y + w - pad] //line 1 end
                ],
                [
                    [x + pad, y + w - pad], //line 2 start
                    [x + w - pad, y + pad] //line 2 end
                ]
            ];
        ctx.beginPath();
        ctx.lineWidth = lineW || 3;
        ctx.strokeStyle = fill || "#333";
        for (var i = 0; i < 2; i++) {
            ctx.moveTo(lineCoor[i][0][0], lineCoor[i][0][1]);
            ctx.lineTo(lineCoor[i][1][0], lineCoor[i][1][1]);
        }
        ctx.stroke();
    }

    function clickTouch(e) {
        var coor = b.CANVAS.relMouseCoords(e);
        if (!b.winner[0]) {
            b.move(coor);
        }
    }

    function clickTouchReset(e) {
            var target = e.target.id;
            if (target === "resetScore" && confirm("Are you sure you want to reset the score?")) {
                b.resetScore();
            } else if (target === "resetGame") {
                b.reset(1);
            }
        }
        // Initialize Game
    var b = new Board("game", 3, 3),
        resetcon = document.getElementById("reset");
    b.draw();
    b.updateScoreBoard();
    //Add event listeners for click or touch
    window.addEventListener("click", clickTouch, false);
    window.addEventListener("touchstart", clickTouch, false);
    resetcon.addEventListener("click", clickTouchReset, false);
    resetcon.addEventListener("touchstart", clickTouchReset, false);
})();
/*****
Get Mouse click coordinates within canvas
Modified to include touch events
Source: http://stackoverflow.com/a/9961416
******/
HTMLCanvasElement.prototype.relMouseCoords = function (event) {
    var totalOffsetX = 0,
        totalOffsetY = 0,
        canvasX = 0,
        canvasY = 0,
        touch = event.touches,
        currentElement = this;
    do {
        totalOffsetX += currentElement.offsetLeft;
        totalOffsetY += currentElement.offsetTop;
    }
    while (currentElement = currentElement.offsetParent)
    canvasX = (touch ? touch[0].pageX : event.pageX) - totalOffsetX;
    canvasY = (touch ? touch[0].pageY : event.pageY) - totalOffsetY;
    canvasX = Math.round(canvasX * (this.width / this.offsetWidth));
    canvasY = Math.round(canvasY * (this.height / this.offsetHeight));
    return {
        x: canvasX,
        y: canvasY
    }
}

function supports_html5_storage() {
    try {
        return 'sessionStorage' in window && window.sessionStorage !== null;
    } catch (e) {
        return false;
    }
}
