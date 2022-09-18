import React, { useEffect, useState } from 'react';
import styles from './TextEditor.module.css';

export default function TextEditor() {
    const [editorContent, setEditorContent] = useState('');

    function setEditorContentExternal(e) {
        console.log(`onchnage text editor happended : ${e}`)
        setEditorContent(e);
    }
    return (
        <div className={styles.texteditorcontainer}>
        </div>
    )
}
