import { context } from '@actions/github'
import * as linter from './linter'


export function run() {
    try {
        const pullRequestTitle: string = context.payload.pull_request?.title;

        if (!pullRequestTitle) {
            throw("Title not found");
        };

        linter.linter(pullRequestTitle);

    } catch (err) {
        console.log('❌ PR Title check failed');
        throw(err);
    };
};

run();
