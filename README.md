#### To start development ####
- clone this `io-game` repository;
- run `npn run "clone-all"` to clone all sub repositories
- run `npm i` in each (sub) repository to install all dependencies
- to run back-end part of a project use `npm run "run-nodemon-dev"`, it will run `"run-server"` command in package.json file but in watch mode
- to run front-end part of a project copy `.env.example` file to the client folder, rename it to `.env` and follow instructions there. Then use `npm run "run-webpack"`, it will create **_dist/client_** and copy all **_assets/templates_** there. After that it will start `http://localhost:PORT` dev server.

#### To debugg the server ####
To get an access chrome devtools and use debugger for `io-game-server` use scripts
- to rebuild and run local project `npm run "run-webpack"`
- to run the server in debug mode use `npm run "run-server-debugger-dev"`. Also some logs can be seen in the console
- open a tab in the browser with the game, open devtools and navigate to node icon. Or read this [article](https://flaviocopes.com/node-debug-devtools/)

#### To enable production mode on the server ####
In the case when you run the scripts `"run-server-debugger-prod"` or `"run-nodemon-prod"` node env will be set to production. For Windows OS it uses `set NODE_ENV=production`, but it can be changed depending on OS it is being run on.
