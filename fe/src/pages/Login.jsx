import React, { useRef } from 'react'
import { COLORS } from '../constants';
import InputArea from '../components/InputArea';

const Login = ({ onLogin }) => {
    const inputAreaRef = useRef();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onLogin(inputAreaRef.current.getInputValue())
        }
    }
    React.useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    });

    return (
        <div style={{
            boxSizing: 'border-box',
            border: '1px solid',
            borderColor: COLORS.black,
            display: 'flex',
            flexDirection: 'column',
            padding: '0px',
            gap: '10px',
            alignSelf: 'stretch',
            margin: '0px',
            flex: '1'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0px',
                padding: '40px 0px',
            }}>
                <p style={{
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '24px',
                    lineHeight: '25px',
                    color: COLORS.black,
                    margin: '0px'
                }}>
                    Welcome to COSSIPS chats
                </p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '0px',
                gap: '10px',
            }}>
                <p style={{
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '20px',
                    lineHeight: '21px',
                }}>
                    Enter your name:
                </p>
                <InputArea ref={inputAreaRef}></InputArea>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '0px',
                gap: '10px',
            }}>
                <p style={{
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '20px',
                    lineHeight: '21px',
                }}>
                    Click on ENTER button to enter the chat room
                </p>
            </div>
        </div>
    )
}

export default Login;
