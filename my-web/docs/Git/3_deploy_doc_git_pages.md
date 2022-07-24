---
sidebar_position: 3
---
# Deploy Docusaurus to Git pages

## *docusaurus.config.js* settings
```javascript=
const config = {
    url: 'https://{githubId}.github.io', // git page url
    baseUrl: '/{repository}/', // same as repo 
    
    organizationName: '{githubId}', // Usually your GitHub org/user name.
    projectName: '{repository}', // Usually your repo name.
    githubHost:'github.com-{id_account}', // if have multi git account 
}
```
note: If you multi git account and set with `github.com-personal` or `github.com-work`, etc. You need to set githubHost to make deployment permission.

## Deploy to git pages
1. Make sure you are on **main** branch.
2. run 
```terminal=
$ GIT_USER={githubId} USE_SSH=true yarn deploy
or
$ GIT_USER={githubId} USE_SSH=true npm run deploy
```


## Reference
[Docusaurus Deploy](https://docusaurus.io/docs/deployment)