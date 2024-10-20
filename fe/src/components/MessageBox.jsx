import React from 'react'
import { COLORS } from '../constants';

const MessageBox = ({ user, message, isLeft }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isLeft ? 'flex-start' : 'flex-end',
            padding: '0px',
            gap: '10px',
            width: '100%',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isLeft ? 'flex-start' : 'flex-end',
                padding: '10px',
                gap: '10px',
                boxSizing: 'border-box',
                border: '1px solid',
                borderColor: COLORS.black,
            }}>
                <label style={{
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '13px',
                    lineHeight: '14px',
                    color: COLORS.black,
                }}>{user}</label>

                <label style={{
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '20px',
                    lineHeight: '14px',
                    color: COLORS.black,
                }}>{message}</label>
            </div>
        </div>
    )
}

export default MessageBox;
