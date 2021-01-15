import React from 'react';
import Knight from "../Knight";
import Squire from "../Squire";
import { moveKnight } from "../Gamer";

const RenderSquare = (i, [KnightX, KnightY]) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const isKnightHere = x === KnightX && y === KnightY;
    const piece = isKnightHere ? <Knight /> : null;

    return (
        <div key={i} onClick={() =>clickHandler(x, y)} style=
            {{
                width: '12.5%',
                height: '12.5%'
            }}
        >
            <Squire black={black}>{piece}</Squire>
        </div >
    )
}

function clickHandler(x, y) {
    moveKnight(x, y)
}
export default RenderSquare;
