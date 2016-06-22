# README

This setup will take a `person-list.json` JSON dataset and find the closest matches for people.

## SETUP
The source code for the javascript is in `person-lookup.js`, but must be compiled with browserify to include the npm package `zipcodes`.

```
npm i
```

```
npm run build
```

Load `index.html` in a browser to see the results.
