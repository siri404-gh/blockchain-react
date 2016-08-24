/*
*
* Technologies used
*
*/
Eslint as linting utility
Document JS to create the documentation
Mocha, chai supertest to test the Api
Express js to create api
Jest, react-test-utils to test react components
React to create components
Gulp to build
gulp-livereload to reload the browser
gulp-less to compile less to css

/*
*
* Setup Instructions
*
*/
Configure all the ports in variables.js
Configure user credentials, node port, coinbaseaddress in client/src/utils/users.js
Fo initial installation, go to ./server and run "npm instal"; Also go to ./client/ and run "npm install". This is a one time process.
To run server test cases, go to ./server/ and run "npm test";
To run client test cases, go to ./client/ and run "npm test";
To run test cases with code coverage, use "npm run test-cov" in the respective directories.
To see application in action, go to ./server/ and run "npm start"; Also go to ./client/ and run "npm start"
To generate documentation, go to ./server/ and run "npm run docs"; Also go to ./client and run "npm run docs"
