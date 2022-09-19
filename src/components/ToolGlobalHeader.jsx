import React, { useEffect, useState } from 'react'
import useGlobalState from '../utils/store';

export default function ToolGlobalHeader() {
    const [current_view, setCurrentView] = useGlobalState('current_view');
    const [config, __] = useGlobalState('config');
    const [title, settitle] = useState('');
    const [showBackButton, setShowBackButton] = useState(false);

    useEffect(() => {
        if (config['descriptions'][current_view]) {
            settitle(config['descriptions'][current_view]['name'])
            setShowBackButton(true);
        } else {
            setShowBackButton(false);
        }

    }, [current_view]);

    const headerstyle = {
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        gap: '1rem',
        alignItems: 'flex-start'
    }

    return (
        <>
            {showBackButton &&
                <div style={headerstyle}>
                    <img onClick={() => setCurrentView('tools')} src='/icons/back.svg' />
                    <div className='tooltitle'>{title}</div>
                </div>
            }
        </>

    )
}
