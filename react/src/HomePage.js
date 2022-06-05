import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from './components/Logo';

export default function HomePage() {
    const [fen, setFen] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');

    const onLoad = () => {
        let FEN = prompt("Current FEN of the board, you can change it", fen);
        if (!FEN?.match(/\s*([rnbqkpRNBQKP1-8]+\/){7}([rnbqkpRNBQKP1-8]+)\s[bw-]\s(([a-hkqA-HKQ]{1,4})|(-))\s(([a-h][36])|(-))\s\d+\s\d+\s*/)) {
            alert("Invalid FEN");
            return;
        }
        setFen(FEN);
    }

    return (
        <div className='home-page'>
            <Logo></Logo>
            <Link to='/game'><div className='button'>NEW</div></Link>
            <Link to='/game' state={{ from: 'FEN' }}><div className='button' onClick={onLoad}>LOAD</div></Link>
        </div>
    )
}
