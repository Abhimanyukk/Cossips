import React from 'react'
import send from '../assets/send.png'
import { COLORS } from '../constants';

const SendButton = ({ onClick }) => {
    return (
        <div style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '10px',
            border: '1px solid',
            borderColor: COLORS.black,
        }}
            onClick={onClick}>
            <img src={send} alt="Send" style={{
                height: '46px',
            }} />
        </div>
    )
}

export default SendButton;
