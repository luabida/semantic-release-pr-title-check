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
    name: PR Linter Test
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Semantic Release PR Title Check
        uses: osl-incubator/semantic-release-pr-title-check@v1.0.0

```

## PR Title Format
```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─> Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─> Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                         elements|forms|http|language-service|localize|platform-browser|
  │                         platform-browser-dynamic|platform-server|router|service-worker|
  │                         upgrade|zone.js|packaging|changelog|docs-infra|migrations|ngcc|ve|
  │                         devtools
  │
  └─> Commit Type: build|ci|chore|docs|feat|fix|perf|refactor|test|BREAKING CHANGE
```

## Tags

|*tag*|*Usage*|
|:---:|:---------:|
|**build**|Changes that affect the build system or external dependencies|
|**ci**|Changes to CI configuration files and scripts|
|**docs**|Documentation only changes|
|**feat**|A new feature|
|**fix**|A bug fix|
|**perf**|A code change that improves performance|
|**refactor**|A code change that neither fixes a bug nor adds a feature|
|**test**|Adding missing tests or correcting existing tests|
|**BREAKING CHANGE**|A code change that breaks the current version|

