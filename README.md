https://jdraths.github.io/scrapes/

### Creating scrapes:

1. New markdown files added into the `src/blog/` folder will automatically be added to the home page and automatically get new urls with the slug being the name of the file.

We have a script for the above:

```bash
yarn run new-p /src/blog/whatever-blog-post-name.md
```

2. Any folders within the `src/blog/` folder will be added to the url path: `jdraths.github.io/scrapes/folder-name/markdown-file-name`. These folders could be a good way to organize by category of content, or might be unwieldy

### Publishing scrapes:

1. push/merge changes to master
2. then run `yarn run deploy` to deploy the changes to gh-pages branch which runs the gh-pages

### Yarn vs NPM

- for some reason I've used both... yarn.lock / package-lock.json
- we previously used `npm run deploy`