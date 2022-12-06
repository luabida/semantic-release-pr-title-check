import * as core from '@actions/core'
import { context } from '@actions/github'

function getTitle(): string {
    return `${context.payload.pull_request?.title}`
}

console.log(getTitle())
