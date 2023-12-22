import * as core from "@actions/core";
import { context } from '@actions/github'
import { linter } from './linter'


export function run() {
  try {
    let pullRequestTitle: string = context.payload.pull_request?.title;

    if (!pullRequestTitle) {
      core.setFailed("- Title not found");
      return;
    };

    linter(pullRequestTitle);

  } catch (err) {
    console.log(err);
    core.setFailed(`❌ PR Title linter failed\n${err}`);
  };
};

run();
