enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(direction: Direction) {
    // console.log(direction);
    return direction;
}

console.log(doSomething(Direction.Up));
console.log(doSomething(Direction.Down));
console.log(doSomething(Direction.Left));
console.log(doSomething(Direction.Right));
