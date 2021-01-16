# A react template with typescript, tailwindcss and storybook

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and we have added:

- [Typescript](https://www.typescriptlang.org/)
- [Taillwindcss](https://www.tailwindcss.com)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)

The configuration is inspired from the article [Using Tailwind CSS with Create React App](https://daveceddia.com/tailwind-create-react-app/) from [David CEDDIA @davidcedia](https://twitter.com/dceddia)

Created with ❤️ by [Elitizon](https://www.elitizon.com)

It's available at [https://github.com/elitizon/reactapp-tailwind-storybook](https://github.com/elitizon/reactapp-tailwind-storybook)

To use this template:

- clone it
- remove the .git folder
- git init .
- git add .
- git commit -m "First commit"

## Available Scripts

In the project directory, you can run:

### 👉 `yarn install`

To install all the packages.

### 👉 `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The tailwindcss stylesheet is compiled each time thanks to [Chodikar](https://github.com/paulmillr/chokidar) a great file watcher.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### 👉 `yarn storybook`

Runs storybook.

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### 👉 `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 👉`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

👉 **Result of execution**

```bash
yarn run v1.22.10
$ run-s build:tailwind
$ tailwind build src/assets/tailwind.css -o src/tailwind.output.css

   tailwindcss 2.0.2

   🚀 Building: src/assets/tailwind.css

   ✅ Finished in 2.79 s
   📦 Size: 3.75MB
   💾 Saved to src/tailwind.output.css

$ react-scripts build
yarn run v1.22.10
$ cross-env NODE_ENV=production run-s build:tailwind
$ tailwind build src/assets/tailwind.css -o src/tailwind.output.css

   tailwindcss 2.0.2

   🚀 Building: src/assets/tailwind.css
   ✅ purgeEnabled=true


   ✅ Finished in 3.39 s
   📦 Size: 12.74KB
   💾 Saved to src/tailwind.output.css

$ react-scripts build
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  41.21 KB  build/static/js/2.8c9d9a05.chunk.js
  3.3 KB    build/static/js/main.38b50c06.chunk.js
  1.9 KB    build/static/css/main.c3cc090f.chunk.css
  1.39 KB   build/static/js/3.a38c5297.chunk.js
  1.17 KB   build/static/js/runtime-main.eb6c633b.js

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

Done in 15.44s.
```

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn how to develop UIs with component and design systems with Storybook, check out the [Learn Storybook documentation](https://www.learnstorybook.com/)
