# rds-design-system

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs Storybook. Web page will open automatically.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the pacakage for production to the `dist` folder.<br />

## Install package

Installing the built package to a React application:

`npm install rds-design-system`

or if you are using yarn

`yarn add rds-design-system`

### Adding Button component

- Create a new react application
    ```
    npx create-react-app my-app
    cd my-app
    npm install rds-design-system
    ```
- Open in IDE
- In the `App.js` file:
    - add `import { Button } from 'rds-design-system';`
    - remove everything inside `<header>'
    - add `<Button>Primary</Button>`

The add the following (optional) attributes to the Button element:

- `kind={'secondary'}` to render secondary button ('primary' is default)
- `size={'small'}` to render a small
- `disabled={true}` to disable the button
