# React MUI CV
A simple JSON to graphical CV generator. A small project that anyone can fork and use to create an aestheticaly pleasing CV.

## Setup
Requires NodeJS & NPM installed

1. Fork this repo and clone it.
2. Run `npm install` from root of project.
3. Run `npm start` to start the React App and navigate to `localhost:3000`.
4. You'll see the CV template load up, time to get filling out things.

## JSON Editing
This project contains a JSON schema which if running on VSCode you can install a JSON Schema validation plugin to validate the JSON files in here with build the CV.

These files are as follows:
- `/src/cvdata.json`
- `/src/cvproperties.json`

### cvproperties.json
This file contains all the properties of the generating and visual/section properties which can be used to manipulate and set up the CV.

### cvdata.json
This file contains the JSON structure and the data for filling in the CV