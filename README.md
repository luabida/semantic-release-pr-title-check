# Semantic Release Pull Request Title Check

Checks for [Angular commit message format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format) in the Pull Request Title.


## Usage
``` yaml
# Include this step into your `.github/workflows` directory:
name: PR Title Linter
on:
  pull_request:
    types: [opened, reopened, edited, synchronize]
    branches:
      - main

jobs:
  linter:
    name: Pull Request title check
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Semantic Release PR Title Check
        uses: osl-incubator/semantic-release-pr-title-check@v1.3.2
        with:                                   #Optional
          convention-name: conventionalcommits  #Default: angular
```


## PR Title Format
```
<tag>(<scope>): <short summary>
  │       │             │
  │       │             └─> Title message. Not capitalized. 
  │       │                 No period at the end.
  │       │
  │       └─> The specific subject of the PR. Can be anything.
  │
  └─> build|chore|ci|docs|feat|fix|perf|refactor|test
```

## Tags

|*tag*|*Usage*|
|:---:|:---------:|
|**build**|Changes that affect the build system or external dependencies|
|**chore**|A minor change and/or daily work activity|
|**ci**|Changes to CI configuration files and scripts|
|**docs**|Documentation only changes|
|**feat**|A new feature|
|**fix**|A bug fix|
|**perf**|A code change that improves performance|
|**refactor**|A code change that neither fixes a bug nor adds a feature|
|**test**|Adding missing tests or correcting existing tests|
|**BREAKING CHANGE**|A code change that breaks the current version|


### The table below shows which commit message gets you which release type when semantic-release runs (using the default configuration):
ref: https://semantic-release.gitbook.io/semantic-release/

|*Commit Message*|*Release Type*|
|:---:|:---------:|
|fix(pencil): stop graphite breaking when too much pressure applied|~~Patch~~ Fix Release|
|feat(pencil): add 'graphiteWidth' option|~~Minor~~ Feature Release|
|BREAKING CHANGE(pencil): remove graphiteWidth option|~~Major~~ Breaking Release|
