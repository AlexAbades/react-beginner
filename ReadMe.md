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

### Class Component (Deprecated)
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

      **Object deconstruction** 
      We can deconstrunct an object by:
      ```javascript
      {param1, param2} = props
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
  - 1) **Functional Component using `useState`:**
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
  Alternative, we can define an anonymous function and assign it to a constant variable. 
  ```javascript
  const changeMessage2 = function() {
    setMessage("Thank you using function");
  }
  ```
  But a better idea is to use arrow funcitons, which is basically an anonymus funtion. We can use the setValue, in that case setMessage, in an arrow funtion defined as changeMessage. This arrow funtion takes no parameters and uses the setMessage setter function to set the value of the message to a new text. 
  ```javascript
  const changeMessage = () => {
    setMessage("Thank you using arrow function");
  }
  ```

## React Event Types

### UI Events
- **Description**: Events related to the user interface.
- **Examples**:
  - `onScroll`: Triggered when scrolling an element.

### Mouse Events
- **Description**: Common events triggered by mouse actions.
- **Examples**:
  - `onClick`: Fired when the element is clicked.
  - `onMouseOver`: Activated when the mouse pointer is moved over an element.
  - `onMouseOut`: Triggered when the mouse pointer moves out of an element.

### Form Events
- **Description**: Used in form elements.
- **Examples**:
  - `onChange`: Fired when the value of a form element gets changed.
  - `onSubmit`: Triggered when a form is submitted.
  - `onInput`: Fired when an input element receives user input.

### Keyboard Events
- **Description**: Handle keyboard inputs.
- **Examples**:
  - `onKeyDown`: Fired when a key is pressed down.
  - `onKeyPress`: Triggered when a key is pressed and released.
  - `onKeyUp`: Fired when a key is released.

### Touch Events
- **Description**: For touch screen interfaces.
- **Examples**:
  - `onTouchStart`: Fired when a touch is initiated.
  - `onTouchMove`: Triggered when a touch point is moved across the screen.
  - `onTouchEnd`: Fired when a touch point is removed from the screen.
  - `onTouchCancel`: Triggered when the touch is interrupted.

### Media Events
- **Description**: Used with video and audio elements.
- **Examples**:
  - `onPlay`: Fired when media playback is started.
  - `onPause`: Triggered when media playback is paused.
  - `onVolumeChange`: Fired when the volume changes.

### Image Events
- **Description**: Specifically for image elements.
- **Examples**:
  - `onLoad`: Triggered when an image has completed loading.
  - `onError`: Fired if an error occurs while loading an image.

### Animation and Transition Events
- **Description**: Handle CSS animations and transitions.
- **Examples**:
  - `onAnimationStart`: Fired when a CSS animation starts.
  - `onAnimationEnd`: Triggered when a CSS animation completes.
  - `onAnimationIteration`: Fired with each iteration of a CSS animation.
  - `onTransitionEnd`: Triggered when a CSS transition completes.

### Function invocations

In the context of React, especially when dealing with event handlers like `onClick`, functions are typically passed as references and not invoked directly at the time of rendering. This is because you want the function to be called in response to an event (like a click), not when the component is being rendered.

- **Purity and Side Effects**:
  - React's rendering process is meant to be pure and free of side effects. Invoking a function that updates the state directly in the JSX would violate this principle.

- **Preventing Unexpected Behavior**:
  - Direct invocation could lead to unexpected behavior, where the function gets called every time the component renders, rather than in response to a user action.

- **Control Over Function Execution**:
  - By passing the function reference, you ensure that the function is only executed in response to specific user interactions, giving you control over when state updates occur.

## React Components Hierarchy

### Parent Component
- **Description**: A component that encloses one or more other components within its JSX.
- **Functionality**:
  - Can pass data to its child components through props.
  - Controls the rendering of its children.
  - Manages the state that affects child components.
- **Role**: Acts as a container for other components.

```javascript
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
 const [count, setCount] = useState() ;
 return (
  <>
  <h1>This is a parent Component</h1>
  <h2>Count: {count}</h2>

  <ChildComponent setCount={setCount}></ChildComponent>

  </>
 )
}
```

The syntax setCount={setCount} is just a convention and for clarity. It means:

- setCount (left side): The prop name you are defining for the child component.
- setCount (right side): The function in the parent component that you are passing down.

### Child Component
- **Description**: Components that are rendered within a parent component.
- **Functionality**:
  - Can receive data from the parent through props.
  - Typically, they do not have direct knowledge about their parent component.
- **Characteristics**: 
  - Can be simple and reusable.
  - Allow nesting within different parent components as needed.

```javascript
import React from "react"

