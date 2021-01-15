let knightPosition = [0, 0]
let Observer = null

function emitChange() {
    Observer(knightPosition)
}

export function Observe(o) {
    if (Observer) {
        throw new Error("multiple Observer implemented!");
    }
    Observer = o;
    emitChange();
}

export function moveKnight(toX, toY) {
    knightPosition = [toX, toY];
    emitChange();
}
