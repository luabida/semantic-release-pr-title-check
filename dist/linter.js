"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linter = void 0;
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
function linter(title) {
    let [tag, subj, msg] = extractContext(title);
    if (!allowedTags.includes(tag)) {
        throw ("❌ Incorrect PR tag.");
    }
    ;
    console.log("✅ PR title is correct!");
}
exports.linter = linter;
;
function extractContext(title) {
    const regEx = /(^[\w\s?]+)(\(.+\):\s)([^A-Z\W].*[^.]$)/g;
    var matches = title.match(regEx) || [];
    try {
        let tag = matches.map(e => e.replace(regEx, '$1'))[0];
        let subj = matches.map(e => e.replace(regEx, '$2'))[0];
        let msg = matches.map(e => e.replace(regEx, '$3'))[0];
        if (!tag || !subj || !msg) {
            throw ("❌ Incorrect Title.");
        }
        ;
        return [tag, subj, msg];
    }
    catch (err) {
        throw (err);
    }
    ;
}
;
