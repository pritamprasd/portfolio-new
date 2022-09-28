import React from 'react'
import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
        <div className={styles.references}>
            <a href='https://feathericons.com/'>Icons used from: feathericons.com</a>
            <a href='https://dexie.js/'>IndexDB API: dexie.js</a>
            <a href='https://github.com/markdown-it/markdown-it'>Markdown to Html5 compilation: github.com/markdown-it/markdown-it</a>
        </div>
    </div>
  )
}
