import React, { useEffect, useState } from 'react'
import { getRepoInfoAndSaveToDb } from '../../utils/apis/github';
import { getAllRepoBy } from '../../utils/indexdb/models/github_projects';
import useGlobalState from '../../utils/store';
import styles from './GithubSummary.module.css'

export default function GithubSummary() {
    const [username, setUsername] = useGlobalState('git_username');
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function update_projects() {
            var projects = await getAllRepoBy(username);
            if (projects == null || projects.length < 1) {
                projects = await getRepoInfoAndSaveToDb(username);                
            }
            setProjects(projects);
        }
        update_projects();
    }, [username]);

    useEffect(() => {
        console.log(`projects: ${JSON.stringify(projects)}`);
    }, [projects]);

    return (
        <div className={styles.githubsummarycontainer}>
            <div>
                {projects?.map(p => <div>{JSON.stringify(p)}</div>)}
            </div>
        </div>
    )
}
