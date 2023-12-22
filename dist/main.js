"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const github_1 = require("@actions/github");
const linter_1 = require("./linter");
function run() {
    var _a;
    try {
        let pullRequestTitle = (_a = github_1.context.payload.pull_request) === null || _a === void 0 ? void 0 : _a.title;
        if (!pullRequestTitle) {
            throw ("- Title not found");
        }
        ;
        (0, linter_1.linter)(pullRequestTitle);
    }
    catch (err) {
        console.log(`❌ PR Title linter failed\n${err}`);
        throw (err);
    }
    ;
}
exports.run = run;
;
run();
