import React, { useEffect, useRef, useState } from 'react'
import { COLORS } from '../constants';
import SendButton from '../components/SendButton';
import ChatInput from '../components/ChatInput';
import axios from 'axios'
import io from 'socket.io-client'
import MessageBox from '../components/MessageBox';

const socket = io('http://localhost:1234')

function ChatRoom({ user }) {
    const [chat, setChat] = useState([])
    const chatEndRef = useRef(null)

    const handleSendClick = () => {
        console.log("Clicked");
    };

    const handleEnterClicked = (msg) => {
        const messageBody = {
            user: user,
            msg: msg,
        }
        socket.emit('sendMessage', messageBody);
    };

    useEffect(() => {
        socket.on('receiveMessage', (data) => {
            console.log(`msg: ${data.user} ${data.msg}`)
            setChat((prevChat) => [...prevChat, data])
        })

        return () => socket.off('receiveMessage')
    }, [])

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToBottom()
    }, [chat])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0px',
            gap: '10px',
            alignSelf: 'stretch',
            margin: '0px',
            flex: '1',
            height: '80%',
        }}>
            <div style={{
                boxSizing: 'border-box',
                border: '1px solid',
                borderColor: COLORS.black,
                padding: '20px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
                gap: '10px'
            }}>
                {
                    chat.map((data, index) => (
                        <div key={index}>
                            <MessageBox user={data.user} message={data.msg} isLeft={data.user !== user}></MessageBox>
                        </div>
                    ))
                }
                <div ref={chatEndRef}></div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px',
                gap: '10px'
            }}>
                <ChatInput onValueChange={handleEnterClicked}></ChatInput>
                <SendButton onClick={handleSendClick}></SendButton>
            </div>
        </div>
    )
}

export default ChatRoom;
