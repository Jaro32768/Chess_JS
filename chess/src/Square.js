import React, {useState} from 'react';
import './styles.css';

export default function Square(props) {
    const [className, setClassName] = useState(null);

    if (className === null)
        if ((props.row + props.column) % 2 === 0) setClassName('lightSquare')
        else setClassName('darkSquare')

    return <div className={className}></div>;
}
