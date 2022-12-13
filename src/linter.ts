import * as core from "@actions/core";


const preset: string = core.getInput('convention-name');
const allowedTags = [
    "build",
    "ci",
    "chore",
    "docs",
    "feat",
    "fix",
    "perf",
    "refactor",
    "test",
];

export function linter(title: string) {
    let [tag, subj, msg] = extractContext(title);

    if (!allowedTags.includes(tag)) {
        throw("❌ Incorrect PR tag.")
    };

    console.log("✅ PR title is correct!");
};

function extractContext(title: string): [string, string, string] {

    let regEx: RegExp = /(^[\w\s?]+)(\(.+\):\s)([^A-Z\W].*[^.]$)/g;

    if (preset === 'conventionalcommits') {
        regEx = /(^[\w\s?]+)(\(.+\)!:\s)([^A-Z\W].*[^.]$)/g;
    };

    let matches = title.match(regEx) || [];

    try {
        let tag = matches.map(e => e.replace(regEx, '$1'))[0];
        let subj = matches.map(e => e.replace(regEx, '$2'))[0];
        let msg = matches.map(e => e.replace(regEx, '$3'))[0];

        if (!tag || !subj || !msg) {
            throw("❌ Incorrect Title.");
        };

        return [tag, subj, msg];

    } catch (err) {
        console.log(err);
        throw(err);
    };
};
