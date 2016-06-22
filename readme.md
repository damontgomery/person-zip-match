# Readme

This setup will take a `person-list.json` JSON dataset and find the closest matches for people.
Load `index.html` in a browser to see the results.

## Installation
The source code for the javascript is in `person-lookup.js`, but must be compiled by browserify to include the npm package zipcodes.

### Install browserify
`npm install -g browserify`

### Install zipcode node package
`npm install`

### Compile zipcode.js
zipcode.js contains the person-lookup.js script along with the zipcode npm package.
`browserify person-lookup.js -o zipcodes.js`
