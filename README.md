#### To start development

- clone this `io-game` repository;
- run `npn run "clone-all"` to clone all sub repositories;
- run `npm i` in each repository, including sub ones, to install all dependencies
- to run BACK-END part of a project use `npm run "run-nodemon-dev"`, it will run `"run-server"` command in package.json file but in watch mode;
- to run FRONT-END part of a project copy `.env.example` file to the client folder, rename it to `.env` and follow instructions there. Then use `npm run "run-webpack"`, it will create **_dist/client_** and copy all files form **_assets and template_** there. After that it will start `http://localhost:PORT` dev server;

#### To debugg the server

To get an access chrome devtools and use debugger for `io-game-server` (BACK-END) use scripts:

- to rebuild and run FRONT-END part of the project use `npm run "run-webpack"`;
- to run the server in the debug mode use `npm run "run-server-debug"`;
- open a tab in the browser with the game, open devtools and navigate to node icon. Or read this [article](https://flaviocopes.com/node-debug-devtools/);

#### To enable production mode on the server

In the case when you want run the server with `production` flag, you can add a script with `set NODE_ENV=production` (Windows);

To play the game click [here](https://husakyurii.github.io/io-game/client/) you have to refresh it a few times to awake heroku server
