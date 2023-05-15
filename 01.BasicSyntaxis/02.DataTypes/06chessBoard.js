function chessBoard(input) {
  let chessboard = '<div class="chessboard">' + "\n";
  for (let i = 1; i <= input; i++) {
    chessboard += " ".repeat(2) + "<div>" + "\n";
    for (let j = 1; j <= input; j++) {
      if (i % 2 !== 0) {
        if (j % 2 === 0) {
          chessboard += " ".repeat(4) + '<span class="white"></span>' + "\n";
        } else {
          chessboard += " ".repeat(4) + '<span class="black"></span>' + "\n";
        }
      } else {
        if (j % 2 !== 0) {
          chessboard += " ".repeat(4) + '<span class="white"></span>' + "\n";
        } else {
          chessboard += " ".repeat(4) + '<span class="black"></span>' + "\n";
        }
      }
    }
    chessboard += " ".repeat(2) + "</div>" + "\n";
  }
  chessboard += "</div>";
  console.log(chessboard);
}
chessBoard(3);
