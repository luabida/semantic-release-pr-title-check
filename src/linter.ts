import * as core from "@actions/core";


export function linter(title: string) {

    let allowedTags = [
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

    let preset: string = core.getInput(`convention-name`, { required: false }).toLowerCase();

    try {
        let splitTitle = extractContext(title, preset);
        let tag = splitTitle[0];

        if (!allowedTags.includes(tag)) {
            throw(`- Incorrect PR tag: "${tag}" is not accepted by Semantic-Release`)
        };

        console.log("✅ PR title is correct!");

    } catch (err) {
        console.log("❌ Incorrect PR title.")
        throw(err)
    };
};


function extractContext(title: string, preset: string): string[] {

    let regEx: RegExp = /(^[\w\s?]+)(\(.+\)(!?):\s)([^A-Z\W].*[^.]$)/g;
    
    let matches = title.matchAll(regEx);

    try {
        let results = Array.from(matches)[0].filter(Boolean).splice(1);

        if (results.length === 4 && preset !== `conventionalcommits`) {
            throw("- To use '!' in the title, set preset as `convenvionalcommits`");
        };

        return results;

    } catch (err) {
        throw(`${err}\n- "${title}" format is incorrect. Please use Angular Commit Message Conventions`)
    };
};