export default function ChildComponent({setCount}){
  return (
    <>
    <p>Child:</p>
    <button onClick={() => setCount(1)}>1</button>
    <button onClick={() => setCount(2)}>2</button>
    <button onClick={() => setCount(3)}>3</button>
    </>
  )
}
```
Above we are deconstructig the object that has been created with all the properties in the parent compoenent, in that case it's just one. To do it like this, we must deconstruct with the same name we've given the prop when defining it for the child component in the parent component.  
It's basically doing the bellow operation. 

```javascript
function ChildComponent(props) {
  const setCount = props.setCount;
  ...
}
```

Alternative, if we would like to change the name of our variable which is not a good practice, we could do it like: 

```javascript
export default function ChildComponent(params){
  const newName = params.setCount
  return 
}
```
Or we could deconstruc the object in the parameter place. 
```javascript
export default function ChildComponent({setCount:newName}){
  return 
}
```

### Conditional Rendering 
We can render text using a ternary operator. Nevertheless, we have to embed between {} the javascript expression. 

```
{isLoggedIn 
    ? <h1>Welcome Alex</h1>
    : <h1>Welcome Guest</h1>}
```

### List rendering 

### The `map` Method in React

The `map` method in React is a commonly used feature for rendering lists of elements. It leverages JavaScript's array methods to iterate over arrays and enables manipulation or transformation of array elements. In React, this is typically used for generating JSX elements based on array data.

**Key Points about `map` in React**

- **Iteration**:
  - The `map` method processes each element in an array sequentially.
  ```javascript
    var array1 = [1, 2, 3, 4, 5]
    const map1 = array1.map(x=> x*2)
    Output: 
    array1 = [1, 4, 6, 8, 10]
  ```

- **Transformation**:
  - It applies a function you define to each element, returning a new array with the transformed elements.

- **Rendering Lists**:
  - Within React's JSX, `map` is frequently used to create a list of elements.
  - Each element in the original array is transformed into a corresponding JSX element.

- **Key Prop**:
  - When using `map` to render lists, it's important to assign a unique "key" prop to each child element in the list. But it won't be accessible from the child
  - This key prop helps React in efficiently identifying changes to items in the list, such as additions, deletions, or modifications, which is crucial for performance optimization and state management.

We can see below an example of the map function with jsx:
```javascript
import React from "react";

export default function ({person}) {
  
  return (
    <>
    <h2>Hello my name is {person.name}. I am {person.age} and I am good at {person.skill}</h2>
    </>
  )
}
```
We always have to specify with curly brackets a javascript variable, every time what we are inside an html tag <>
```javascript
import React from "react";
import Person from "./Person";

export default function ListPerson() {
  const persons = [
    {
      _id: 0,
      name: "Alex",
      age: 28,
      skill: "Python + FullStack",
    },
    {
      _id: 1,
      name: "Laura",
      age: 28,
      skill: "Python + ReactNative + Preciosa",
    },
    {
      _id: 2,
      name: "Pau",
      age: 28,
      skill: "Scala",
    },
    {
      _id: 3,
      name: "Ferran",
      age: 27,
      skill: "FullStack",
    },
  ];

  const renderPerson = persons.map((person) => (
    <Person person={person} key={person._id}></Person>
  ));
  return <>{renderPerson}</>;
}

