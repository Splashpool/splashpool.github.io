https://splashpool.github.io


# Oasis App Front End

## Introduction

According to WaterAid, one in ten people in the world don't have access to clean water. With droughts and flooding becoming more common due to climate change, this figure is
likely to increase. 

The Oasis application would allow regional users to locate clean water and toilet facilities in their vicinity and report any problems they have encountered. For organisations, managing such facilities, the app can provide a way to monitor their status and receive notifications from the users.   

In this repository, you can find the code for the front end of the Oasis application. It was written by Team Splashpool during the [Tech Returners](https://techreturners.com) Your Return to Tech programme in London Sept-Oct 2020 inclusive. It is a React-redux based front end application based on serverless framework running lambda functions at the backend, connected to an AWS RDS (MySQL) database.

### You can access the application [here](https://splashpool.github.io/).

## Preview

![alt text](https://github.com/Splashpool/splashpool.github.io/blob/master/public/oasis_screenshot.jpg?raw=true)

### Technology used

- React
- Redux
- material-ui
- circleci

---
## Instructions

This codebase makes use of npm for dependencies and build. As such assumes that npm has been installed and configured ready to use.

In order to install all the depencencies, first run 
```
npm install
```

To run the app in development mode, type 

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

