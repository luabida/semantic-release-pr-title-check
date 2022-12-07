import { context } from '@actions/github'
import { linter } from './linter'

function run() {
    try {
        const pullRequestTitle: string = context.payload.pull_request?.title;

        if (!pullRequestTitle) {
            throw("Title not found");
        };

        linter(pullRequestTitle);

    } catch (err) {
        console.log('❌ PR Title check failed');
        throw(err);
    };
};

run();
