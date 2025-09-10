import Ship from "../src/ship.js";
import Gameboard from "../src/gameboard.js";
import Player from "../src/player.js";
import Game from "../src/game.js";

test("Ship gets hit and sinks", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("Gameboard places and hits ship", () => {
  const board = new Gameboard();
  const ship = board.placeShip(0, 0, 2);
  expect(board.receiveAttack(0, 0)).toBe("hit");
  expect(ship.hits).toBe(1);
  expect(board.receiveAttack(5, 5)).toBe("miss");
  expect(board.missedShots.length).toBe(1);
});

test("All ships sunk check", () => {
  const board = new Gameboard();
  const ship = board.placeShip(0, 0, 1);
  board.receiveAttack(0, 0);
  expect(board.allShipsSunk()).toBe(true);
});

test("Player attacks enemy", () => {
  const player = new Player();
  const enemy = new Player();
  enemy.board.placeShip(0, 0, 1);
  expect(player.attack(enemy.board, 0, 0)).toBe("hit");
});

test("Computer makes valid moves", () => {
  const player = new Player();
  const enemy = new Player();
  const result = enemy.computerMove(player.board);
  expect(["hit", "miss"]).toContain(result);
});

test("Game ends when all ships sunk", () => {
  const game = new Game();
  game.computer.board.placeShip(0, 0, 1);
  game.computer.board.receiveAttack(0, 0);
  expect(game.isGameOver()).toBe(true);
});
