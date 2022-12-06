import * as core from '@actions/core'
import { context } from '@actions/github'

function getTitle(): string {
    return `${context.payload.pull_request?.title}`
}

function main(): void {

    const title: string = getTitle() 

    if (title) {
        console.log(title)
    }
}

main()
