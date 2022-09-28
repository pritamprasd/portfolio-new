import React, { useEffect, useState } from 'react'
import useGlobalState from '../../utils/store';
import { getNoteContent } from './helper';
import styles from './Notes.module.css';

export default function Notes() {
    const [config, _] = useGlobalState('config');
    const [content, setContent] = useState('');
    return (
        <div className={styles.main_container}>
            {
                content === '' &&
                config.notes.map(n => <NoteTile key={n.name} note={n} setContent={setContent} />)
            }
            {
                content !== '' && 
                <div className={styles.note_content} onClick={() => setContent('')} 
                    dangerouslySetInnerHTML={{ __html: content }}></div>
            }
        </div>
    )
}

function NoteTile({ note, setContent }) {
    const [htmlContent, setHtmlContent] = useState(<div></div>);

    useEffect(() => {
        async function doitnaw() {
            setHtmlContent(await getNoteContent(note));
        }
        doitnaw();
    }, [])

    return (
        <div className={styles.notetile} onClick={() => setContent(htmlContent)}>
            <div className={styles.note_name}>{note.name}</div>
        </div>
    )
}

