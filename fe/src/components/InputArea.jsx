import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { COLORS } from '../constants';

const InputArea = forwardRef((props, ref) => {
    const [inputValue, setInputValue] = useState('');
    const [isBlinking, setIsBlinking] = useState(true);
    const inputRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsBlinking((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    });

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const getTextWidth = (text) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = '20px Inconsolata';
        return context.measureText(text).width;
    };

    const textWidth = getTextWidth(inputValue);

    useImperativeHandle(ref, () => ({
        getInputValue: () => inputValue,
    }));

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '21px',
            position: 'relative',
        }}>
            <input type="text"
                value={inputValue}
                onChange={handleChange}
                style={{
                    outline: 'none',
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: COLORS.black,
                    fontFamily: 'Inconsolata',
                    fontStyle: 'normal',
                    fontSize: '20px',
                    fontWeight: '500',
                    caretColor: 'transparent',
                    width: `${textWidth + 10}px`,
                }} />
            <span style={{
                display: 'inline-block',
                width: '10px',
                height: '5px',
                backgroundColor: isBlinking ? COLORS.black : 'transparent',
                marginLeft: '5px',
                position: 'absolute',
                left: `${textWidth - 5}px`,
                bottom: '20px',
            }}></span>
        </div>
    )
});

export default InputArea;
