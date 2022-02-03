import React from 'react';
import Square from './Square';
import './styles.css'

export default function Board() {
    return (
        <>
            <div className='boardRow'>
                <Square row={0} column={0}/>
                <Square row={0} column={1}/>
                <Square row={0} column={2}/>
                <Square row={0} column={3}/>
                <Square row={0} column={4}/>
                <Square row={0} column={5}/>
                <Square row={0} column={6}/>
                <Square row={0} column={7}/>
            </div>
            <div className='boardRow'>
                <Square row={1} column={0}/>
                <Square row={1} column={1}/>
                <Square row={1} column={2}/>
                <Square row={1} column={3}/>
                <Square row={1} column={4}/>
                <Square row={1} column={5}/>
                <Square row={1} column={6}/>
                <Square row={1} column={7}/>
            </div>
            <div className='boardRow'>
                <Square row={2} column={0}/>
                <Square row={2} column={1}/>
                <Square row={2} column={2}/>
                <Square row={2} column={3}/>
                <Square row={2} column={4}/>
                <Square row={2} column={5}/>
                <Square row={2} column={6}/>
                <Square row={2} column={7}/>
            </div>
            <div className='boardRow'>
                <Square row={3} column={0}/>
                <Square row={3} column={1}/>
                <Square row={3} column={2}/>
                <Square row={3} column={3}/>
                <Square row={3} column={4}/>
                <Square row={3} column={5}/>
                <Square row={3} column={6}/>
                <Square row={3} column={7}/>
            </div>
            <div className='boardRow'>
                <Square row={4} column={0}/>
                <Square row={4} column={1}/>
                <Square row={4} column={2}/>
                <Square row={4} column={3}/>
                <Square row={4} column={4}/>
                <Square row={4} column={5}/>
                <Square row={4} column={6}/>
                <Square row={4} column={7}/>
            </div>
            <div className='boardRow'>
                <Square row={5} column={0}/>
                <Square row={5} column={1}/>
                <Square row={5} column={2}/>
                <Square row={5} column={3}/>
                <Square row={5} column={4}/>
                <Square row={5} column={5}/>
                <Square row={5} column={6}/>
                <Square row={5} column={7}/>
            </div>
            <div className='boardRow'>
                <Square row={6} column={0}/>
                <Square row={6} column={1}/>
                <Square row={6} column={2}/>
                <Square row={6} column={3}/>
                <Square row={6} column={4}/>
                <Square row={6} column={5}/>
                <Square row={6} column={6}/>
                <Square row={6} column={7}/>
            </div>
            <div className='boardRow'>
                <Square row={7} column={0}/>
                <Square row={7} column={1}/>
                <Square row={7} column={2}/>
                <Square row={7} column={3}/>
                <Square row={7} column={4}/>
                <Square row={7} column={5}/>
                <Square row={7} column={6}/>
                <Square row={7} column={7}/>
            </div>
            
        </>
    );
}
