import React from 'react'
import { COLORS } from '../constants';

function Header() {
    return (
        <div style={{
            boxSizing: 'border-box',
            border: '1px solid',
            borderColor: COLORS.black,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0',
            margin: '0px',
        }}>
            <p style={{
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '96px',
                lineHeight: '101px',
                color: COLORS.black,
                margin: '0',
            }}>COSSIPS</p>
        </div>
    )
}

export default Header;
