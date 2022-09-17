import React from 'react'

export default function SocialLinks() {
    const linkStyles = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem'        
    }
    return (
        <div style={linkStyles}>
            <a href='https://github.com/pritamprasd'><img src='/icons/github_summary.svg' /></a>
            <a href='https://www.linkedin.com/in/pritamprasd'><img src='/icons/linkedin.svg' /></a>
            <a href='https://twitter.com/pritamprasad0'><img src='/icons/twitter.svg' /></a>
            <a href='mailto:mail@pritam.dev'><img src='/icons/email.svg' /></a>
        </div>
    )
}
