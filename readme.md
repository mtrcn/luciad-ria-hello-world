# Luciad RIA and GitHub Packages

## Goal
To learn and demonstrate how to use the [GitHub Packages](https://github.com/features/packages) to host Luciad RIA's NPM packages, and to create a basic example to use them. GitHub Packages allow us to deploy our private packages to use in our projects safely, so I decided to try it with Luciad RIA's packages to run this simple example on it.

## Development

This repository is created based on [Luciad's Hello World example](https://dev.luciad.com/portal/productDocumentation/LuciadRIA/docs/articles/tutorial/getting_started/hello_world.html). The difference is that GitHub Packages is used to host Luciad NPM packages. 

## How to Use

1. Create a private GitHub Repository to host Luciad NPM packages
2. Create a Personal Access Token on your GitHub account.
3. Add `.npmrc` file your home folder with following content;
```
//npm.pkg.github.com/:_authToken=[Personal Access Token]
```
Replace `[Personal Access Token]` with your token.

4. Download Luciad RIA from your Luciad Developer Account, and extract it to a folder.
5. Add `.npmrc` files to each ES6 folder(geometry, ria, symbology) under `...\packages\es6` with the following content;
```
registry=https://npm.pkg.github.com/@[your-user-name]
```
Replace `[your-user-name]` with your GitHub user or GitHub organisation name.

6. Modify `package.json` files under each RIA's ES6 folder with the following changes;
   
   Add `repository` property with your private GitHub repository URL that we created in Step 1. For example; `"repository": "git@github.com:mtrcn/luciad.git"`. 

   Remove `@luciad` scope in packages names, for example; `"name": "ria-milsym"`

   Replace `@luciad` with your user name in dependency names. For example;
   ```json
    "dependencies": {
        "@mtrcn/ria": "2020.0.6"
    }
   ```
7. Run `npm publish` command in each ES6 folder (geometry, ria, symbology).
8. If everything goes well so far, you should able to see upload packages in the repository's `Packages` page.
9. Now, you are ready to use this repository to test deployed NPM packages.
10. Update `.npmrc` and `package.json` files in this repository with your GitHub user name and run `npm install` in the root folder. Packages should be installed properly. 
11. To test the app, run `npm run start:dev`.

## Issues

I couldn't find a way to use Luciad packages with Luciad's scope `@luciad` because GitHub adds another scope with your user name at the beginning of package name. Thus, the package name becomes `@mtrcn/@luciad/ria` that is not acceptable for NPM. I solved this problem by replacing `@luciad` scopes with my user name `@mtrcn`, it doesn't look a perfect solution, but it works.