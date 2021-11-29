# TestGorilla Design System Demo

## Introduction
A Design System Demo Project hopes to showcase the practicality, advantages, developer experience of adopting a component driven approach to UI with [ReactJS](https://reactjs.org) and [StorybookJS](https://storybook.js.org/).

This readme is designed to help you understand the structure and approach needed to work on this project.

The project stack
- UI Library - [ReactJS](https://reactjs.org) with [Create React App](https://create-react-app.dev/) 
- Type Checking - [TypeScript](https://www.typescriptlang.org/)
- CSS - Vanilla CSS
- Testing - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [Jest](https://jestjs.io/)
- Design System Framework -  [StorybookJS](https://storybook.js.org/)
- Linting - [ESlint](https://eslint.org/)
- Code Formatting - [Prettier](https://prettier.io/)

## Design System Component Structure

To achieve separation of concerns and ease of maintainability, each component should occupy its own directory, unless there is presentational component tied to the main component and does not feature in any other component.

The component structure is illustrated below

```
+- src/
|  +- components/ : handles the frontend assets for the project
|    +- component/
|       +- ComponentName.tsx : React UI component  
|       +- ComponentName.stories.tsx : handles the 
|       +- ComponentName.test.tsx : handles the 
|       +- componentName.modules.css : handles the
|       +- PresentationalComponent.tsx React component only tied to main component    
|

```

## Installing and Setup
The project requires [Node.js](https://nodejs.org/) v8+ to run.

To get started 

```
#Clone the repo

git clone <repo-url>

cd <repo-name>


# Install dependencies

npm install


# Start storybook server

npm run storybook


# Start React Server

npm run start

```

## Future Updates

Add automatic deployment of storybook to chromatic using a CI/CD pipeline or hooks.


