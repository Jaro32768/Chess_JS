export function getLegalMovesK(position, aRookMoved, hRookMoved, kingMoved, kingAttacked) {
    // this array is showing if it is allowed to go there //
    let isLegal = [false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false];

    if (position % 8 > 0 && position / 8 > 0) isLegal[position - 9] = true;
    if (position / 8 > 0) isLegal[position - 8] = true;
    if (position % 8 < 7 && position / 8 > 0) isLegal[position - 7] = true;
    if (position % 8 < 7) isLegal[position + 1] = true;
    if (position % 8 < 7 && position / 8 < 7) isLegal[position + 9] = true;
    if (position / 8 < 7) isLegal[position + 8] = true;
    if (position % 8 > 0 && position / 8 < 7) isLegal[position + 7] = true;
    if (position % 8 > 0) isLegal[position - 1] = true;

    return isLegal;
}

function longCastle() {

}

function shortCastle() {

}