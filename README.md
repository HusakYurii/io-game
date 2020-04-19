To start:
- clone this `io-game` repository;
- run `npn run "clone-all"` to clone all sub repositories
- run `npm i` in each (sub) repository to install all dependencies
- to run back-end part of a project use `npm run "run-nodemon"`, it will run `"run-server"` command in package.json file but in watch mode
- to run front-end part of a project copy `.env.example` file to the client folder, rename it to `.env` and follow instructions there. Then use `npm run "run-webpack"`, it will create **_dist/client_** and copy all **_assets/templates_** there. After that it will start `http://localhost:PORT` dev server.