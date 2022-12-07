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
    "BREAKING CHANGE"
];

export function linter(title: string) {
    let [tag, subj, msg] = extractContext(title);

    if (!allowedTags.includes(tag)) {
        throw("❌ Incorrect PR tag.")
    };

    console.log("✅ PR title is correct!");
};

function extractContext(title: string): [string, string, string] {
    const regEx: RegExp = /(^[\w\s?]+)(\(.+\):\s)([^A-Z\W].*[^.]$)/g;

    var matches = title.match(regEx) || [];

    try {
        let tag = matches.map(e => e.replace(regEx, '$1'))[0];
        let subj = matches.map(e => e.replace(regEx, '$2'))[0];
        let msg = matches.map(e => e.replace(regEx, '$3'))[0];

        if (!tag || !subj || !msg) {
            throw("❌ Incorrect Title.")
        };

        return [tag, subj, msg];

    } catch (err) {
        throw(err)
    };
};

