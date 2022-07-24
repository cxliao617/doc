---
sidebar_position: 2
---
# Deploy React to Git pages

### Install gh-pages
```terminal=
npm i gh-pages
yarn add gh-pages
```

### Package.json
#### Add script in package.json
```json=
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy":"npm run build",
    "deploy":"gh-pages -d build"
  },
```

#### Add *homepage* url 
```json=
"homepage": "https://{githubId}.github.io/{repository}",
```

### Run Command
```terminal=
npm run deploy
yarn deploy
```

###### tags: `React`, `Git`