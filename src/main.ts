import { context } from '@actions/github'
import { linter } from './linter'


export function run() {
    try {
        let pullRequestTitle: string = context.payload.pull_request?.title;

        if (!pullRequestTitle) {
            throw("- Title not found");
        };

        linter(pullRequestTitle);

    } catch (err) {
        console.log(`❌ PR Title linter failed\n${ err }`);
    };
};

run();
