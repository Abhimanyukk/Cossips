import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { COLORS } from '../constants';

const ChatInput = forwardRef(({ onValueChange }, ref) => {
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

    useImperativeHandle(ref, () => ({
        getValue: () => value, // Return the current value
        clear: () => setValue(''),
    }));

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
                ref={ref}
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
})
// const ChatInput = ({ onValueChange }) => {

// }

export default ChatInput;
