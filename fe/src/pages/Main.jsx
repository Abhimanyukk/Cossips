import React, { useState } from 'react'
import Header from '../components/Header';
import Login from './Login';
import ChatRoom from './ChatPage';

function Main() {
    const [user, setUser] = useState(null);

    const LoginHandler = (user) => {
        console.log('User: ', user);
        setUser(user);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            gap: '10px',
            margin: '0px',
            position: 'relative',
            height: '98vh'
        }}>
            <Header></Header>
            {
                user
                    ? (<ChatRoom user={user} />)
                    : (<Login onLogin={LoginHandler} />)
            }
            {/* <ChatRoom user="abi" /> */}
        </div>
    )
}

export default Main;
