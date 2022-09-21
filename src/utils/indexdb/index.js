import Dexie from "dexie";

const db = new Dexie(process.env.NEXT_PUBLIC_INDEXDB_NAME);

db.version(3).stores({
    github_projects: "++id, username, reponame, *topics",
});

export default db;

// github_projects: ++id, username, &reponame, *topics, url, created_at, forks, open_issues, watchers 


export async function getAllTableNames() {
    return await db.tables;
}

export async function purgeTable() {
    db.github_projects.clear();
}