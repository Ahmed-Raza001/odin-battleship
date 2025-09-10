import Gameboard from "./gameboard.js";

export default class Player {
  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.board = new Gameboard();
    this.moves = [];
  }

  attack(enemyBoard, x, y) {
    return enemyBoard.receiveAttack(x, y);
  }

  computerMove(enemyBoard) {
    let x, y;
    do {
      x = Math.floor(Math.random() * enemyBoard.size);
      y = Math.floor(Math.random() * enemyBoard.size);
    } while (this.moves.some(m => m[0] === x && m[1] === y));

    this.moves.push([x, y]);
    return this.attack(enemyBoard, x, y);
  }
}
