import React, { useEffect, useState } from 'react'
import { getRepoInfoAndSaveToDb } from '../../utils/apis/github';
import { getAllRepoBy } from '../../utils/indexdb/models/github_projects';
import useGlobalState from '../../utils/store';
import styles from './GithubSummary.module.css';
import ProjectModal from './ProjectModal';

export default function GithubSummary() {
    const [username, setUsername] = useGlobalState('git_username');
    const [liveUsername, setLiveUsername] = useState('pritamprasd');
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function update_projects() {
            var projects = await getAllRepoBy(username);
            if (projects == null || projects.length < 1) {
                console.log(`Username: ${username} not found in db.`)
                await getRepoInfoAndSaveToDb(username);
            }
            projects = await getAllRepoBy(username);
            setProjects(projects);
        }
        update_projects();
    }, [username]);
    // useEffect(() => {
    //     console.log(`projects: ${JSON.stringify(projects)}`);
    // }, [projects]);

    function onInputChange(e) {
        setLiveUsername(e.target.value);
        if (e.key === 'Enter' || e.keyCode === 13) {
            setUsername(e.target.value);
        }
    }
    return (
        <div className={styles.githubsummarycontainer}>
            <div className={styles.header}>
                <div style={{ fontSize: 'large' }}>Username: </div>
                <input className={styles.usernameinput} type='text' onKeyUp={onInputChange} />
                <div className={styles.searchbutton} onClick={() => setUsername(liveUsername)}><img src='/icons/search.svg' /></div>
            </div>
            <div className={styles.content}>
                {projects?.map(p => <ProjectTile key={p['reponame']} project={p} />)}
            </div>
        </div>
    )
}

function ProjectTile({ project }) {
    const cre_date = new Date(project['created_at']);
    const [showModal, setShowModal] = useState(false);
    function toggleShowModal(){
        setShowModal(!showModal);
    }
    return (
        <div className={styles.projecttile} onClick={toggleShowModal}>
            {showModal && <ProjectModal toggleShowModal={toggleShowModal} project={project}/>}
            <div className={styles.projecttitle}>{project['reponame']}</div>
            <div className={styles.projectdesc}>{project['description']}</div>
            <ProjectTopics topics={project['topics']} />
            <div className={styles.watchers}>Watchers: {project['watchers']}</div>
            <div className={styles.created_date}>Created: {cre_date.getFullYear()}-{cre_date.getMonth() + 1}-{cre_date.getDate()}</div>
        </div>
    );
}

export function ProjectTopics({ topics }) {
    return (
        <div className={styles.topicscontainer}>
            {topics?.map(t => <div key={t}>{t}</div>)}
        </div>
    )
}

