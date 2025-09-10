import Ship from "./ship.js";

export default class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = Array.from({ length: size }, () => Array(size).fill(null));
    this.missedShots = [];
    this.ships = [];
  }

  placeShip(x, y, length, horizontal = true) {
    const ship = new Ship(length);
    this.ships.push(ship);

    for (let i = 0; i < length; i++) {
      if (horizontal) this.board[y][x + i] = ship;
      else this.board[y + i][x] = ship;
    }
    return ship;
  }

  receiveAttack(x, y) {
    const target = this.board[y][x];
    if (target instanceof Ship) {
      target.hit();
      return "hit";
    } else {
      this.missedShots.push([x, y]);
      return "miss";
    }
  }

  allShipsSunk() {
    return this.ships.every(ship => ship.isSunk());
  }
}
