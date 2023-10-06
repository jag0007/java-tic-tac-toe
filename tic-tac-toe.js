const Gameboard = (() => {
  let gameboard = new Array(9).fill("x");

  const board_state = () => {
    return gameboard;
  }

  return {board_state};
})();

const TicTacToe = (() => {
  const print_instruction = (player) => {
    console.log("hello, " + player.name);
  } 

  const play = (gameboard, view, player1, player2) => {
    print_instruction(player1);
    print_instruction(player2);
    view.show_board(gameboard.board_state());
  }

  return {play}; 
})();

const PlayerFactory = (name) => {
  return {name};
}

const TicTacToeView = (() => {

  const show_board = (gameboard) => {
    const spaces = document.getElementsByClassName("gamespace");
    for (i = 0; i < spaces.length; i++) {
      spaces[i].innerHTML = gameboard[i];
    }
  }

  return {show_board}
}) ();

TicTacToe.play(Gameboard, TicTacToeView, PlayerFactory("bob"), PlayerFactory("bill"));
