import React, { useEffect, useState } from 'react'
import { getRepoInfoAndSaveToDb } from '../../utils/apis/github';
import { getAllRepoBy } from '../../utils/indexdb/models/github_projects';
import useGlobalState from '../../utils/store';
import styles from './GithubSummary.module.css'

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

    useEffect(() => {
        console.log(`projects: ${JSON.stringify(projects)}`);
    }, [projects]);

    function onInputChange(e){
        setLiveUsername(e.target.value);
        if (e.keyCode === 13) {
            setUsername(e.target.value);
        }
    }

    function onSearchButtonClick(){
        setUsername(liveUsername);
    }

    return (
        <div className={styles.githubsummarycontainer}>
            <div className={styles.header}>
                <input className={styles.usernameinput} type='text' onKeyDown={onInputChange}/>
                <div className={styles.searchbutton} onClick={onSearchButtonClick}><img src='/icons/search.svg'/></div>
            </div>
            <hr/>
            <div>
                {projects?.map(p => <div key={p['reponame']}>{JSON.stringify(p)}</div>)}
            </div>
        </div>
    )
}
