import React, { useState } from 'react'
import { COLORS } from '../constants';

const ChatInput = ({ onValueChange }) => {
    const [value, setValue] = useState('');

    const handleValue = (event) => {
        setValue(event.target.value);
    }

    const handlerKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (value !== "") {
                onValueChange(value)
                setValue('')
            }
        }
    }

    React.useEffect(() => {
        window.addEventListener('keypress', handlerKeyPress);
        return () => {
            window.removeEventListener('keypress', handlerKeyPress);
        };
    });

    return (
        <div style={{
            boxSizing: 'border-box',
            border: '1px solid',
            borderColor: COLORS.black,
            padding: '10px 20px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }}>
            <input
                type="text"
                placeholder='Enter message here'
                onChange={handleValue}
                value={value}
                style={{
                    outline: 'none',
                    border: 'none',
                    backgroundColor: 'transparent',
                    fontFamily: 'Inconsolata',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '20px',
                    width: '100%',
                    height: '100%',
                }}
            />


        </div>
    )
}

export default ChatInput;
