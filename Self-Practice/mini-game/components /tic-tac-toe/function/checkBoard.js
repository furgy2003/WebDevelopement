// 1 for AI wins, -1 for human wins, 0 for tie, 2 for game not ended
export default function checkBoard(board) {
  const winning_pos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (var i = 0; i < winning_pos.length; i++) {
    if (
      board[winning_pos[i][0]] &&
      board[winning_pos[i][0]] === board[winning_pos[i][1]] &&
      board[winning_pos[i][0]] === board[winning_pos[i][2]]
    ) {
      return board[winning_pos[i][0]];
    }
  }
  if (
    board[0] &&
    board[1] &&
    board[2] &&
    board[3] &&
    board[4] &&
    board[5] &&
    board[6] &&
    board[7] &&
    board[8]
  )
    return 0;
  else return 2;
}
