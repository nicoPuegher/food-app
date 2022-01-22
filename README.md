# The Corner - Food App

### This is a fully responsive react web app called The Corner, a small startup. This is the frontend side and does not include the order feature.

<br />

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Link](#link)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Available Scripts](#available-scripts)

<br />

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size
- Add menu items to the cart
- Add or remove items inside the cart

### Link

- Live Site URL: [Firebase Hosting](https://food-app-a2a00.web.app/)

## My process

### Built with

- HTML
- CSS
- Flexbox
- React (Hooks, Context API, Portals)

### What I learned

- How to use Portals to show modals and don't overpopulate the HTML file with unnecessary elements.

```js
  return ReactDOM.createPortal(
    <div>Component Here</div>,
    document.getElementById('modal')
  );
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
