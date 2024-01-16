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

### Class Component
- A Functional Component is a JavaScript class that:
  - Can optionally receive properties.
  - Maintain a private internal state: Maintain some inforamtion which is private to that compoennt and use it to reder information
  - Returns HTML (JSX).

```javascript
  export default  class Welcome extends Component {
    render() {
      return <h1>Class Component</h1>
    }
  }
```

Funcitonal Compoenents vs Class Compoenents
Funcitonal Compoenents
- Simple functions 
- Choose as first approach
- Absence of `this` Keyword
- Solution without state: Easy to maintain 


Class Compoenents
- More feature rich 
- Maintain their own private data - state
- Complex Ui logic 
- Provide lifecycle hooks 
- Stateful compoenents 

Both Function and class components can only return one html file. 

## JSX 
 - Extension  to the JavaScript language syntax
 - Has taf names, attributes and children 
 - Write XML-like code for elements and compoenents
 - Transpiles to pure JavaScript wchich is understood by the browser 

#### Example using jsx:
```javascript
  import Reac from "react";

  export default function Hello () {
    return(
      <div className="dummyClass">
        <h1>Hello Alex</h1>
      </div>
    )
  }
```
#### Example without jsx:
- String specifies the html tag to be render: ej: div
- Optional properties. 
  - Object of keyvalue pairs that will be applied to the element
  - No properties: `null`
- Children for the html tag, for the div tag. We can pass as many children as we want

```javascript
import React from "react";

export default function Hello1() {
  return React.createElement(
    "div",
    {id: "Hello", className: "dummyClass"},
    React.createElement("h1", null, "Hello Alex")
  );
}
```
### Propertires 
### Properties (Props) in React Components

- **Definition**:
  - Props are specified as attributes in the declared component on a page.

- **Usage in Components**:
  - In a functional component, props are retrieved by defining a parameter.
  - This parameter (commonly named `props`) is used in the component's return statement.
  - Example:
      Definition on the page: 
      ```javascript
        function App() {
          return (
            <div className="App">
            <Hello name = "Bruce" heroName="Batman"></Hello>
            </div>
          );
      }
      ```
      Component:
      ```javascript
        export default function Hello(props) {
          return (
            <div className="dummyClass">
              <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            </div>
          );
      }
      ```

- **Convention**:
  - The parameter is conventionally named `props`.
  - `props` is an object containing the properties passed to the component.
  - Access specific data by referencing the property name.
    - For example, `props.name` accesses the `name` property.

- **Immutability**:
  - Properties are immutable.
  - This means they cannot be modified inside the component.



Sometimes we won't know what's the content is being passed in the compoenent. We can asccess it using the reserved method cildren. 

```javascript
  function App() {
    return (
      <div className="App">
      <Hello name = "Bruce" heroName="Batman">This is children props</Hello>
      </div>
    );
}
```

On class functions, we can access this props with the special word `this`:
```javascript
  export default  class Welcome extends Component {
    render() {
      return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
  }
```

## State
- State is managed within the compoenent
- Variables declared in the function body 
- Managed within the compoenent, state can be changed
- Can ba access:  
  - Functional Components: useState Hook 
  - Class Compoenents: this.state

## State in React Components

- **Overview**:
  - State is a set of variables that determine the behavior or output of a component.
  - It is managed within the component.

- **Characteristics**:
  - Unlike properties (props), state is mutable and can change over time.
  - State changes are typically used to trigger a re-render of the component.

- **Declaration**:
  - In functional components, state is declared using the `useState` Hook.
  - In class components, state is declared as `this.state`.

- **Usage**:
  - State variables are declared within the function or class body.
  - They can be updated to manage dynamic data within the component.

- **Examples**:
  - Functional Component using `useState`:
    ```javascript
      import React, { useState } from "react";

      export default function Message1 () {

        const [message, setMessage] = useState("Welcome");

          function change (){
            setMessage("Thank you using funciton");
          }

        return (
          <>
          <h1>{message}</h1>
          <button onClick={change}>Subscribe</button>
          </>
        );
      }
    ```
### useState
In React, the useState hook is used to add state to functional components. When we use useState, it returns an array with two elements, and we use array destructuring to get *Current State* and the *Setter Function*:
- **The Current State:** This is the current value of the state variable. 
- **A Setter Function:** This function is used to update the value of the state variable. 

`const [value, setValue] = setState(initialValue)`

**setValue** is a function that lets we safely update the state variable value. When we call setValue with a new value, it does two main things:
- Updates the State: It changes the value of message to the new value you provide.
- Triggers a Re-render: React then re-renders the component with the updated state. This is how your UI stays in sync with your state.

We can use a normal function as seen in the example: 
```javascript
function change (){
  setMessage("Thank you using funciton");
}
```
Also, we can define an anonymous function and assigning it to a constant. 
```javascript
const changeMessage2 = function() {
  setMessage("Thank you using function");
}
```
But a better idea is to use arrow funciton:
We can use the setValue, in that case setMessage, in an arrow funtion defined as changeMessage. This arrow funtion takes no parameters and uses the setMessage setter function to set the value of the message to a new text. 
```javascript
const changeMessage = () => {
  setMessage("Thank you using arrow function");
}
```


  - Class Component using `this.state`:
    ```javascript
      import React, { Component } from "react";

      export default class Message extends Component {
        constructor() {
          super();
          this.state = {
            message: "Welcome Visitor",
          };
        }
        changeMessage() {
          this.setState({
            message: "Thank you for"
          })
        }
        render() {
          return (
            <div>
              <h1>{this.state.message}</h1>
              <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
          );
        }
      }
  ```

We have to initialize the constructor with the super becasuse we are extending react componen class and the call has to be made to the base class constructor.
### setState


