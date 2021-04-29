<img src="/public/logo.png" height="60" align="center"/> <p align="center"><strong>Oxycare</strong> </p>
![GitHub top language](https://img.shields.io/github/languages/top/tunpl/oxycare) ![Discord](https://img.shields.io/discord/834943508225327114) ![David](https://img.shields.io/david/tunpl/oxycare) ![GitHub Repo stars](https://img.shields.io/github/stars/tunpl/oxycare?style=social)

## 🎤 The stack/technologies we're using
- ReactJS/TypeScript
- MaterialUI
- Firebase

Before contributing check: 
### :red_circle: Pull Request Guidelines

- The master branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches, that will be merged into test branch.

- Each commit should succeed respect Clean Code Criterias.

- Check the projects tab and make sure you fixed/coded one of the given tasks. 

- Each pull request should succeed Tests that will be included.

- **Do not submit PRs against the master branch.**

- It's OK to have multiple small commits as you work on the PR - even a small "typo" fix is acceptable.

- If adding new feature:
  - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

- If fixing a bug or more globally resolving an issue:
  - Add (fix: #xxxx[,#xxx]) (#xxxx is the issue id) in your PR title for a better release log, e.g. fix: update entities encoding/decoding (fix #3899).
  - Provide detailed description of the bug in the PR.

- Again, **Do not submit PRs against the master branch.**

## 🔶 The Branches: 
- dev: for everything in the development process
- main: for prod, don't edit this one ❗

## ✅ The Reviewers:
- @bahachammakhi

## ✨ How to execute in Localhost
0. git clone ```https://github.com/tunpl/oxycare.git```
1. Create .env file and add:
```
REACT_APP_apiKey=AIzaSyAdu-Xdz62kLc0ptxraSE9h2fQQ_71pWck
REACT_APP_authDomain=oxycare-8358e.firebaseapp.com
REACT_APP_databaseURL=
REACT_APP_projectId=oxycare-8358e
REACT_APP_storageBucket=oxycare-8358e.appspot.com
REACT_APP_messagingSenderId=26729504664
REACT_APP_appId=1:26729504664:web:725f282b3e0218959815ed
```
2. npm install
3. npm start

## License
This project is licensed under the MIT license, Copyright (c) 2021 @tunpl : @tn.programmers
For more information see `LICENSE.md`.
