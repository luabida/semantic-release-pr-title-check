import * as core from '@actions/core'
import * as github from '@actions/github'

console.log(github.context.payload.pull_request?.title)
