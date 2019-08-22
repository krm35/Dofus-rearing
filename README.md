# Tom Rooman

My project is available at [https://tomrooman.site](https://tomrooman.site).

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode using `webpack-dev-server` module.<br>
The start script command is `webpack-dev-server --open --mode development`.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.<br>

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
The build script command is `webpack --mode production`.<br>
The `index.html` file generated in the `dist` folder will be used in my VPS with [nginx](https://www.nginx.com/).<br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>

The build is minified and the filenames include the hashes.<br>
