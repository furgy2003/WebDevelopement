import checkBoard from "./checkBoard";

function minimax(board, player) {
  const win = checkBoard(board);
  if (win !== 2) {
    return win;
  }
  var scores = [];
  for (var i = 0; i < 9; i++) {
    // if the current space in the board is not occupy
    if (!board[i]) {
      board[i] = player;
      scores.push(minimax(board, player * -1));
      board[i] = null;
    }
  }
  if (player === -1) {
    return Math.min(...scores);
  } else {
    return Math.max(...scores);
  }
}

export default function aiTurn(board) {
  var pos = -1;
  var max_score = -2;
  for (var i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = 1;
      var score = minimax(board, -1);
      if (score > max_score) {
        pos = i;
        max_score = score;
      }
      board[i] = null;
    }
  }
  return pos;
}
