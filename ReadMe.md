## Initial definitions

### Declarative paradigm
Implements algorithms without specifying the steps. 
- Ex: We ask an artist what we'd like he paints but we don't tell him how he should paint 


### Imperaive paradigm
Implements algorithms in explicit steps.
- Ex: We ask a 4 year old child the same task, but we guide the child on every element he has to draw: First paint the tree, after the mountain.

React is declarative, we just have to tell React what we want, and React with it's react DOM library will build the actual UI 
### DOM
Document Object Model, is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes and objects; this way, programming languages can interact with the page.


### Initialize the app 
`npx create-react-app my-app `
`cd my-app`
`npm start`


### Create React app 
`npx create-react-app my-app`
npx is a npm package runner intalled with npm. It installs the packages locally in the folder. 

### Folder Structure

- `package.json`
  - Contains:
    - Dependencies of the application.
    - Scripts to run the application: start the app, build it, or test it.

- `package-lock.json`
  - From npm, it ensures:
    - Consistent installation among dependencies.

- `node_modules`
  - Where all the dependencies are installed.

- `public`
  - Contains `index.html` file:
    - The only HTML file in the app.
    - Contains a single `div` tag with `id = root`.
    - React will control everything inside this `div` element.

- `src`
  - `index.js`:
    - The starting point of the application.
    - Specifies the root component, which is a DOM component with a `div` tag and an `id` of `root`.
  - `App.js`:
    - Responsible for the HTML displayed in the browser.
  - `App.css`:
    - Contains the styles for the application.

`npm start` call for index.html, then this is served in the brwoser, which contains the root DOM node next the control eneters index.js React DOM renders the app component onto the root DOM node. 

## Compoenents

- Root (App) component:
  - Header 
  - Footer
  - Side bar
  - Main component
The main property of a component is that they are reusable. 

*Component types* 
- Stateless Funcional Compoenent: Javasript functions. Return html files
- Stateful Class Components: Regular es6 classses that extend the compoenet class from the React library. Must contain a render class. 


### Functional Component

- A Functional Component is a JavaScript function that:
  - Can optionally receive properties.
  - Returns HTML (JSX).

- Organization:
  - Often, a `components` folder is created.
  - This folder houses every reusable component.

####  Exports in React Components
#####  `export default`
- When a component is exported using `export default`, it is the default export of the file.
- Characteristics:
  - Allows the importing file to name the component whatever it likes.
  - There can only be one default export per file.
- Example:

  ```javascript
  import React from "react";

  export default function Greet() {
    return <h1>Hello Alex</h1>;
  }
  ```
- Importing:
  - The component can be imported with any name
```javascript
  import AnyName from './Greet';
```

##### `named Export`
- export const is used for named exports.
- Characteristics:
 - The component must be imported with the exact same name it was exported with.
 - A file can have multiple named exports.
Example:

```javascript
  export const Greet = () => <h1>Hello Alex</h1>
```
- Importing:
  - The component must be imported using the same name:

```javascript
  import { Greet } from './Greet';
```

*Note that the above code is the same but i arrow funtion syntaxis*

- Named exports are useful for exporting multiple values. When importing, you can selectively load only the pieces you need, which can save memory.
- Using export default can be more straightforward for components that are used frequently and are the primary export of a module.
- It's a common practice to use export default for React components, especially when each component is in its own file.
