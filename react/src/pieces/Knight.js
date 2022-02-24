export function getLegalMovesN(position) {
    // this array is showing if it is allowed to go there //
    let isLegal = [false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false];

    if (position % 8 > 1 && position / 8 > 1) isLegal[position - 10] = true;    // x : - 2 , y : + 1 
    if (position % 8 > 0 && position / 8 > 2) isLegal[position - 17] = true;    // x : - 1 , y : + 2
    if (position % 8 < 7 && position / 8 > 2) isLegal[position - 15] = true;    // x : + 1 , y : + 2
    if (position % 8 < 6 && position / 8 > 1) isLegal[position - 6] = true      // x : + 2 , y : + 1
    if (position % 8 > 1 && position / 8 < 7) isLegal[position + 6] = true      // x : - 2 , y : - 1
    if (position % 8 > 0 && position / 8 < 6) isLegal[position + 15] = true;    // x : - 1 , y : - 2
    if (position % 8 < 7 && position / 8 < 6) isLegal[position + 17] = true;    // x : + 1 , y : - 2
    if (position % 8 < 6 && position / 8 < 7) isLegal[position + 10] = true;    // x : + 2 , y : - 1
    return isLegal;             // returns array that shows if it is allowed to go there
}