import React from 'react'
import Header from '../components/Header';
import Login from './Login';

function Main() {
    const LoginHandler = (user) => {
        console.log('User: ', user);
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
            <Login onLogin={LoginHandler}></Login>
        </div>
    )
}

export default Main;
