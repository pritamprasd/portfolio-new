import React from 'react'
import styles from "./ProjectModal.module.css";


export default function ProjectModal({ toggleShowModal, project }) {
    function closeButtoonClicked(){
        toggleShowModal();
    }
    return (
        <div>
            <div className={styles.darkBG} onClick={closeButtoonClicked} />
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <div className={styles.heading}>{project['reponame']}</div>                    
                </div>
                <div className={styles.closeBtn} onClick={closeButtoonClicked}>
                    <img src='/icons/close.svg' style={{ marginBottom: "-3px" }} />
                </div>
                <div className={styles.modalContent}>
                    {Object.keys(project).map(k => <div>{k} : {project[k]}</div>)}
                </div>
            </div>
        </div>
    )
}
