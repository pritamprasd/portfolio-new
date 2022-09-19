export async function get_project_details(username){
    const projectInDb = await db.table("projects").where("username").equalsIgnoreCase(username).toArray();
        if (projectInDb.length === 0) {
            const allProjects = await fetch(`https://api.github.com/users/${username}/repos`).then(checkResponse).then(r => r.json())
                .catch((e: Error) => alert("Error: " + e.message));
            console.log(`All projects: ${JSON.stringify(allProjects)}`);
            const repos = allProjects.map((p: any) => p['name']);
            console.log(`repos : ${repos}`)
            for (const pName of repos) {
                const repo = allProjects.filter((p: any) => p['name'] === pName)[0];
                console.log(`repo['languages_url'] ${repo}`)
                const projectLangs = await fetch(repo['languages_url']).then(checkResponse).then(r => r.json())
                    .catch((e: Error) => alert("Error langs: " + e.message));
                await db.table("projects").put({
                    title: repo['name'],
                    name: repo['name'],
                    description: repo['description'],
                    forks: repo['forks'],
                    languages: Object.keys(projectLangs),
                    projectUrl: repo['html_url'],
                    username: username,
                });
            }
        }
}