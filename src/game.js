import Player from "./player.js";

export default class Game {
  constructor() {
    this.player = new Player(false);
    this.computer = new Player(true);
    this.currentTurn = this.player;
  }

  switchTurn() {
    this.currentTurn = this.currentTurn === this.player ? this.computer : this.player;
  }

  isGameOver() {
    return this.player.board.allShipsSunk() || this.computer.board.allShipsSunk();
  }
}
