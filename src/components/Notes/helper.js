export async function getNoteContent(note) {
    let htmlBody = 'Error Happened!';
    if (note.type == 'github_link') {
        const reponame = note?.link.split("/").at(4);
        const filename = note?.link.split("/").slice(7).join("/");
        let branchname = note?.link.split("/").at(6);
        let username = note?.link.split("/").at(3);
        if (branchname == null) {
            branchname = 'master'
        }
        const raw_link = `https://raw.githubusercontent.com/${username}/${reponame}/${branchname}/${filename}`
        const body = await fetch(raw_link).then(r => r.text()).catch(e => alert(JSON.stringify(e)));

        var hljs = require('highlight.js');
        var md = require('markdown-it')({
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return '<pre class="hljs"><code>' +
                            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                            '</code></pre>';
                    } catch (__) { }
                }

                return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
            }
        });
        // var md = require('markdown-it')();
        htmlBody = md.render(body);
    }
    return htmlBody;
}