```

### Caution with Keys in React's List Rendering

When rendering lists in React using the `map` method, selecting an appropriate key for each list item is crucial. The key should be a unique identifier that helps React track which items have changed, been added, or removed.

#### Problem with Using Index as Key

- **Example Initial Render**:
  ```javascript
  <ul>
    <li key="0">1</li>
    <li key="1">2</li>
    <li key="2">3</li>
  </ul>
  ```
  Here, each li element has a key corresponding to its index in the array.

- **Issue When Adding an Element at the Beginning:**
 - If you add an element to the beginning of the list, the indices of all elements change.
 - React uses keys to identify elements. If keys are based on indices, React gets confused, leading to inefficient updates and potential bugs.
 - For example, adding an element to the start of the array [1, 2, 3] makes it [0, 1, 2, 3], but React sees the same keys and may not re-render as expected.
 
- **Incorrect Render After Adding an Element:**
  ```javascript
  <ul>
    <li key="0">1</li>
    <li key="1">2</li>
    <li key="2">3</li>
    <li key="3">3</li>
  </ul>
  ```
  This may lead to the last item not being rendered correctly, and the content not updating as expected.
  ## When to Use Index as Key

Utilizing the index as a key in React's list rendering is appropriate in specific scenarios:

- **Items Do Not Have a Unique ID**:
  - When the items in your list lack a stable, unique identifier, using the index as a fallback is a common approach.

- **Static Lists**:
  - For lists that are static and will not undergo changes (no items are added or removed), using indices as keys is generally safe.

- **Lists That Will Never Be Re-ordered**:
  - In cases where the list will remain in a fixed order and will not be sorted or rearranged, indices can be used as keys without major concerns.


## React Fragments Explained

Until now, we have been using the `<>` and `</>` symbolas. The `<>` and `</>` syntax is a shorthand for <React.Fragment> and </React.Fragment>. Both are equivalent, but the shorthand syntax is more concise.
A React Fragment is a common pattern used in React development for several key reasons:

### Returning Multiple Elements
- **Description**: React components must return a single root element. However, sometimes you might want to return multiple elements without adding an extra node to the DOM.
- **Solution**: Fragments come in handy as they let you group a list of children without adding extra nodes to the DOM.

### Cleaner DOM
- **Issue**: Using a regular `div` or another HTML element to wrap multiple elements can lead to an unnecessarily cluttered DOM.
- **Solution**: Fragments avoid this by not producing any real DOM element.

### Performance
- **Benefit**: Since fragments don't produce any real DOM element, they can be a performance enhancement over wrapping elements in an unnecessary `div`.

### Simplifying CSS and Layout
- **Problem**: Sometimes, wrapping elements in a `div` can mess up the desired layout or styling.
- **Solution**: Fragments help prevent this issue by not adding extra elements to the DOM.

## React `memo` - A Higher-Order Component for Optimization

React `memo` is a higher-order component (HOC) provided by React, designed specifically for optimizing functional components. It's utilized to prevent unnecessary re-renders of a component, thereby enhancing performance, particularly in scenarios where the component produces the same output with the same props.

### How React `memo` Works

- **Props Comparison**:
  - `React.memo` conducts a shallow comparison between the current props and the next props.
  - If the props remain unchanged, React will forego re-rendering the component and instead reuse the last rendered result.

- **Functional Components**:
  - This optimization technique is solely applicable to functional components.
  - Class components utilize other methods for optimization, such as `PureComponent` and `shouldComponentUpdate`.

- **Shallow Comparison**:
  - The default comparison in `React.memo` is shallow. It assesses if the top-level values of the props have altered.
  - This approach is typically adequate for primitive data types (e.g., strings, numbers, and booleans).
  - However, it may not function as intended with complex data types (like objects and arrays) if their content changes but their reference stays the same.

**Example**
```javascript
import React from "react";

function MemoComponent({ name }) {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

export default React.memo(MemoComponent);
```

## When to Use `React.memo`

### Appropriate Use Cases
- **Optimizing Frequent Re-renders**:
  - `React.memo` is particularly useful for components that consistently render the same output given identical props.
  - This scenario often arises in applications with large lists, complex datasets, or dynamic elements where performance optimization is a concern.

### Cautions with `React.memo`

**Potential Drawbacks**
- **Memory Overhead**:
  - Excessive use of `React.memo` can result in increased memory usage. This is because `React.memo` retains the last render result for comparison.
  - It is advisable to apply `React.memo` selectively, particularly in situations where performance improvements are clearly evident.

- **Limitation in Scope**:
  - `React.memo` does not inhibit re-renders triggered by changes in the component's own state or context.
  - Its effectiveness is limited to prop changes, so it's important to consider the source of component updates when deciding to use `React.memo`.


## React Portals

React Portals offer a way to render children into a DOM node that exists outside the parent component's DOM hierarchy. They are particularly useful for breaking out of the regular DOM flow.

### Parameters

- **children**: 
  - Description: This can be anything that React can render. 
  - Types: Includes JSX elements (e.g., `<div />` or `<SomeComponent />`), a Fragment (`<>...</>`), a string, a number, or an array of these.

- **domNode**: 
  - Description: A specific DOM node where the portal should be rendered. 
  - Requirement: This node must already exist in the DOM. 
  - Note: If a different DOM node is passed during an update, the portal content will be recreated in the new location.

- **optional key**: 
  - Description: A unique identifier for the portal. 
  - Types: Can be a string or a number.

### Event Propagation and Context

- Despite the component being rendered in a different part of the DOM, events fired from inside a portal will propagate to the ancestors in the containing React tree.
- This implies that context and event bubbling function as expected, maintaining consistency with the parent tree, even if the DOM structure might suggest a disconnection.
Example: 


When we are rendering children inside parents, they inherit the css styles, sometimes rendering models outside the DOM tree can be usefull.  
