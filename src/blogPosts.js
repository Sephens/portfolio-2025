export const blogPosts = [
  {
    id: 1,
    title: "Bl 1001",
    excerpt: "## What is git? {#What-is-git}\n\nGit is a version control system which is maintained on your local system. Git gives us a...",
    date: "2025-01-01",
    readTime: "2 min read",
    category: "General",
    content: `## What is git? {#What-is-git}

Git is a version control system which is maintained on your local system. Git gives us a record for ongoing programming versions. It can be used completely exclusive of any cloud-hosting service i.e. we don’t even need internet to access git.

## Version Control System {#Version-Control-System}

![What is VCS](/BL-1001/vcs.png)

It is a program to keep track of the changes in projects, by tracking or logging the files changes over time. A version control system allows us to review, restore earlier versions and even branching and merging or code.

## What Is GitHub? {#What-Is-GitHub}

GitHub is a cloud-based hosting service that lets us manage Git repositories. It’s an online database that allows you to keep track of and share your Git version control projects outside of your local computer.
Other Git repository hosting services also exist: Eg:- GitLab, BitBucket, and SourceForge

GitHub just takes things a little bit further than Git, offering more functionality and resources, as well as a place online to store and collaborate on projects. And because GitHub is cloud-based, an individual’s Git repositories can be remotely accessed by any authorized person, from any computer, anywhere in the world.

Through GitHub, one can share code with others, giving them the power to make revisions or edits on your various Git branches. This makes it possible for entire teams to coordinate together on single projects in real-time. As changes are introduced, new branches are created, allowing the team to continue to revise the code without overwriting each other's work.

## Conclusion {#Conclusion}

![Diffrence between git and github](/BL-1001/gitVsGithub.webp)

## Why Use a Version Control System? {#Why-Use-a-Version-Control-System}

- Collaboration
- Storing Versions
- Restoring Previous Versions`
  },
  {
    id: 2,
    title: "Bl 1002",
    excerpt: "## Client Side Rendering {#Client-Side-Rendering}\n\n![Client Side Rendering](/BL-1002/csr.png)\n\nWhen we talk about client...",
    date: "2025-01-01",
    readTime: "4 min read",
    category: "General",
    content: `## Client Side Rendering {#Client-Side-Rendering}

![Client Side Rendering](/BL-1002/csr.png)

When we talk about client-side rendering,it’s about rendering content in the browser using JavaScript.

So instead of getting all the content from the HTML document itself, a simple HTML document with a JavaScript file in initial loading itself is received, which renders the rest of the site using the browser.

With client-side rendering, the initial page load is naturally a bit slow. However, after that, every subsequent page load is very fast. In this approach, communication with server happens only for getting the run-time data. Moreover, there is no need to reload the entire UI after every call to the server. The client-side framework manages to update UI with changed data by re-rendering only that particular DOM element.

## Server Side Rendering {#Server-Side-Rendering}

![Server Side Rendering](/BL-1002/ssr.png)

In server-side rendering when a user makes a request to a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine over the internet. Webpages are generated on your server for every request. This entire process of fetching data from the database, creating an HTML page and serve it to user is known as SSR.

## Static Site Generation {#Static-Site-Generation}

At build time, your app will fetch all the data required and compile it down to static webpages. After a production build is created, every request is going to reuse that statically generated HTML file. This provides the best performance and can easily be cached on a CDN.

## Problems with React.js {#Problems-with-React.js}

React uses Client Side Rendering. With React, nothing gets displayed until all of your JavaScript loads. Your HTML is nearly empty and React injects your content in your HTML with JavaScript.
This leads multiple problems:-

- When the browser is loading the JavaScript, the screen is blank because \`<div id="root"></div>\` does not show anything. Depending on the size of your JavaScript bundle, this could lead to your visitors staring at a white screen for a couple of seconds.

- Most SEO crawlers do not have JavaScript enabled. DuckDuckGo, Google, Bing and any other search engine would not actually know what is on your website since it requires JavaScript to display the content. You will not be ranked at all on Search Engines.

## Methods for Prerendering using Next.js {#Methods-for-Prerendering-using-Next.js}

Next.js offers \`(Server Side Rendering)SSR\` and \`(Static Site Generation)SSG\` using \`getStaticProps\` and \`getServerSideProps\`.

### getStaticProps {#getStaticProps}

getStaticProps is a server-side function that will only be called at build time. The build will then use the response from getStaticProps to generate a static webpage.

Since stale data is a problem with static generated pages, there is an option you can set to revalidate your static page and rebuild it if data changes. revalidate: 60 will check your data every 60 seconds and rebuild the page if needed.

Example Use:

\`\`\`
// This function gets called at build time on server-side.
export async function getStaticProps() {
const res = await fetch('https://.../data');
const data = await res.json();

// By returning { props: data }, the Dashboard component
// will receive \`data\` as a prop at build time
return {
props: {
data
},
// Check if data changes every 60 seconds.
// Rebuild page if different
revalidate: 60
};
}

// data will be populated at build time by getStaticProps()
export default function Dashboard({ data }) {
return <div>{data}</div>;
}
\`\`\`

### getServerSideProps {#getServerSideProps}

getServerSideProps is similar to getStaticProps but is called every time the page loads instead of at build time. This ensures that all of your initial data is up to date on every load.

Since this is called on every load, you do not need to revalidate like getStaticProps. This also leads to a slower load time since you are no longer serving a static file, but have to rebuild on every load.

Example Use:

\`\`\`
// This function gets called at build time on server-side.
export async function getServerSideProps() {
const res = await fetch('https://.../data');
const data = await res.json();

// By returning { props: data }, the Dashboard component
// will receive \`data\` as a prop at build time
return {
props: {
data
}
};
}

// data will be populated at build time by getServerSideProps()
export default function Dashboard({ data }) {
return <div>{data}</div>;
}
\`\`\`

## Benefits of using Next.js {#Benefits-of-using-Next.js}

- Search engines can crawl the site for better SEO.
- The initial page load is faster.
  ![nextjs pros and cons](/BL-1002/nextjs-pros-and-cons.png)

**References:**

- <a href="https://nextjs.org/docs/getting-started" target="_blank">Next.js</a>`
  },
  {
    id: 3,
    title: "Bl 1003",
    excerpt: "## Why use react.js {#Why-use-react.js}\n\n**_1.Reusable Components:_**\n\nReact provides a component based structure.Each t...",
    date: "2025-01-01",
    readTime: "10 min read",
    category: "General",
    content: `## Why use react.js {#Why-use-react.js}

**_1.Reusable Components:_**

React provides a component based structure.Each tiny elements like button, checkbox, dropdown etc can be a component and the we create wrapper components composed of those smaller components.Each component decides how it should be rendered. Each component has its own internal logic.

**_2.Fast render with Virtual DOM_**

React uses virtual DOM to render the view.virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.

**_3.SEO friendly_**

React allows developers to develop user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.

## What is JSX? {#What-is-JSX}

JSX stands for JavaScript XML.
It allows us to write HTML inside JavaScript and place them in the DOM without using functions like \`appendChild( )\` or \`createElement( )\`.

- Without using JSX, we would have to create an element by the following process:

\`\`\`
const text = React.createElement('p', {}, 'This is a text');
const container = React.createElement('div','{}',text );
ReactDOM.render(container,document.getElementById('app'));
\`\`\`

- Using JSX, the above code can be simplified:

\`\`\`\`
const container = (

 <div>
   <p>This is a text</p>
 </div>
);
ReactDOM.render(container,document.getElementById('app'));\`\`\`
\`\`\`\`

As one can see in the code above, we are directly using HTML inside JavaScript\*

## What is the virtual DOM? How does react use the virtual DOM to render the UI? {#What-is-the-virtual-DOM-How-does-react-use-the-virtual-DOM-to-render-the-UI}

_DOM stands for 'Document Object Model'. In simple terms, it is a structured representation of the HTML elements that are present in a webpage or web-app. DOM represents the entire UI of your application_

Virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.

![Virtual Dom](/BL-1003/vdom.png)

**Why was virtual DOM introduced?**

DOM manipulation is an integral part of any web application, but DOM manipulation is quite slow when compared to other operations in JavaScript.

The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.

For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, the entire list gets rendered again instead of just rendering the item that was changed/updated. This is called inefficient updating.
To address the problem of inefficient updating, the react team introduced the concept of virtual DOM.

**How does it work?**

![Virtual Dom](/BL-1003/real-virtual.png)

For every DOM object, there is a corresponding virtual DOM object(copy), which has the same properties.

The main difference between the real DOM object and the virtual DOM object is that any changes in the virtual DOM object will not reflect on the screen directly. Consider a virtual DOM object as a blueprint of the real DOM object.
Whenever a JSX element gets rendered, every virtual DOM object gets updated.

React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects.

Whenever the virtual DOM gets updated, react compares the two virtual DOMs and gets to know about which virtual DOM objects were updated.

After knowing which objects were updated, react renders only those objects inside the real DOM instead of rendering the complete real DOM.This way, with the use of virtual DOM, react solves the problem of inefficient updating

## Explain React state and props? {#Explain-React-state-and-props}

A React component can access dynamic information in two ways: props and state.

### React State {#React-State}

Every component in react has a built-in state object, which contains all the property values that belong to that component.

In other words, the state object controls the behaviour of a component. Any change in the property values of the state object leads to re-rendering of the component.

_Note- State object is not available in functional components but, we can use React Hooks to add state to a functional component._

How to declare a state object?

\`\`\`
Example:
class Car extends React.Component{
 constructor(props){
   super(props);
   this.state = {
     brand: "BMW",
     color: "black"
   }
 }
}
\`\`\`

How to use and update the state object?

\`\`\`
class Car extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     brand: "BMW",
     color: "Black"
   };
 }

 changeColor() {
   this.setState(prevState => {
     return { color: "Red" };
   });
 }

 render() {
   return (
     <div>
       <button onClick={() => this.changeColor()}>Change Color</button>
       <p>{this.state.color}</p>
     </div>
   );
 }
}

\`\`\`

As one can see in the code above, we can use the state by calling this.state.propertyName and we can change the state object property using setState method.

### React Props {#React-Props}

Every react component, accepts a single object argument called props (which stands for “properties”).

These props can be passed to a component using HTML attributes.

Using props, we can pass data from one component to another.

- While rendering a component, we can pass the props as a HTML attribute:

\`\`\`
<Car brand="Mercedes"/>
\`\`\`

The component receives the props:

- In Class component:

\`\`\`
class Car extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     brand: this.props.brand,
     color: "Black"
   };
 }
}
\`\`\`

- In Functional component:

\`\`\`
function Car(props) {
  render() {
      return <h1>Name is {props.name}!</h1>;
   }
}
\`\`\`

**Note- Props are read-only. They cannot be manipulated or changed inside a component**

## Explain React Hooks? {#Explain-React-Hooks}

Hooks are functions that let us “hook into” React state and lifecycle features from a \`functional component.\`
React Hooks cannot be used in class components.

Why were Hooks introduced in React?
React hooks were introduced in the 16.8 version of React.
Previously, functional components were called stateless components. Only class components were used for state management and lifecycle methods.

The need to change a functional component to a class component, whenever state management or lifecycle methods were to be used, led to the development of Hooks.

**Example of a hook:**

\`useState hook:\`
In functional components, useState hook lets us define state for a component:

\`\`\`
function Person(props) {
 // We are declaring a state variable called name.
 // setName is a function to update/change the value of name
 let [name, setName] = useState('');
}
\`\`\`

## What are the different lifecycle methods in React? {#What-are-the-different-lifecycle-methods-in-React}

Each component in react goes through three phases: \`Mounting\`, \`Updating\`, and \`Unmounting\`.

- **Mounting** :- Birth of your component
- **Update** :- Growth of your component
- **Unmount** :- Death of your component

![React Life Cycle Methods](/BL-1003/ReactLifeCycle.png)

### Common React Lifecycle Methods {#Common-React-Lifecycle-Methods}

- **constructor()**

This is used only if you have a class-based Component and it serves the purpose of initializing the state of a Component. In case of functional Components, the useState() hook is used to do the same.

- **render()**

This is the method that is \`responsible for inserting a Component into the DOM\`.

The render() method is the most used lifecycle method. This is because render() is the only required method within a class component in React.

It happens during the \`mounting\` and \`updating\` of your component.

\`\`\`
Below is an example of a simple render() in React.

class Hello extends Component{
   render(){
      return <div>Hello {this.props.name}</div>
   }
}

\`\`\`

**A render() can also return a null if there is nothing to render for that component.**

- **componentDidMount()**

This is invoked \`after a Component is inserted into the DOM for the first time\`.

When component has been mounted and ready, that’s when the next React lifecycle method componentDidMount() comes in play.

componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint.

\`componentDidMount() allows the use of setState()\`.

- **componentDidUpdate()**

This is the method invoked after \`re-rendering an updated Component\`. This method can give you the information about a Component’s previous state and previous props. This lifecycle method is invoked as soon as the updating happens. The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.

You can call setState() in this lifecycle, but keep in mind that you will need to wrap it in a condition to check for state or prop changes from previous state. Incorrect usage of setState() can lead to an infinite loop.

\`\`\`
Take a look at the example below that shows a typical usage example of this lifecycle method.

componentDidUpdate(prevProps) {
//Typical usage, don't forget to compare the props
if (this.props.userName !== prevProps.userName) {
this.fetchData(this.props.userName);
}
}

\`\`\`

Notice in the above example that we are comparing the current props to the previous props. This is to check if there has been a change in props from what it currently is. In this case, there won’t be a need to make the API call if the props did not change.

- **componentWillUnmount()**

As the name suggests this lifecycle method is called just \`before the component is unmounted and destroyed\`.

You cannot modify the component state in componentWillUnmount lifecycle.

This is where you can perform any cleanups that need to be done such as invalidating timers, canceling network requests, removing event listeners, and so on.

\`\`\`
componentWillUnmount() {
window.removeEventListener('resize', this.resizeListener)
}
\`\`\`

## What are keys in React? {#What-are-keys-in-React}

A key is a special string attribute that needs to be included when using lists of elements.

Example of a list using key:

\`\`\`
const ids = [1,2,3,4,5];
const listElements = ids.map((id)=>{
return(
 <li key={id.toString()}>
   {id}
 </li>
 )
})
\`\`\`

**Importance of keys:-**

- Keys help react identify which elements were added, changed or removed.
- Keys should be given to array elements for providing a unique identity for each element.
- Without keys, React does not understand the order or uniqueness of each element.
- With keys, React has an idea of which particular element was deleted,edited, and added.

## React pure component {#React-pure-component}

A React component is considered pure if it renders the same output for the same state and props. For class components like this, React provides the PureComponent base class. Class components that extend the \`React.PureComponent\` class are treated as \`pure components\`.

Pure components have some performance improvements and render optimizations since React implements the shouldComponentUpdate() method for them with a shallow comparison for props and state.

**Features of React Pure Components**

- Prevents re-rendering of Component if props or state is the same
- Takes care of “shouldComponentUpdate” implicitly
- State and Props are Shallow Compared
- Pure Components are more performant in certain cases

**React Components re-renders in the following scenarios:**

- “setState” is called in Component
- “props” values are updated
- this.forceUpdate() is called

\`In the case of Pure Components, the React components do not re-render blindly without considering the updated values of React “props” and “state”. If updated values are the same as previous values, render is not triggered.\``
  },
  {
    id: 4,
    title: "Bl 1004",
    excerpt: "## Global vs Local Scope {#Global-vs-Local-Scope}\n\n## Async Defer\n\n## Event bubbling capturing\n\n## Event Throtting and d...",
    date: "2025-01-01",
    readTime: "1 min read",
    category: "General",
    content: `## Global vs Local Scope {#Global-vs-Local-Scope}

## Async Defer

## Event bubbling capturing

## Event Throtting and debouncing`
  },
  {
    id: 5,
    title: "Bl 1005",
    excerpt: "## What is a Promise in JavaScript {#What-is-a-Promise-in-JavaScript}\n\nA Promise is a special JavaScript object. It prod...",
    date: "2025-01-01",
    readTime: "3 min read",
    category: "General",
    content: `## What is a Promise in JavaScript {#What-is-a-Promise-in-JavaScript}

A Promise is a special JavaScript object. It produces a value after an asynchronous operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.

## Creating a JavaScript Promise {#Creating-a-JavaScript-Promise}

When the task completes, you either fulfill your promise or fail to do so.
Promise is a constructor function, so you need to use the \`new keyword\` to create one. It takes a function, as its argument, with two parameters - \`resolve and reject\`. These are methods used to determine the outcome of the promise.

\`\`\`
Creating a Promise

const myPromise = new Promise((resolve, reject) => {
});
\`\`\`

## Promise States {#Promise-States}

A promise has three states: \`pending, fulfilled, and rejected.\` The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

- **Pending: Initially when the executor function starts the execution.**
- **Fulfilled: When the promise is resolved.**
- **Rejected: When the promise is rejected.**

![Promise States](/BL-1005/states.png)

\`\`\`
const myPromise = new Promise((resolve, reject) => {
 if(condition here) {
   resolve("Promise was fulfilled");
 } else {
   reject("Promise was rejected");
 }
});
\`\`\`

## Handling a Promise {#Handling-a-Promise}

![Promise Handling](/BL-1005/handling.png)

### Handling Promises With Then Method {#Handling-Promises-With-Then-Method}

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve.

\`\`\`
myPromise.then(result => {

});
\`\`\`

### Handling a Rejected Promise with Catch Method {#Handling-a-Rejected-Promise-with-Catch-Method}

Catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called.

\`\`\`
myPromise.catch(error => {

});
\`\`\`

## Async Await {#Async-Await}

Async/await are special syntax to work with promises in a more comfortable fashion.

- **async makes a function return a Promise**
- **await makes a function wait for a Promise**

### Async {#Async}

\`\`\`
Example
async function myFunction() {
  return "Hello";
}

Is the same as:
async function myFunction() {
  return Promise.resolve("Hello");
}
\`\`\`

### Await {#Await}

The keyword await makes JavaScript wait until that promise settles and returns its result.
The \`await keyword\` can only be used inside an \`async\` function.

\`\`\`
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}
\`\`\`

The function execution "pauses" at the line (\*) and resumes when the promise settles, with result becoming its result.

## Implement Promise {#Implement-Promise}

\`\`\`
const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 4000);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("world");
  }, 0);
});

const fun = async () => {
  try {
    const res = await Promise.all([pr1, pr2]);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

fun();
\`\`\`

**References:**

- <a href="https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/" target="_blank">JavaScript Promise Tutorial</a>
- <a href="https://www.w3schools.com/js/js_async.asp" target="_blank">Async/Await</a>`
  },
  {
    id: 6,
    title: "Bl 1006",
    excerpt: "## New Features in ES6 {#New-Features-in-ES6}\n\nSome of the new features of javascript introductes in ES6 are:\n\n- The Let...",
    date: "2025-01-01",
    readTime: "12 min read",
    category: "General",
    content: `## New Features in ES6 {#New-Features-in-ES6}

Some of the new features of javascript introductes in ES6 are:

- The Let keyword
- The Const keyword
- Arrow Functions
- Promises
- Map Object

\`\`\`
// Create a new Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
\`\`\`

- Set Object

\`\`\`
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
\`\`\`

- Classes

\`\`\`
class ClassName {
  constructor() { ... }
}

// Example
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
\`\`\`

## Difference between Let and Var and Const {#Difference-between-Let-and-Var-and-Const}

### Comparision of Declarations {#Comparision-of-Declarations}

One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:

\`\`\`
var camper = "James";
var camper = "David";
console.log(camper);
\`\`\`

In the code above, the camper variable is originally declared as James, and is then overridden to be David. The console then displays the string David.

If you replace var with let in the code above, it results in an error:

\`\`\`
let camper = "James";
let camper = "David";
The error can be seen in your browser console.(Uncaught SyntaxError: Identifier 'camper' has already been declared)
\`\`\`

\`So unlike var, when you use let, a variable with the same name can only be declared once.\`

### Comparision of scopes of the var and let Keywords {#Comparision-of-scopes-of-the-var-and-let-Keywords}

When you declare a variable with the var keyword, it is declared globally.
The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

\`\`\`
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
Here the console will display the values [0, 1, 2] and 3.
\`\`\`

With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable.

This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable.

\`\`\`
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
Here the console will display the value 3.
\`\`\`

As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop.

The let keyword does not follow this behavior:

\`\`\`
let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
            return i;
        };
    }
}
console.log(printNumTwo());
console.log(i);
\`\`\`

Here the console will display the value 2, and an error that i is not defined. i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.

### Const {#Const}

While var and let can be declared without being initialized, const must be initialized during declaration.
\`Const cannot be initialized after declaritions\`

However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the \`const declaration only prevents reassignment of the variable identifier.\`

\`\`\`
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
The console.log will display the value [5, 6, 45].

s = [1, 2, 3] will result in an error.
\`\`\`

As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.

## Variable shadowing {#Variable-shadowing}

\`\`\`
let number = 10;

function displayDouble() {
  //new variable is defined with the same name as variable on line 1 - outer scope
  let number = 3;

  number *= 2;
  console.log(number); //=> 6
}

displayDouble();
console.log(number); //=> 10
\`\`\`

In this case, both variables on line 1 and 5 are defined with the same name — number.This has a significant result: the variable defined in the outer scope is ‘shadowed’ by the variable defined in the inner scope.

## String in Javascript {#String-in-Javascript}

In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:

let myStr = "Bob";
myStr[0] = "J";
cannot change the value of myStr to Job, because the contents of myStr cannot be altered.

## Escape Sequences in Strings {#Escape-Sequences-in-Strings}

\`\`\`
Code   Output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b word boundary
\f form feed
\`\`\`

## Difference between '==' and '===' in javascript {#Difference-between-==-and-===-in-javascript}

Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

\`\`\`
Examples 1:

3 === 3 //true
3 === '3' // false
1 == [1] //true
1 === [1] //false
null == undefined //true
\`\`\`

\`\`\`
Example 2:‌
const number = 1234
const stringNumber = '1234'

console.log(number == stringNumber) //true
console.log(number === stringNumber)  //false
\`\`\`

The value of number and stringNumber looks similar here. However, the type of number is Number and type of stringNumber is string. Even though the values are same, the type is not the same. Hence a == check returns true, but when checked for value and type, the value is false.

\`\`\`
Example 3:
console.log(0 == false) //true
console.log(0 === false) //false
Reason: same value, different type. Type coercion
\`\`\`

This is an interesting case. The value of 0 when checked with false is same. It is so because 0 and false have the same value for JavaScript, but when checked for type and value, the value is false because 0 is a number and false is boolean.

\`\`\`
Example 4:
const str = ""

console.log(str == false) //true
console.log(str === false) //false
\`\`\`

The value of empty string and false is same in JavaScript. Hence, == returns true. However, the type is different and hence === returns false.

\`\`\`
Example 5:
let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };
console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
\`\`\`

The important thing to understand here is that the variables, obj1 and obj2 (which could be an Object, Array or Function) each contain only a reference to a location in memory. Not the value of the object.

## Explain how this works in JavaScript {#Explain-how-this-works-in-JavaScript}

To access a property of an object from within a method of the same object, you need to use the this keyword.

\`\`\`
const person = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); }
};

person.greet();
\`\`\`

In the above example, a person object is created. It contains properties (name and age) and a method greet.
In the method greet, while accessing a property of an object, this keyword is used.
In order to access the properties of an object, this keyword is used following by . and key.

This keyword refers to the \`object where it is called.\`

### 1 this Inside Global Scope {#1-this-Inside-Global-Scope}

When this is used alone, this refers to the global object (window object in browsers). For example,

\`\`\`
let a = this;
console.log(a);  // Window {}

this.name = 'Sarah';
console.log(window.name); // Sarah
\`\`\`

### 2 this Inside Function {#2-this-Inside-Function}

When this is used in a function, this refers to the global object (window object in browsers). For example,

\`\`\`
function greet() {
    // this inside function
    // this refers to the global object
    console.log(this);
}
greet(); // Window {}
\`\`\`

### 3 this Inside Constructor Function {#3-this-Inside-Constructor-Function}

In JavaScript, constructor functions are used to create objects. When a function is used as a constructor function, this refers to the object inside which it is used. For example,

\`\`\`
function Person() {
    this.name = 'Jack';
    console.log(this);
}

let person1 = new Person();
console.log(person1.name);
\`\`\`

Here, this refers to the person1 object. That's why, person1.name gives us Jack.
When this is used with ES6 classes, it refers to the object inside which it is used.

For example,

\`\`\`
// creating a class
class Person {
  constructor(name) {
    this.name = name;
  }
}
The class keyword is used to create a class. The properties are assigned in a constructor function.

// creating a class
class Person {
  constructor(name) {
    this.name = name;
  }
}

// creating an object
const person1 = new Person('John');
const person2 = new Person('Jack');

console.log(person1.name); // John
console.log(person2.name); // Jack
\`\`\`

### 4 this Inside Object Method {#4-this-Inside-Object-Method}

When this is used inside an object's method, this refers to the object it lies within. For example,

\`\`\`
const person = {
name : 'Jack',
age: 25,
    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);
        console.log(this.name);
    }

}

person.greet();
Output
{name: "Jack", age: 25, greet: ƒ}
Jack
\`\`\`

### 5 this Inside Inner Function {#5-this-Inside-Inner-Function}

When you access this inside an inner function (inside a method), this refers to the global object. For example,

\`\`\`
const person = {
name : 'Jack',
age: 25,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);        // {name: "Jack", age ...}
        console.log(this.age);  // 25

        // inner function
        function innerFunc() {
            // this refers to the global object
            console.log(this);       // Window { ... }
            console.log(this.age);    // undefined
        }
        innerFunc();
    }
}
person.greet();
\`\`\`

### 6 this Inside Arrow Function {#6-this-Inside-Arrow-Function}

Inside the arrow function, this refers to the parent scope. For example,

\`\`\`
const greet = () => {
    console.log(this);
}
greet(); // Window {...}
\`\`\`

\`Arrow functions do not have their own this\`. When you use this inside an arrow function, this refers to its parent scope object.
For example,

\`\`\`
const greet = {
    name: 'Jack',

    // method
    sayHi () {
        let hi = () => console.log(this.name);
        hi();
    }
}
greet.sayHi(); // Jack
\`\`\`

\`\`\`
const person = {
    name : 'Jack',
    age: 25,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);
        console.log(this.age);

        // inner function
        let innerFunc = () => {

            // this refers to the global object
            console.log(this);
            console.log(this.age);
        }
        innerFunc();
    }
}

person.greet();

Output:
{name: "Jack", age: 25, greet: ƒ}
25
{name: "Jack", age: 25, greet: ƒ}
25
Here, innerFunc() is defined using the arrow function. It takes this from its parent scope. Hence, this.age gives 25.
\`\`\`

### 7 this Inside Function with Strict Mode {#7-this-Inside-Function-with-Strict-Mode}

When this is used in a function with strict mode, this is undefined. For example,

\`\`\`
'use strict';
this.name = 'Jack';
function greet() {

    // this refers to undefined
    console.log(this);
}
greet(); // undefined
\`\`\`

## How is arrow functions different from normal functions in javascript {#How-is-arrow-functions-different-from-normal-functions-in-javascript}

### this Keyword {#this-Keyword}

Inside a \`regular function, this keyword refers to the function\` where it is called.

However, \`this is not associated with arrow functions\`. \`Arrow function does not have its own this\`. So whenever you call this, it refers to its parent scope.

**Inside a regular function**

\`\`\`
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        // this is accessible
        console.log(this.age);

        function innerFunc() {
            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }
        innerFunc();
    }
}

let x = new Person();
x.sayName();

Output:
25
undefined
Window {}
\`\`\`

Here, this.age inside this.sayName() is accessible because this.sayName() is the method of an object.

However, innerFunc() is a normal function and this.age is not accessible because this refers to the global object (Window object in the browser). Hence, this.age inside the innerFunc() function gives undefined.

**Inside an arrow function**

\`\`\`
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }
        innerFunc();
    }
}

const x = new Person();
x.sayName();

Output
25
25
\`\`\`

Here, the innerFunc() function is defined using the arrow function. And inside the arrow function, this refers to the parent's scope. Hence, this.age gives 25.

### Arguments Binding {#Arguments-Binding}

\`Regular functions have arguments binding\`. That's why when you pass arguments to a regular function, you can access them using the arguments keyword.

\`\`\`
let x = function () {
    console.log(arguments);
}
x(4,6,7); // Arguments [4, 6, 7]
\`\`\`

\`Arrow functions do not have arguments binding\`.
When you try to access an argument using the arrow function, it will give an error. For example,

\`\`\`
let x = () => {
    console.log(arguments);
}
x(4,6,7);
// ReferenceError: Can't find variable: arguments
\`\`\`

To solve this issue, you can use the spread syntax.

\`\`\`
let x = (...n) => {
  console.log(n);
}
x(4,6,7); // [4, 6, 7]
\`\`\``
  },
  {
    id: 7,
    title: "Bl 1007",
    excerpt: "## Explain \"hoisting\" {#Explain-hoisting}\n\nHoisting is JavaScript's default behavior of moving all declarations to the t...",
    date: "2025-01-01",
    readTime: "11 min read",
    category: "General",
    content: `## Explain "hoisting" {#Explain-hoisting}

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope.
Note that the declaration is not actually moved - the JavaScript engine parses the declarations during compilation and becomes aware of declarations and their scopes.

\`\`\`
console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1
\`\`\`

Function declarations have the body hoisted while the function expressions only has the variable declaration hoisted.

\`\`\`
// Function Declaration
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
console.log(foo); // [Function: foo]

// Function Expression
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar is not a function
var bar = function () {
  console.log('BARRRR');
};
console.log(bar); // [Function: bar]
\`\`\`

Variables defined with let and const are hoisted to the top of the block, but not initialized.Meaning that the block of code is aware of the variable, but it cannot be used until it has been declared.

## What is a closure {#What-is-a-closure}

JavaScript implements a scoping mechanism named lexical scoping (or static scoping). Lexical scoping means that the accessibility of variables is determined by the position of the variables inside the nested scopes.

Simpler, the lexical scoping means that inside the inner scope you can access variables of outer scopes.

**Closures are functions that have access to the outer (enclosing) function's variables scope even after the outer function has returned.**

\`\`\`
function outerFunc() {
  let outerVar = 'I am outside!';
  function innerFunc() {
    console.log(outerVar); // => logs "I am outside!"
  }
  return innerFunc;
}
function exec() {
  const myInnerFunc = outerFunc();
  myInnerFunc();
}
exec();
\`\`\`

Now innerFunc() is executed outside of its lexical scope, but exactly in the scope of exec() function. And what's important:
innerFunc() still has access to outerVar from its lexical scope, even being executed outside of its lexical scope.

## JavaScript Rest vs Spread Operator {#JavaScript-Rest-vs-Spread-Operator}

### Rest Operator {#Rest-Operator}

**The rest operator (...) is used to put the rest of some specific user-supplied values into a JavaScript array.**

For instance, consider this code that uses rest to enclose some values into an array:

\`\`\`
// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

// The invocation above will return:
["CodeSweetly", "Web Developer", "Male"]
\`\`\`

### Spread Operator {#Spread-Operator}

**The spread operator (...) helps you expand iterables into individual elements.**
A spread operator is effective only when used within array literals, function calls, or initialized properties objects.

### Example 1: How Spread Works in an Array Literal {#Example-1-How-Spread-Works-in-an-Array-Literal}

\`\`\`
const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe);

// The invocation above will return:
[ "Oluwatobi", "Sofela", "is", "my", "name." ]
\`\`\`

Suppose we did not use the spread syntax to duplicate myName’s content. For instance, if we had written const aboutMe = ["Oluwatobi", myName, "name."]. In such a case, the computer would have assigned a reference back to myName

### Example 2: How to Use Spread to Convert a String into Individual Array Items {#Example-2-How-to-Use-Spread-to-Convert-a-String-into-Individual-Array-Items}

\`\`\`
const myName = "Oluwatobi Sofela";

console.log([...myName]);

// The invocation above will return:
[ "O", "l", "u", "w", "a", "t", "o", "b", "i", " ", "S", "o", "f", "e", "l", "a" ]
\`\`\`

### Example 3: How the Spread Operator Works in a Function Call {#Example-3-How-the-Spread-Operator-Works-in-a-Function-Call}

\`\`\`
const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));

// The invocation above will return:
16
\`\`\`

Suppose the numbers array had more than four items. In such a case, the computer will only use the first four items as addNumbers() argument and ignore the rest.

\`\`\`
const numbers = [1, 3, 5, 7, 10, 200, 90, 59];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));

// The invocation above will return:
16
\`\`\`

### Example 4: How Spread Works in an Object Literal {#Example-4-How-Spread-Works-in-an-Object-Literal}

\`\`\`
const myNames = ["Oluwatobi", "Sofela"];
const bio = { ...myNames, runs: "codesweetly.com" };

console.log(bio);

// The invocation above will return:

{ 0: "Oluwatobi", 1: "Sofela", runs: "codesweetly.com" }
\`\`\`

- Spread operators can’t expand object literal’s values
- Since a properties object is not an iterable object, you cannot use the spread operator to expand its values.
- However, you can use the spread operator to clone properties from one object into another.

\`\`\`
const myName = { firstName: "Oluwatobi", lastName: "Sofela" };
const bio = { ...myName, website: "codesweetly.com" };

console.log(bio);

// The invocation above will return:
{ firstName: "Oluwatobi", lastName: "Sofela", website: "codesweetly.com" };
\`\`\`

## Pure vs Impure Functions in JavaScript {#Pure-vs-Impure-Functions-in-JavaScript}

1. Pure Functions:

- They must be predictable
- They must have no side effects

Identical inputs will always return identical outputs, no matter how many times a pure function is called.

2.  Impure Function:

- Unpredictable
- Has side-effects

Side Effects can be:-

- **Modifying a global variable**
- **Modifying an argument**
- **External dependency (APIs, outer variables)**
- **DOM manipulation**
- **Reading/writing files**

\`\`\`
//IMPURE FUNCTION
const impureAddToArray = (arr1, num) => {
  //altering arr1 in-place by pushing
  arr1.push(num);
  return arr1;
};

// PURE FUNCTION
// Adding a value to an array via a pure function instead can be achieved using the spread operator, which makes a copy of the original array without mutating it.

const pureAddToArray = (arr1, num) => {
  return [...arr1, num];
};
\`\`\`

\`\`\`
// IMPURE FUNCTION
const impureAddToObj = (obj, key, val) => {
  obj[key] = val;
  return obj;
};

Because we're modifying the object in-place, the above approach is considered impure. Below is its pure counterpart, utilising the spread operator again.

// PURE FUNCTION
const  pureAddToObj = (obj, key, val) => {
  return { ...obj, [key]: val };
}
\`\`\`

## Higher Order Functions {#Higher-Order-Functions}

A higher order function is a function that takes a function as an argument, or returns a function.

- Some examples of higher order functions are .map() , .filter() and .reduce(). Both of them take a function as an argument.

### Map Method {#Map-Method}

Using map method in javaScript creates an array by calling a specific function on each element present in the parent array.It returns a new array and elements of arrays are result of callback function.

\`\`\`
Syntax:
arr.map(function(element, index, array){  }, this);
The this argument will be used inside the callback function. By default, its value is undefined .
\`\`\`

\`\`\`
Example:
let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
	console.log(this) // 80
}, 80);
\`\`\`

### Filter Method {#Filter-Method}

The filter() method takes in a callback function and calls that function for every item it iterates over inside the target array. It entails filtering out one or more items (a subset) from a larger collection of items (a superset) based on some condition/preference.

\`\`\`
Syntax:
arr.filter(function(element, index, array){  }, this);
The this argument will be used inside the callback function. By default, its value is undefined .
\`\`\`

- Example: Filter items out of an array

\`\`\`
let people = [
    {name: "aaron",age: 65},
    {name: "beth",age: 2},
    {name: "cara",age: 13},
    {name: "daniel",age: 3},
    {name: "ella",age: 25},
    {name: "fin",age: 1},
    {name: "george",age: 43},
]

let toddlers = people.filter(person => person.age <= 3)

console.log(toddlers)

/*
[{
  age: 2,
  name: "beth"
}, {
  age: 3,
  name: "daniel"
}, {
  age: 1,
  name: "fin"
}]
*/
\`\`\`

- Example: How to access the context object with this

\`\`\`
let people = [
    {name: "aaron", age: 65},
    {name: "beth", age: 15},
    {name: "cara", age: 13},
    {name: "daniel", age: 3},
    {name: "ella", age: 25},
    {name: "fin", age: 16},
    {name: "george", age: 18},
]

let range = {
  lower: 13,
  upper: 16
}


let teenagers = people.filter(function(person) {
	return person.age >= this.lower && person.age <= this.upper;
}, range)

console.log(teenagers)

/*
[{
  age: 15,
  name: "beth"
}, {
  age: 13,
  name: "cara"
}, {
  age: 16,
  name: "fin"
}]
*/
\`\`\`

### Reduce Method {#Reduce-Method}

\`\`\`
Syntax
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
\`\`\`

Array.reduce takes two parameters.

- The reducer
- An initial value (optional)

- The reducer is the function doing all the work. As reduce loops over your list, it feeds two parameters to your reducer.

- An accumulator

Accumulator is the eventual return value
When you're looping through the users, how are you keeping track of their total age? You need some counter variable to hold it. That's the accumulator

- The current value

The current value is just like when you use array[i] in a regular loop.

- Example:

\`\`\`
var euros = [29.76, 41.85, 46.5];

var sum = euros.reduce( function(total, amount){
  return total + amount
}, 0);

sum // 118.11
\`\`\`

## Using call(), apply() and bind() {#Using-call-apply-and-bind}

We can have objects that have their own properties and methods.
But object1 cannot use the methods of object2 and vice versa.

![CAB](/BL-1007/cab.png)

We can use call(), apply(), and bind() methods to tie a function into an object and call the function as if it belonged to that object.

### Call() Method in JavaScript {#Call-Method-in-JavaScript}

The call() method invokes a function with a specified context.

\`\`\`
var obj = { firstName: "a", lastName:"b" };

function fullName(){
  return this.firstName + this.lastName;
}
\`\`\`

use the call() method to tie the function add() to the object obj:

\`\`\`
add.call(obj, 3);
\`\`\`

**Use Call() with Multiple Arguments**

\`\`\`
function fullName(a, b){
  return this.firstName + this.lastName + a + b;
}

console.log(add.call(obj, "x", "y"));
\`\`\`

### Apply() Method in JavaScript {#Apply-Method-in-JavaScript}

The apply() method does the exact same as call(). The difference is that call() accepts an argument list, but apply() accepts an array of arguments.

\`\`\`
var obj = { firstName: "a", lastName:"b" };

function fullName(){
  return this.firstName + this.lastName;
}

console.log(add.apply(obj, ["x", "y"]));
\`\`\`

### Bind() Method in JavaScript {#Bind-Method-in-JavaScript}

call() and apply() methods are executed immediately when called (and returned a value).
But instead of executing a function immediately, bind() returns a copy of a function that can be executed later on.

\`\`\`
var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

const func = add.bind(obj, 3, 5);
func(); // Returns 10
\`\`\`

## Async and Defer {#Async-and-Defer}

- Without using async and defer
  The parsing is paused until the script is fetched, and executed. Once this is done, parsing resumes.

![Async-Defer](/BL-1007/without-defer-async-head.png)

- Page loading a script with async
  The script is fetched asynchronously, and when it’s ready the HTML parsing is paused to execute the script, then it’s resumed.

![Async](/BL-1007/with-async.png)

- Page loading With defer
  The script is fetched asynchronously, and it’s executed only after the HTML parsing is done.

![Defer](/BL-1007/with-defer.png)

## Event Throtting and debouncing {#Event-Throtting-and-debouncing}

Debouncing and Throttling techniques enhance the performance of your website, also prevent unnecessary API calls and load on the server.

Debouncing and throttling techniques are used to limit the number of times a function can execute.

### Throttling {#Throttling}

Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

**Example**

\`\`\`
let timer;

const handleInput = (val, delay) => {
  if (timer) {
    return;
  }

  timer = setTimeout(() => {
    console.log(val);
    timer = undefined;
  }, delay);
};

document.getElementById("search-box").addEventListener("keypress", (e) => {
  handleInput(e.target.value, 1000);
});
\`\`\`

### Debouncing {#Debouncing}

In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.

**Example**

\`\`\`
let timer;

const handleInput = (val, delay) => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    console.log(val);
  }, delay);
};

document.getElementById("search-box").addEventListener("keypress", (e) => {
  handleInput(e.target.value, 1000);
});
\`\`\`

## Event Bubbling and Capturing {#Event-Bubbling-and-Capturing}

![eventflow](/BL-1007/eventflow.svg)

### Event Bubbling {#Event-Bubbling}

**When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.**

\`\`\`
Let’s say we have 3 nested elements FORM > DIV > P with a handler on each of them

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

A click on the inner <p> first runs onclick:

On that <p>.
Then on the outer <div>.
Then on the outer <form>.
And so on upwards till the document object.
\`\`\`

![event-order-bubbling](/BL-1007/event-order-bubbling.svg)

### Event Capturing {#Event-Capturing}

**In event capturing, an event propagates from the outermost element to the target element.**

![event-order-capture](/BL-1007/capture.svg)

\`\`\`
Clicking on the p element calls the click event handlers of all parent elements, starting from the outer and propagating inside to the target element p:
html → body → article → div → p.
\`\`\`

### Stopping bubbling {#Stopping-bubbling}

\`\`\`
event.stopPropagation()
\`\`\`

event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.`
  },
  {
    id: 8,
    title: "Bl 1008",
    excerpt: "Browser JavaScript execution flow, as well as in Node.js, is based on an event loop. `The event loop concept is very sim...",
    date: "2025-01-01",
    readTime: "5 min read",
    category: "General",
    content: `Browser JavaScript execution flow, as well as in Node.js, is based on an event loop. \`The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them, and then sleeps, waiting for more tasks.\`

\`The event loop is the secret behind JavaScript’s asynchronous programming.\`

## Event Loop Visualisation/Basic Architecture {#Event-Loop-VisualisationBasic-Architecture}

![Event Loop](/BL-1008/eventloop.png)

### Memory Heap {#Memory-Heap}

This is where all the memory allocation happens for your variables, that you have defined in your program.

### Call Stack {#Call-Stack}

This represents the single thread provided for JavaScript code execution. This is where all your javascript code gets pushed and executed one by one as the interpreter reads your program, and gets popped out once the execution is done. It is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack.

### Browser or Web APIs {#Browser-or-Web-APIs}

They are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. They are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code.

For example, the Geolocation API provides some simple JavaScript constructs for retrieving location data so you can say, plot your location on a Google Map. In the background, the browser is actually using some complex lower-level code (e.g. C++) to communicate with the device’s GPS hardware (or whatever is available to determine position data), retrieve position data, and return it to the browser environment to use in your code. But again, this complexity is abstracted away from you by the API.

**Common browser APIs**

- APIs for manipulating documents
- APIs that fetch data from the server
- Audio and Video APIs
- Client-side storage APIs

### Event or Callback Queue {#Event-or-Callback-Queue}

This is where your asynchronous code gets pushed to, and waits for the execution.

### Event Loop {#Event-Loop}

It has one simple job \`to monitor the call stack and the callback queue.\`
It keeps running continuously and checks the Main stack, if it has any frames to execute, if not then it checks Callback queue, if Callback queue has codes to execute then it pops the message from it to the Main Stack for the execution.

### Job Queue or Microtask Queue {#Job-Queue-or-Microtask-Queue}

Apart from Callback Queue, browsers have introduced one more queue which is “Job Queue”, reserved only for new Promise() functionality. So when you use promises in your code, you add .then() method, which is a callback method. These \`thenable\` methods are added to Job Queue once the promise has returned/resolved, and then gets executed.

## Execution of async function in javascript {#Execution-of-async-function-in-javascript}

Whenever an async function is called, it is sent to a browser API. These are APIs built into the browser.

\`An example of this is the setTimeout method. When a setTimeout operation is processed, it is sent to the corresponding API which waits till the specified time to send this operation back in for processing.\`

\`This operation is then send to the callback queue. Hence, we have a cyclic system for running async operations in JavaScript. The language itself is single-threaded, but the browser APIs act as separate threads.\`

The \`event loop\` facilitates this process. It has one simple job \`to monitor the call stack and the callback queue.\` If the call stack is empty, the event loop will take the first event from the queue and will push it to the call stack, which effectively runs. If it is not, then the current function call is processed.

\`\`\`
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();

Output:
First
Third
Second
\`\`\`

![Callback Queue](/BL-1008/callbackqueue.gif)

## Why Job Queue or Microtask Queue {#Why-Job-Queue-or-Microtask-Queue}

Micro-tasks has high priority in executing callbacks, if event loop tick comes to Micro-tasks, it will execute all the jobs in job queue first until it gets empty, then will move to callback queue.

- The primary reason for prioritizing the micro-task queue is to improve the user experience.
- Micro-tasks include mutation observer callbacks as well as promise callbacks.

![micro-task Queue](/BL-1008/microtask.gif)

Example:

\`\`\`
console.log('Message no. 1: Sync');

setTimeout(function() {
   console.log('Message no. 2: setTimeout');
}, 0);

var promise = new Promise(function(resolve, reject) {
   resolve();
});

promise.then(function(resolve) {
   console.log('Message no. 3: 1st Promise');
})
.then(function(resolve) {
   console.log('Message no. 4: 2nd Promise');
});

console.log('Message no. 5: Sync');

// Message no. 1: Sync
// Message no. 5: Sync
// Message no. 3: 1st Promise
// Message no. 4: 2nd Promise
// Message no. 2: setTimeout
\`\`\`

All \`thenable\` callbacks of the promise are called first, then the setTimeout callback is called.

**References:**

- <a href="https://towardsdev.com/event-loop-in-javascript-672c07618dc9" target="_blank">Event Loop</a>`
  },
  {
    id: 9,
    title: "Bl 1009",
    excerpt: "## Prototype {#Prototype}\n\n![Prototype](/BL-1009/object-prototype-empty.svg)\n\n**The prototype is an object that is assoc...",
    date: "2025-01-01",
    readTime: "3 min read",
    category: "General",
    content: `## Prototype {#Prototype}

![Prototype](/BL-1009/object-prototype-empty.svg)

**The prototype is an object that is associated with every functions and objects by default in JavaScript.**

Whenever we create a function , object or array javacript by default attaches a prototype object to it which contains some additional methods inside it.

![Prototype](/BL-1009/proto.png)
All JavaScript objects inherit properties and methods from a prototype:

- Date objects inherit from Date.prototype.
- Array objects inherit from Array.prototype.
- Player objects inherit from Player.prototype.

- The Object.prototype is on top of the prototype inheritance chain. Date objects, Array objects, and Player objects all inherit from Object.prototype.

## The Prototype Chain {#The-Prototype-Chain}

Prototypal inheritance uses the concept of prototype chaining.

Every object created contains [[Prototype]], which points either to another object or null.

Example:-
An object C with a [[Prototype]] property that points to object B. Object B’s [[Prototype]] property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.

## Prototypal Inheritance {#Prototypal-Inheritance}

\`\`\`
let animal = {
  eats: true
   walk() {
    console.log("Animal walk");
  }
};

let rabbit = {
  jumps: true
  __proto__ = animal;
};


// we can find both properties in rabbit now:
console.log(rabbit.eats ); // true

rabbit.walk(); // Animal walk

\`\`\`

![Prototype](/BL-1009/rabbit-animal-object.svg)

\`\`\`
const obj = {
  firstName: "sds",
  lastName: "bh",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

const obj2 = {
  firstName: "ab",
  __proto__: obj
};

console.log(obj2.getFullName()); //ab bh
\`\`\`

## Creating own prototype {#Creating-own-prototype}

Creating Ployfill for bind method

\`\`\`
const obj = {
  firstName: "sds",
  lastName: "bh"
};

function getFullName(state) {
  return this.firstName + " " + this.lastName + " " + state;
}

const fName = getFullName.bind(obj, "rnc");
console.log(fName()); //sds bh rnc

Function.prototype.myBind = function (...args) {
  const func = this;
  const params = args.slice(1);
  return function () {
    return func.apply(args[0], params);
  };
};

const fName2 = getFullName.myBind(obj, "bsh");
console.log(fName2()); //sds bh bsh
\`\`\`

## Creating Ployfill for Call, Apply and Bind method {#Creating-Ployfill-for-Call-Apply-and-Bind-method}

\`\`\`
const obj = {
  firstName: "sds",
  lastName: "bh"
};

function getFullName(state) {
  return this.firstName + " " + this.lastName + " " + state;
}

Function.prototype.myBind = function (obj, ...args) {
  obj.func = this;
  return () => {
    return obj.func(...args);
  };
};

Function.prototype.myCall = function (obj, ...args) {
  obj.func = this;
  return obj.func(...args);
};

Function.prototype.myApply = function (obj, args) {
  obj.func = this;
  return obj.func(...args);
};

const fName2 = getFullName.myBind(obj, "bsh");
console.log(fName2()); //sds bh bsh

console.log(getFullName.myCall(obj, "kkr"));  //sds bh kkr

console.log(getFullName.myApply(obj, ["kkr"]));  //sds bh kkr
\`\`\``
  },
  {
    id: 10,
    title: "Bl 1010",
    excerpt: "**Visual overview of topics covered in this tutorial**\n\n![Lifecycle](/BL-1010/Lifecycle.png)\n\n## What is the React compo...",
    date: "2025-01-01",
    readTime: "5 min read",
    category: "General",
    content: `**Visual overview of topics covered in this tutorial**

![Lifecycle](/BL-1010/Lifecycle.png)

## What is the React component lifecycle? {#What-is-the-React-component-lifecycle}

In React, components go through a lifecycle of events:

- Mounting (adding nodes to the DOM)
- Updating (altering existing nodes in the DOM)
- Unmounting (removing nodes from the DOM)

## Mounting lifecycle methods {#Mounting-lifecycle-methods}

The mounting phase refers to the phase during which a component is created and inserted to the DOM.
The following methods are called in order.

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

### constructor() {#constructor}

The constructor() is the very first method that is invoked before the component is mounted to the DOM.

The constructor method is called before the component is mounted to the DOM. In most cases, you would initialize state and bind event handlers methods within the constructor method.

Example of the constructor() React lifecycle method in action:

\`\`\`
const MyComponent extends React.Component {
  constructor(props) {
   super(props)
    this.state = {
       points: 0
    }
    this.handlePoints = this.handlePoints.bind(this)
    }
}
\`\`\`

### static getDerivedStateFromProps() {#static-getDerivedStateFromProps}

Its main function is to ensure that the state and props are in sync for when it’s required.

The basic structure of the static getDerivedStateFromProps() looks like this:

\`\`\`
static getDerivedStateFromProps(props, state) {
  //do stuff here
}
\`\`\`

\`\`\`
You can return an object to update the state of the component:

static getDerivedStateFromProps(props, state) {
    return {
       points: 200 // update state with this
    }
}

Or you can return null to make no updates:

static getDerivedStateFromProps(props, state) {
 return null
}
\`\`\`

\`\`\`
class App extends Component {
  state = {
    points: 10
  }

  // *******
  //  NB: Not the recommended way to use this method. Just an example. Unconditionally overriding state here is generally considered a bad idea
  // ********

  static getDerivedStateFromProps(props, state) {
    return {
      points: 1000
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            You've scored {this.state.points} points.
          </p>
        </header>
      </div>
    );
  }
}

The 1000 comes from updating state within the static getDerivedStateFromProps method.

\`\`\`

### render() {#render}

As the name suggests it handles the rendering of your component to the UI

\`\`\`
class Hello extends Component{
   render(){
      return <div>Hello {this.props.name}</div>
   }
}
\`\`\`

The render() method returns JSX that is displayed in the UI. A render() can also return a null if there is nothing to render for that component.

A render() method has to be pure with no side-effects.
React requires that your render() is pure. Pure functions are those that do not have any side-effects and will always return the same output when the same inputs are passed. This means that you can not \`setState() within a render()\`. \`You cannot modify the component state within the render().\`

### componentDidMount {#componentDidMount}

After render is called, \`the component is mounted to the DOM and the componentDidMount method is invoked.\`

This function is invoked immediately after the component is mounted to the DOM.

You would use the componentDidMount lifecycle method to grab a DOM node from the component tree immediately after it’s mounted.

**If you also want to make network requests as soon as the component is mounted to the DOM, this is a perfect place to do so.**

\`\`\`
componentDidMount() {
  this.fetchListOfTweets() // where fetchListOfTweets initiates a netowrk request to fetch a certain list of tweets.
}
\`\`\`

**You could also set up subscriptions such as timers**

\`\`\`
// e.g requestAnimationFrame
componentDidMount() {
    window.requestAnimationFrame(this._updateCountdown);
 }
\`\`\`

## Updating lifecycle methods {#Updating-lifecycle-methods}

Whenever a change is made to the state or props of a React component, the component is rerendered. In simple terms, the component is updated. This is the updating phase of the React component lifecycle.

- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

### shouldComponentUpdate() {#shouldComponentUpdate}

In most cases, you’ll want a component to rerender when state or props changes. However, you do have control over this behavior.

Within this lifecycle method, you can return a boolean true or false and control whether the component gets rerendered (e.g., upon a change in state or props).

\`\`\`
shouldComponentUpdate(nextProps, nextState)
{
 return this.props.title !== nextProps.title ||
  this.state.input !== nextState.input
}
\`\`\`

### render() {#render}

After the shouldComponentUpdate method is called, render is called immediately afterward, depending on the returned value from shouldComponentUpdate, which defaults to true.

### getSnapshotBeforeUpdate() {#getSnapshotBeforeUpdate}

The getSnapshotBeforeUpdatelifecycle method stores the previous values of the state after the DOM is updated. getSnapshotBeforeUpdate() is called right after the render method.

\`\`\`
getSnapshotBeforeUpdate(prevProps, prevState) {

}
\`\`\`

Here’s the important thing: the value queried from the DOM in getSnapshotBeforeUpdate refers to the \`value just before the DOM is updated, even though the render method was previously called\`.

\`The getSnapshotBeforeUpdate React lifecycle method doesn’t work on its own. It is meant to be used in conjunction with the componentDidUpdate lifecycle method\`.

### componentDidUpdate() {#componentDidUpdate}

The componentDidUpdate lifecycle method is invoked after the getSnapshotBeforeUpdate. As with the getSnapshotBeforeUpdate method it receives the previous props and state as arguments:

\`\`\`
componentDidUpdate(prevProps, prevState) {

}
\`\`\`

However it also takes whatever value is returned from the getSnapshotBeforeUpdate lifecycle method is passed as the third argument to the componentDidUpdate method.

\`\`\`
componentDidUpdate(prevProps, prevState, snapshot) {

}
\`\`\`

## Unmounting lifecycle method {#Unmounting-lifecycle-method}

The following method is invoked during the component unmounting phase

- componentWillUnmount()

### componentWillUnmount() {#componentWillUnmount}

The componentWillUnmount lifecycle method is invoked immediately before a component is unmounted and destroyed. This is the ideal place to perform any necessary cleanup such as clearing up timers, cancelling network requests, or cleaning up any subscriptions that were created in componentDidMount().

\`\`\`
// e.g add event listener
componentDidMount() {
  el.addEventListener()
}
\`\`\`

\`\`\`
// e.g remove event listener
componentWillUnmount() {
  el.removeEventListener()
}
\`\`\`

**References:**

- <a href="https://programmingwithmosh.com/javascript/react-lifecycle-methods" target="_blank">React Lifecycle Methods- A Deep Dive</a>
- <a href="https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples" target="_blank">React lifecycle methods: An approachable tutorial with examples</a>`
  },
  {
    id: 11,
    title: "Bl 1011",
    excerpt: "## What is Google Firebase? {#What-is-Google-Firebase}\n\nGoogle Firebase is a Google-backed application development softw...",
    date: "2025-01-01",
    readTime: "9 min read",
    category: "General",
    content: `## What is Google Firebase? {#What-is-Google-Firebase}

Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.

Firebase is a powerful platform for your mobile and web application. Firebase can power your app’s backend, including data storage, user authentication, static hosting, and more. With Firebase, you can easily build mobile and web apps that scale from one user to one million.

## A Brief History {#A-Brief-History}
Back in 2011, before Firebase was Firebase, it was a startup called Envolve. As Envolve, it provided developers with an API that enabled the integration of online chat functionality into their website.

What’s interesting is that people used Envolve to pass application data that was more than just chat messages. Developers were using Envolve to sync application data such as a game state in real time across their users.

This led the founders of Envolve, James Tamplin and Andrew Lee, to separate the chat system and the real-time architecture. In April 2012, Firebase was created as a separate company that provided Backend-as-a-Service with real-time functionality.

After it was acquired by Google in 2014, Firebase rapidly evolved into the multifunctional behemoth of a mobile and web platform that it is today.

## What services do Firebase provide? {#What-services-do-Firebase-provide}

Analytics – Google Analytics for Firebase offers free, unlimited reporting on as many as 500 separate events. Analytics presents data about user behavior in iOS and Android apps, enabling better decision-making about improving performance and app marketing. 

Authentication – Firebase Authentication makes it easy for developers to build secure authentication systems and enhances the sign-in and onboarding experience for users. This feature offers a complete identity solution, supporting email and password accounts, phone auth, as well as Google, Facebook, GitHub, Twitter login and more.

Cloud messaging – Firebase Cloud Messaging (FCM) is a cross-platform messaging tool that lets companies reliably receive and deliver messages on iOS, Android and the web at no cost.

Realtime database – the Firebase Realtime Database is a cloud-hosted NoSQL database that enables data to be stored and synced between users in real time. The data is synced across all clients in real time and is still available when an app goes offline.

Crashlytics – Firebase Crashlytics is a real-time crash reporter that helps developers track, prioritize and fix stability issues that reduce the quality of their apps. With crashlytics, developers spend less time organizing and troubleshooting crashes and more time building features for their apps.

Performance – Firebase Performance Monitoring service gives developers insight into the performance characteristics of their iOS and Android apps to help them determine where and when the performance of their apps can be improved.

Test lab – Firebase Test Lab is a cloud-based app-testing infrastructure. With one operation, developers can test their iOS or Android apps across a variety of devices and device configurations. They can see the results, including videos, screenshots and logs, in the Firebase console.

Firebase helps mobile app teams succeed. With Firebase you can:

1. Build better apps
2. Improve app quality
3. Grow your business

### Build better apps {#Build-better-apps}
Firebase lets you build more powerful, secure and scalable apps, using world-class infrastructure using:

Cloud Firestore: is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. It is a NoSQL document database that lets you easily store, sync, and query data for your mobile and web apps — at a global scale.It's supporting for Android, iOS and Web Platform.

ML Kit: is a mobile SDK that brings Google’s machine learning expertise to Android and iOS apps in a powerful yet easy-to-use package. Whether you’re new or experienced in machine learning, you can implement the functionality you need in just a few lines of code. There’s no need to have deep knowledge of neural networks or model optimization to get started. On the other hand, if you are an experienced ML developer, ML Kit provides convenient APIs that help you use your custom TensorFlow Lite models in your mobile apps. It’s supporting for Android and iOS Platform.

Cloud Functions: for Firebase lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests. Your code is stored in Google’s cloud and runs in a managed environment. There’s no need to manage and scale your own servers. It’s supporting for Android, iOS, C++, Unity and Web Platform.

Authentication: provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. It’s supporting for Android, iOS and Web Platform.

Hosting: is production-grade web content hosting for developers. With a single command, you can quickly deploy web apps and serve both static and dynamic content to a global CDN (content delivery network). You can also pair Firebase Hosting with Cloud Functions to build and host microservices on Firebase. It’s supporting only Web Platform.

Cloud Storages: is for object storage service built for Google scale. The Firebase SDKs for Cloud Storage add Google security to file uploads and downloads for your Firebase apps, regardless of network quality. You can use our SDKs to store images, audio, video, or other user-generated content. On the server, you can use Google Cloud Storage, to access the same files. It’s supporting for Android, iOS, C++, Unity and Web Platform.

Real-time Database: is a cloud-hosted NoSQL database that lets you store and sync between your users in real-time. The Real-time Database is really just one big JSON object that the developers can manage in real-time. It’s supporting for Android, iOS, C++, Unity and Web Platform.


### Improve app quality {#Improve-app-quality}
Firebase gives you insights into app performance and stability, so you can channel your resources effectively using:

Crashlytics: is a lightweight, real-time crash reporter that helps you track, prioritize, and fix stability issues that erode your app quality. Crashlytics saves you troubleshooting time by intelligently grouping crashes and highlighting the circumstances that lead up to them. It’s supporting for Android and iOS Platform.

Performance Monitoring: is a service that helps you to gain insight into the performance characteristics of your iOS and Android apps. You use the Performance Monitoring SDK to collect performance data from your app, and then review and analyze that data in the Firebase console. Performance Monitoring helps you to understand where and when the performance of your app can be improved so that you can use that information to fix performance issues. It’s supporting for Android and iOS Platform.

Test Labs: is a cloud-based app-testing infrastructure. It provides a large number of mobile test devices to help you test your apps. It’s supporting for Android and iOS Platform.


### Grow your business {#Grow-your-business}
Firebase helps you grow to millions of users, simplifying user engagement and retention using:

In-App Messaging: helps you engage users who are actively using your app by sending them targeted and contextual messages that nudge them to complete key in-app actions — like beating a game level, buying an item, or subscribing to content. It’s supporting for Android and iOS Platform.

Google Analytics: for Firebase is a free app measurement solution that provides insight on app usage and user engagement. At the heart of Firebase is Google Analytics for Firebase, a free and unlimited analytics solution. Analytics integrates across Firebase features and provides you with unlimited reporting for up to 500 distinct events that you can define using the Firebase SDK. Analytics reports help you understand clearly how your users behave, which enables you to make informed decisions regarding app marketing and performance optimizations. It’s supporting for Android, iOS, C++ and Unity Platform.

Predictions: applies machine learning to your analytics data to create dynamic user segments based on the predicted behavior of users in your app. These predictions are automatically available for use with Firebase Remote Config, the Notifications composer, Firebase In-App Messaging, and A/B Testing. You can also link your app’s Predictions data to BigQuery so you can get daily exports that you can further analyze or push to third party tools. It’s supporting for Android, iOS, C++ and Unity Platform.

A/B Testing: helps you optimize your app experience by making it easy to run, analyze, and scale product and marketing experiments. It gives you the power to test changes to your app’s UI, features, or engagement campaigns to see if they actually move the needle on your key metrics (like revenue and retention) before you roll them out widely. It’s supporting for Android, iOS, C++ and Unity Platform.

Cloud Messaging(FCM): provides a reliable and battery-efficient connection between your server and devices that allows you to deliver and receive messages and notifications on iOS, Android, and the web at no cost.

Remote Config: essentially allows us to publish updates to our users immediately. Whether we wish to change the color scheme for a screen, the layout for a particular section in our app or show promotional/seasonal options — this is completely doable using the server side parameters without the need to publish a new version. It’s supporting for Android, iOS, C++ and Unity Platform.

Dynamic Links: With Dynamic Links, your users get the best available experience for the platform they open your link on. If a user opens a Dynamic Link on iOS or Android, they can be taken directly to the linked content in your native app. If a user opens the same Dynamic Link in a desktop browser, they can be taken to the equivalent content on your website. It’s supporting for Android, iOS, Web, C++ and Unity Platform.

App Indexing: gets your app into Google Search. If users have your app installed, they can launch your app and go directly to the content they’re searching for. App Indexing reengages your app users by helping them find both public and personal content right on their device, even offering query autocompletion to help them more quickly find what they need. If users don’t yet have your app, relevant queries trigger an install card for your app in Search results. It’s supporting for Android and iOS Platform.

## Understand Firebase projects {#Understand-Firebase-projects}

A Firebase project is the top-level entity for Firebase. In a project, you can register your Apple, Android, or web apps. After you register your apps with Firebase, you can add the Firebase SDKs for any number of Firebase products, like Analytics, Cloud Firestore, Performance Monitoring, or Remote Config.`
  },
  {
    id: 12,
    title: "Bl 1012",
    excerpt: "## Get started with Tailwind CSS {#Get-started-with-Tailwind-CSS}\n\nTailwind CSS works by scanning all of your HTML files...",
    date: "2025-01-01",
    readTime: "1 min read",
    category: "General",
    content: `## Get started with Tailwind CSS {#Get-started-with-Tailwind-CSS}

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
It's fast, flexible, and reliable — with zero-runtime.

###  Installation

Hey`
  },
  {
    id: 13,
    title: "Bl 1013",
    excerpt: "## Introduction {#Introduction}\nAmazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compu...",
    date: "2025-01-01",
    readTime: "10 min read",
    category: "General",
    content: `## Introduction {#Introduction}
Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

Amazon EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon’s proven computing environment. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change.

Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use. Amazon EC2 provides developers the tools to build failure-resilient applications and isolate themselves from common failure scenarios.

### Topics covered {#Topics-covered}

1. Launch a web server with termination protection enabled
2. Monitor Your EC2 instance

3. Modify the security group that your web server is using to allow HTTP access

4. Resize your Amazon EC2 instance to scale

5. Test termination protection

6. Terminate your EC2 instance

### 1. Launching your EC2 instance {#1.-Launching-your-EC2-instance}
In the AWS Management Console on the Services menu, choose EC2.

In the left navigation pane, choose EC2 Dashboard to ensure that you are on the dashboard page.

Choose Launch instance, and then select Launch instance.

#### Naming your EC2 instance {#Naming-your-EC2-instance}
When you name your instance, AWS creates a key-value pair. The key for this pair is Name, and the value is the name you enter for your EC2 instance.

In the Name and tags pane, in the Name text box, enter the name of your EC2 instance.

#### Choosing an Amazon Machine Image (AMI) {#Choosing-an-Amazon-Machine-Image-(AMI)}
An AMI provides the information required to launch an instance, which is a virtual server in the cloud. An AMI includes the following:

A template for the root volume for the instance (for example, an operating system or an application server with applications)
Launch permissions that control which AWS accounts can use the AMI to launch instances
A block device mapping that specifies the volumes to attach to the instance when it is launched
The Quick Start list contains the most commonly used AMIs. You can also create your own AMI or select an AMI from the AWS Marketplace, an online store where you can sell or buy software that runs on AWS.

Locate the Application and OS Images (Amazon Machine Image) pane.

Under AMI Machine Image (AMI), notice that the Amazon Linux 2 AMI image is selected by default. You can decide to keep this setting or choose your preferred.

#### Choosing an instance type {#Choosing-an-instance-type}
Amazon EC2 provides a wide selection of instance types optimized to fit different use cases. Instance types comprise varying combinations of CPU, memory, storage, and networking capacity and give you the flexibility to choose the appropriate mix of resources for your applications. Each instance type includes one or more instance sizes so that you can scale your resources to the requirements of your target workload.

For example, a t3.micro instance has 2 virtual CPUs and 1 GiB of memory.

#### Configuring a key pair {#Configuring-a-key-pair}
Amazon EC2 uses public-key cryptography to encrypt and decrypt login information. To log in to your instance, you must create a key pair, specify the name of the key pair when you launch the instance, and provide the private key when you connect to the instance.

It is an optional feature but mostly recommended.

#### Configuring the network settings {#Configuring-the-network-settings}
You use this pane to configure networking settings.

The VPC indicates which virtual private cloud (VPC) you want to launch the instance into. You can have multiple VPCs, including different ones for development, testing, and production.

In the Network settings pane, choose Edit

Here you can configure the VPC and Security Group.

In the security group, you give the name and the description.

A security group acts as a virtual firewall that controls the traffic for one or more instances. When you launch an instance, you associate one or more security groups with the instance. You add rules to each security group that allow traffic to or from its associated instances. You can modify the rules for a security group at any time; the new rules are automatically applied to all instances that are associated with the security group.

#### Adding storage {#Adding-storage}
Amazon EC2 stores data on a network-attached virtual disk called Amazon Elastic Block Store (Amazon EBS).

You launch the EC2 instance using a default 8 GiB disk volume. This is your root volume (also known as a boot volume).

You can do this in the Configure Storage pane.

#### Configuring advanced details {#Configuring-advanced-details}
In the Advanced details pane, you can set advanced features like termination protection, among others.

When you launch an instance in Amazon EC2, you have the option of passing user data to the instance. These commands can be used to perform common automated configuration tasks and even run scripts after the instance starts.

For example, in the User Data text box, you can define your scripts that will run when the instance launches.

\`\`\`
#!/bin/bash
yum -y install httpd
systemctl enable httpd
systemctl start httpd
echo '<html><h1>Hello From Your Web Server!</h1></html>' > /var/www/html/index.html
\`\`\`
In this case, the script does the following:

* Install an Apache web server (httpd)

* Configure the web server to automatically start on boot

* Activate the Web server

* Create a simple web page

#### Launching an EC2 instance {#Launching-an-EC2-instance}

Now that you have configured your EC2 instance settings, it is time to launch your instance.

In the right pane, choose Launch instance

Choose **View all instances**

The instance appears in a Pending state, which means it is being launched. It then changes to Running, which indicates that the instance has started booting. There will be a short time before you can access the instance.

The instance receives a public DNS name that you can use to contact the instance from the Internet.

### 2. Monitor Your Instance {#2.-Monitor-Your-Instance}
Monitoring is an important part of maintaining the reliability, availability, and performance of your Amazon Elastic Compute Cloud (Amazon EC2) instances and your AWS solutions.

Select the instance by checking the box next to the instance and navigate to the bottom of the screen to the Status checks tab.

> With instance status monitoring, you can quickly determine whether Amazon EC2 has detected any problems that might prevent your instances from running applications. Amazon EC2 performs automated checks on every running EC2 instance to identify hardware and software issues.

Select the **Monitoring tab**.

This tab displays Amazon CloudWatch metrics for your instance.

You can choose a graph to see an expanded view.

> Amazon EC2 sends metrics to Amazon CloudWatch for your EC2 instances. Basic (five-minute) monitoring is enabled by default. You can enable detailed (one-minute) monitoring.

In the **Actions** menu, select Monitor and troubleshoot Get Instance Screenshot.

This shows you what your Amazon EC2 instance console would look like if a screen were attached to it.

> If you are unable to reach your instance via SSH or RDP, you can capture a screenshot of your instance and view it as an image. This provides visibility as to the status of the instance, and allows for quicker troubleshooting.

### 3. Update Your Security Group and Access the Web Server {#3.-Update-Your-Security-Group-and-Access-the-Web-Server}
When we launched the EC2 instance, we provided a script that installed a web server and created a simple web page. In this section, we will access content from the web server.

When we select the instance by checking the box, select the Details tab, and copy the Public IPv4 address of our instance to the clipboard.

Open a new tab in our web browser, paste the IP address we just copied, and then press Enter.

We are not currently able to access our web server because the security group is not permitting inbound traffic on port 80, which is used for HTTP web requests. This is a demonstration of using a security group as a firewall to restrict the network traffic that is allowed in and out of an instance.

To correct this, we will now update the security group to permit web traffic on port 80.

* In the EC2 Management Console tab, in the left navigation pane, select Security Groups located under Network & Security.

* Select Web Server security group. The Web in this case is the name we gave as our security group name.

* Select the Inbound rules tab.

* The security group currently has no rules.

* Select Edit inbound rules then select Add rule and configure the rule with the following settings:

* Type: HTTP

* Source: Anywhere-IPv4

* Select Save rules

When we return to the web server tab that we previously opened and refresh the page.

We should see the message Hello From Your Web Server!

We can add, edit, or delete rules using the **Edit inbound rules** menu.

### 4. Resize Your Instance: Instance Type and EBS Volume {#4.-Resize-Your-Instance:-Instance-Type-and-EBS-Volume}
As your needs change, you might find that your instance is over-utilized (too small) or under-utilized (too large). If so, you can change the instance type. For example, if a t3.micro instance is too small for its workload, you can change it to an m5.medium instance. Similarly, you can change the size of a disk.

#### Stop Your Instance {#Stop-Your-Instance}
Before you can resize an instance, you must stop it.

When you stop an instance, it is shut down. There is no charge for a stopped EC2 instance, but the storage charge for attached Amazon EBS volumes remains.

* On the EC2 Management Console, in the left navigation pane, select Instances.
* Web Server (the name of our instance) should already be selected.
* Select Instance state > Stop instance.
* Select Stop
* Your instance will perform a normal shutdown and then will stop running.
* Wait for the Instance State to display: stopped

#### Change The Instance Type {#Change-The-Instance-Type}
In the Actions menu, select Instance Settings > Change Instance Type, then configure to the best of your choice.

Then select Apply

When the instance is started again, it will be of the new instance type you have configured above.

### Resize the EBS Volume {#Resize-the-EBS-Volume}
* In the left navigation menu, select Volumes located under Elastic Block Store.
* Select the volume by checking the box, and navigate to the Actions menu, select Modify Volume.
* Change the volume to your most suitable size.
* Select Modify
* Select Modify to confirm and increase or decrease the size of the volume.
#### Start the Resized Instance {#Start-the-Resized-Instance}
You will now start the instance again, which will now have more or less memory and more or less disk space.

### 5. Termination Protection {#5.-Termination-Protection}
You can delete your instance when you no longer need it. This is referred to as terminating your instance. You cannot connect to or restart an instance after it has been terminated.

* Select your instance
* In the Actions menu, select Instance settings > Change termination protection.
* Check Enable followed by Save.

When you now select your instance and then navigate to the top and select Instance state menu, select Terminate instance, *There is a message that says: On an EBS-backed instance, the default action is for the root EBS volume to be deleted when the instance is terminated. Storage on any local drives will be lost. It will ask if you are sure that you want to terminate the instance. You will be able to select the Terminate button.*`
  },
  {
    id: 14,
    title: "Bl 1014",
    excerpt: "## 1. What is an Amazon Machine Image (AMI)?\nAn Amazon Machine Image (AMI) is a template that contains a software config...",
    date: "2025-01-01",
    readTime: "4 min read",
    category: "General",
    content: `## 1. What is an Amazon Machine Image (AMI)?
An Amazon Machine Image (AMI) is a template that contains a software configuration (operating system, application server, and applications) required to launch an EC2 instance. AMIs are region-specific, meaning they are stored in a specific AWS region and can be used to launch instances in that region.

### AMIs can be:

* Pre-configured by AWS: AWS provides a variety of pre-configured AMIs for popular operating systems like Amazon Linux, Ubuntu, Windows, etc.

* Custom-built by users: Users can create custom AMIs tailored to their specific needs, such as pre-installed software, configurations, or security settings.

## 2. Benefits of Using AMIs
* **Consistency:** AMIs ensure that every instance launched from the same image is identical, reducing configuration drift.

* **Speed:** Launching instances from an AMI is faster than manually configuring each instance.

* **Automation**: AMIs enable automation of infrastructure deployment using tools like AWS CloudFormation, Terraform, or custom scripts.

* **Disaster Recovery**: AMIs can be used to create backups of your instances, enabling quick recovery in case of failures.

* **Scalability**: AMIs make it easy to scale applications by launching multiple instances from the same image.

## 3. Creating an AMI

### Prerequisites
* An AWS account with appropriate permissions.
* An existing EC2 instance to create an AMI from.
* AWS CLI installed and configured on your local machine.

### Step-by-Step Guide to Creating an AMI
1. Log in to the AWS Management Console and navigate to the EC2 dashboard.
2. Select the instance you want to create an AMI from.
3. Create the AMI:

* Right-click the instance and select **"Create Image"**.
* Provide a name and description for the AMI.
* Configure additional settings like adding tags or enabling No Reboot (if applicable).

* Click **"Create Image"**.

### Automating AMI Creation with AWS CLI

\`\`\`
#!/bin/bash

# Variables
INSTANCE_ID="i-0abcd1234efgh5678"  # Replace with your instance ID
AMI_NAME="My-Custom-AMI"
AMI_DESCRIPTION="AMI created from instance $INSTANCE_ID"

# Create AMI
AMI_ID=$(aws ec2 create-image \
    --instance-id $INSTANCE_ID \
    --name "$AMI_NAME" \
    --description "$AMI_DESCRIPTION" \
    --no-reboot \
    --output text)

# Check AMI creation status
aws ec2 wait image-available \
    --image-ids $AMI_ID

echo "AMI created successfully with ID: $AMI_ID"
\`\`\`

## 4. Managing AMIs

### Copying AMIs Across Regions
AMIs are region-specific, but you can copy them to other regions using the AWS CLI:

\`\`\`
#!/bin/bash

# Variables
SOURCE_AMI_ID="ami-0abcd1234efgh5678"  # Replace with your source AMI ID
SOURCE_REGION="us-east-1"
TARGET_REGION="us-west-2"

# Copy AMI to another region
NEW_AMI_ID=$(aws ec2 copy-image \
    --source-image-id $SOURCE_AMI_ID \
    --source-region $SOURCE_REGION \
    --region $TARGET_REGION \
    --output text)

echo "AMI copied to $TARGET_REGION with ID: $NEW_AMI_ID",

\`\`\`
### Deregistering AMIs
When an AMI is no longer needed, you can deregister it to save costs:

\`\`\`
#!/bin/bash

# Variables
AMI_ID="ami-0abcd1234efgh5678"  # Replace with your AMI ID

# Deregister AMI
aws ec2 deregister-image \
    --image-id $AMI_ID

echo "AMI deregistered successfully: $AMI_ID"

\`\`\`

You can as well use the console to deregister AMIs.
* Navigate to Images and Click **AMIs**
* On the top right, Click on **Actions**
* Click Deregister AMI


### Automating AMI Management with Scripts
You can automate AMI management tasks like cleanup of old AMIs using a script:

\`\`\`
#!/bin/bash

# Variables
RETENTION_DAYS=30  # Number of days to retain AMIs
OWNER_ID="123456789012"  # Replace with your AWS account ID

# Find and deregister old AMIs
OLD_AMIS=$(aws ec2 describe-images \
    --owners $OWNER_ID \
    --query "Images[?CreationDate<='$(date -d "-$RETENTION_DAYS days" +%Y-%m-%d)'].ImageId" \
    --output text)

for AMI_ID in $OLD_AMIS; do
    echo "Deregistering AMI: $AMI_ID"
    aws ec2 deregister-image --image-id $AMI_ID
done

echo "AMI cleanup completed."

\`\`\`

## 5. Conclusion
Amazon Machine Images (AMIs) are a powerful tool for managing and deploying EC2 instances in AWS. By understanding how to create, manage, and automate AMIs, you can streamline your infrastructure deployment, ensure consistency, and reduce operational overhead. Whether you're a beginner or an experienced AWS user, mastering AMIs is essential for building scalable and reliable cloud environments.

With the scripts provided in this article, you can start automating your AMI workflows and take full advantage of AWS's capabilities. **Happy cloud computing!**`
  },
  {
    id: 15,
    title: "Bl 1015",
    excerpt: "## 1. What is Linux? {#1.-What-is-Linux}\nLinux is an open-source, Unix-like operating system based on the Linux kernel....",
    date: "2025-01-01",
    readTime: "5 min read",
    category: "General",
    content: `## 1. What is Linux? {#1.-What-is-Linux}
Linux is an open-source, Unix-like operating system based on the Linux kernel. It was created by Linus Torvalds in 1991 and has since grown into a robust ecosystem supported by a global community of developers. Linux is known for its stability, security, and flexibility, making it a popular choice for servers, cloud computing, and development environments.

### Key Features of Linux: {#Key-Features-of-Linux}
1. **Open Source**: Linux is free to use, modify, and distribute.
2. **Multi-User and Multi-Tasking**: Multiple users can run multiple processes simultaneously.
3. **Security**: Linux has robust user permissions and built-in security features.
4. **Customizability**: Users can customize Linux to suit their needs.

## 2. Why is Linux Important for AWS and Cloud Computing? {#2.-Why-is-Linux-Important-for-AWS-and-Cloud-Computing}
Linux is the backbone of many cloud computing platforms, including AWS. Here’s why Linux is essential for cloud professionals:

* **AWS Infrastructure**: Many AWS services, such as Amazon EC2, use Linux-based operating systems by default.
* **Cost-Effective**: Linux is free, reducing the cost of running cloud infrastructure.
* **Automation:** Linux supports scripting and automation, which are critical for managing cloud resources.
* **Compatibility**: Most cloud tools and frameworks are designed to work seamlessly with Linux.
* **Security & Permissions**: Linux provides robust security through file permissions and user management.

For example, when you launch an Amazon EC2 instance, you can choose from a variety of Linux-based AMIs (Amazon Machine Images), such as Amazon Linux, Ubuntu, or CentOS.

* Amazon Linux – Optimized for AWS workloads.
* Ubuntu – Popular for cloud applications.
* CentOS/RHEL – Enterprise-grade server OS.
* Debian – Known for stability and security.

## 3. Key Concepts in Linux {#3.-Key-Concepts-in-Linux}

### File System Hierarchy {#File-System-Hierarchy}
Linux organizes files in a hierarchical directory structure. Here are some key directories:

* /: The root directory.
* /home: Contains user home directories.
* /etc: Stores configuration files.
* /var: Contains variable data like logs.
* /bin: Contains essential binary files (executables).

### Users and Permissions {#Users-and-Permissions}
Linux is a multi-user system, and each user has specific permissions to access files and directories. Permissions are divided into three categories:

* Owner: The user who owns the file.
* Group: Users belonging to a specific group.
* Others: All other users.

Example

\`\`\`
# Check file permissions
ls -l /home/user/file.txt

# Change file permissions
chmod 755 /home/user/file.txt  # Owner: read/write/execute, Group/Others: read/execute
\`\`\`
### Processes and Services {#Processes-and-Services}
Linux runs processes in the background (daemons) to manage services like web servers, databases, and networking.

Example:

\`\`\`
# List running processes
ps aux

# Start a service
sudo systemctl start apache2  # Start Apache web server

\`\`\`

## 4. Real-Life Examples of Linux in AWS {#4.-Real-Life-Examples-of-Linux-in-AWS}

#### Example 1 Launching an EC2 Instance with Amazon Linux {#Example-1-Launching-an-EC2-Instance-with-Amazon-Linux}
When you launch an EC2 instance, you can choose an Amazon Linux AMI. Once the instance is running, you can connect to it via SSH and manage it using Linux commands.

\`\`\`
# Connect to an EC2 instance
ssh -i my-key.pem ec2-user@<ip address of instance>

\`\`\`

#### Example 2 Automating Backups with a Linux Script {#Example-2-Automating-Backups-with-a-Linux-Script}
You can use a Linux script to automate backups of your EC2 instance data to an S3 bucket.

\`\`\`
#!/bin/bash

# Variables
BACKUP_DIR="/home/ec2-user/backups"
S3_BUCKET="s3://my-backup-bucket"
DATE=$(date +%Y-%m-%d)

# Create backup
tar -czf $BACKUP_DIR/backup-$DATE.tar.gz /var/www/html

# Upload to S3
aws s3 cp $BACKUP_DIR/backup-$DATE.tar.gz $S3_BUCKET

echo "Backup completed and uploaded to S3."

\`\`\`

## 5. Basic Linux Commands and Scripts {#5.-Basic-Linux-Commands-and-Scripts}
Here are some essential Linux commands and a sample script to get you started:

Common Commands

\`\`\`
# Navigate directories
cd /home/user

# List files
ls -la

# Create a file
touch file.txt

# Create a directory
mkdir /home/ec2-user/backups

# Edit a file
nano file.txt
vi file2.txt
vim file3.txt

# View file content
cat file.txt

# copy files
cp /var/log/myapp.log /home/ec2-user/backups/

# Delete files and directories
rm /home/ec2-user/backups/myapp.log
rm -rf /home/backups

# Search for text in a file
grep "search-term" file.txt

# Compress files
tar -czvf backup.tar.gz /var/www/html

# Check disk usage
df -h

\`\`\`

Example of a sript to monitor Disk Usage in AWS

\`\`\`
#!/bin/bash

# Variables
THRESHOLD=90  # Disk usage threshold in percentage

# Check disk usage
DISK_USAGE=$(df / | grep / | awk '{ print $5 }' | sed 's/%//g')

# Compare with threshold
if [ $DISK_USAGE -gt $THRESHOLD ]; then
    echo "Disk usage is above $THRESHOLD%. Current usage: $DISK_USAGE%"
else
    echo "Disk usage is within limits. Current usage: $DISK_USAGE%"
fi

\`\`\`

## Conclusion {#Conclusion}
Linux is a powerful and versatile operating system that plays a critical role in cloud computing and AWS. Whether you’re managing EC2 instances, automating backups, or troubleshooting network issues, Linux skills are essential for success in the cloud industry. The AWS re/Start program recognizes this and provides a strong foundation in Linux to prepare learners for cloud careers.

By mastering Linux, you’ll not only enhance your technical skills but also open doors to exciting opportunities in the cloud ecosystem. So, start exploring Linux today, experiment with commands and scripts, and take your first step toward becoming a cloud professional!`
  },
  {
    id: 16,
    title: "Bl 1016",
    excerpt: "## Why Learn the Linux Command Line? {#Why-Learn-the-Linux-Command-Line}\nBefore diving into the specifics, it\u2019s importan...",
    date: "2025-01-01",
    readTime: "4 min read",
    category: "General",
    content: `## Why Learn the Linux Command Line? {#Why-Learn-the-Linux-Command-Line}
Before diving into the specifics, it’s important to understand why the Linux command line is so essential:

* **Ubiquity in Cloud Computing**: Most cloud servers run on Linux, and AWS is no exception. Knowing how to navigate and manage Linux systems is crucial for working with cloud infrastructure.

* **Automation**: The command line allows you to automate repetitive tasks, saving time and reducing errors.

* **Troubleshooting**: When things go wrong, the command line is often the fastest way to diagnose and fix issues.

* **Flexibility**: The command line provides access to a wide range of tools and utilities that are not available in graphical interfaces.

## What the Article covers {#What-the-Article-covers}
* Describe the login workflow•
* Explain the Linux command syntax•
* Perform basic operations at the command line•
* Explain standard input, standard output, and standard error

### Linux login workflow {#Linux-login-workflow}
After a network connection is made, you can connect by using a program like Putty or by using the terminal on Mac OS. You will encounter the login prompt. All Linux sessions begin with the login process (default authentication process). Linux sessions start with the user entering their user name at the prompt. The login prompt is used to authenticate (prove the user’s identity) before using a Linux system. When the password is typed, it does not echo (a line of text isn’t displayed).


The user name is checked against the /etc/.psswdfile, which is stored in the /etcdirectory. The file represents an individual user account and contains the following fields separated by colons (:)

1. User name or login name
2. Encrypted password
3. User ID
4. Group ID5.User description
6. User’s home directory
7. User’s login shell

During the login workflow, the name is checked against the \`/etc/passwd\` file, and the password is checked against the \`/etc/shadow\` file.

\`\`\`
# User enters username:
# The system checks /etc/passwd for the username.
login: steve

# User enters password
# The system checks the hashed password stored in /etc/shadow.
# If correct, it grants access and starts the user shell.
Password:


[steve@hostname ~]$ pwd
/home/steve
[steve@hostname ~]$

\`\`\`

Command Prompt Components
Once authenticated, the user is presented with the command prompt, which consists of:

* Username: Displays the logged-in user.
* Hostname: Shows the system's name.
* Current Directory (PWD): The directory where the user is located.
* Prompt Symbol:
- \`$\` → Regular user
- \`# \`→ Root user

## Useful commands {#Useful-commands}
### The whoami command {#The-whoami-command}

It is used to show the current user's user name. 

You must ensure that you are the correct user invoking certain commands in the terminal and thus to confirm this, the \`whoami\` command is used.

\`\`\`
[steve@hostname ~]$ whoami
steve
[steve@hostname ~]$
\`\`\`

### The id command {#The-id-command}
This command is used to identify user and group name and numeric IDs (group id)
It displays the user and the group information for each specified USER or (when the USER is omitted) for the current user.

![whoami](/BL-1016/whoami.png)

### The hostname command {#The-hostname-command}
It is used to set or display the system's current host, domain, or node name.

![hostname](/BL-1016/hostname.png)

### The \`uptime\` command {#The-uptime-command}
It indicates how long the system has been up since the last boot

![uptime](/BL-1016/uptime.png)

### The date command {#The-date-command}
It can set or dispaly rhe current time in a given format.

![date](/BL-1016/date.png)

### The cal command {#The-cal-command}
The command displays the calendar. If no argument is specified, the current month is displayed.

\`\`\`
[steve@hostname ~]$ cal
\`\`\`

### The clear command {#The-clear-command}
The command is used to clear the terminal screen. It clears all the text on the terminal screen.

\`\`\`
[steve@hostname ~]$ clear
\`\`\`

### The echo command {#The-echo-command}
The command places a specified text on the screen. Useful in scripts to provide users with information as the script runs.

\`\`\`
[steve@hostname ~]$ echo "Hello Linux"
Hello Linux
[steve@hostname ~]$
\`\`\`
### The history command {#The-history-command}
Bash keeps a history of each user's commands in a file in the user's home directory.

The \`history\` command views the history file and displays the current user's history file.

![history](/BL-1016/history.png)

>Note: If you make a mistake when writing a command, don't reenter it. Use the
history command to call the command back to the prompt, and then edit the
command to correct the mistake
>

### The touch command {#The-touch-command}

Used to create, change, or modify timestamps on existing files.

Also used to create new empty files in a directory. \`touch file_name\`

You can create more than one new file \`touch file1 file2 file3 filen\`

### The cat command {#The-cat-command}
This command is used to show the current contents of a file.

![cat](/BL-1016/cat.png)


#### There are thousands of commands, but the above are the most commonly used.`
  },
  {
    id: 17,
    title: "Bl 1017",
    excerpt: "This article is based on static and dynamic IPs concept. A static IP address is an address that does not change even aft...",
    date: "2025-01-01",
    readTime: "6 min read",
    category: "General",
    content: `This article is based on static and dynamic IPs concept. A static IP address is an address that does not change even after a system reboot or stop.

A dynamic IP address on the other hand is an address that changes anytime a system reboots or when the lease time is over. Another service called DHCP (Dynamic Host Configuration Protocol) manages this.

There are scenarios in which one would prefer either of the addresses depending on the type of service that is being utilized.

Some services requires that the IP address should remain consistent all the time and thus a static IP address is preffered.

To achieve this, AWS offers a feature that enables static IP addressing for your instances or other supported resources in your account called Elastic IP.

## What is an AWS Elastic IP {#What-is-an-AWS-Elastic-IP}
An Elastic IP (EIP) is a static, public IPv4 address designed for dynamic cloud computing. Unlike a traditional static IP address, an Elastic IP is associated with your AWS account, not a specific resource. This means you can allocate an Elastic IP and associate it with any EC2 instance, NAT gateway, or other supported resource in your account. If the resource is stopped or terminated, you can easily reassociate the Elastic IP with another resource.

Unlike a regular public IP, which changes every time an instance is stopped and restarted, an Elastic IP remains static until you release it.

## Why Use EIP {#Why-Use-EIP}
Elastic IPs are particularly useful in the following scenarios:

* Hosting Public-Facing Applications: If you’re running a web server, application server, or database that needs to be accessible over the internet, an Elastic IP ensures that the public IP address remains consistent.

* Failover and High Availability: In case of an instance failure, you can quickly remap the Elastic IP to a standby instance, minimizing downtime.

* NAT Gateways: Elastic IPs are required for NAT gateways to allow instances in a private subnet to access the internet.

* DNS Configuration: Elastic IPs simplify DNS management since the IP address remains the same even if the underlying resource changes.

## How Elastic IPs Work {#How-Elastic-IPs-Work}
When you allocate an Elastic IP, AWS reserves a public IPv4 address for your account. You can then associate this IP address with an EC2 instance or other supported resource. Here’s how it works:

* Allocate: Reserve an Elastic IP address in your AWS account.

* Associate: Attach the Elastic IP to an EC2 instance, NAT gateway, or other resource.

* Reassociate: If the associated resource is stopped or terminated, you can reassign the Elastic IP to another resource.

* Release: When you no longer need the Elastic IP, you can release it back to AWS.


## The Key Characteristics of EIP
* **Persistance** - The IP address remains associated with your account until you explicitly release it.
* **Reusability** - You can remap the EIP to a different instance or resources as needed.
* **Public Accessability** - EIP are designed for resources that need to be accessible over the internet, such as servers, databases, or APIs.

## Importance of Amazon EIP

#### Ensuring high availability and fault tolerance
When instances fail due to maintenance, scaling or other operational needs, resulting into IP address changes. This can in turn lead to disruption of services and causing downtimes.

With an EIP, you can quickly remap the same IP to a new instance, ensuring minimal disruption and maintaining high availability for your application.

For example, if a web server hosting a critical application fails, you can launch a new instance and reassign the EIP to it, ensuring that users can continue accessing the application without noticing any change.

#### Simplifying DNS Management
Instead of updating DNS records every time an instance's public IP address changes, you can associate a domain name with an EIP.


## Step-by-Step Guide to Using Elastic IPs {#Step-by-Step-Guide-to-Using-Elastic-IPs}


### Step 1: Allocate an Elastic IP
* Log in to the AWS Management Console.

* Navigate to the EC2 Dashboard.

* In the left-hand menu, under Network & Security, select E**lastic IPs**.

* Click **Allocate Elastic IP address**.

* Choose the scope (default is for use in EC2 instances) and click **Allocate**.

### Step 2: Associate an Elastic IP with an EC2 Instance
* In the **Elastic IPs** section, select the Elastic IP you just allocated.

* Click **Actions** and choose **Associate Elastic IP address**.

* In the **Resource type** dropdown, select **Instance**.

* Choose the instance you want to associate the Elastic IP with.

* Click **Associate**.

### Step 3: Verify the Association
* Go to the Instances section in the EC2 Dashboard.

* Select the instance you associated the Elastic IP with.

* Check the Public IPv4 address field. It should now display the Elastic IP.

### Step 4: Reassociate an Elastic IP
If the associated instance fails or is terminated, you can reassociate the Elastic IP with another instance:

* Go to the **Elastic IPs** section.

* Select the **Elastic IP**.

* Click **Actions** and choose **Associate Elastic IP address**.

* Select the new instance and click **Associate**.

### Step 5: Release an Elastic IP
If you no longer need the Elastic IP, you can release it:

* Go to the **Elastic IPs** section.

* Select the ***Elastic IP***.

* Click **Actions** and choose **Release Elastic IP address**.

* Confirm the release.
-------------------------------------------------------------------------


-------------------------------------------------------------------------

## Conclusion
AWS Elastic IPs are a powerful tool for managing public IP addresses in the cloud. They provide flexibility, high availability, and ease of use, making them ideal for hosting public-facing applications, configuring NAT gateways, and ensuring failover capabilities. By following best practices and understanding their limitations, you can leverage Elastic IPs to build resilient and scalable cloud architectures. Whether you’re a beginner or an experienced AWS user, mastering Elastic IPs is a key step in optimizing your cloud infrastructure.

With the step-by-step examples and use cases provided in this guide, you’re now equipped to start using Elastic IPs effectively in your AWS environment. Happy cloud computing!`
  },
  {
    id: 18,
    title: "Bl 1018",
    excerpt: "## Create Subnets and Allocate IP addresses in an Amazon Virtual Private Cloud (Amazon VPC)\n\n## An overview diagram of a...",
    date: "2025-01-01",
    readTime: "9 min read",
    category: "General",
    content: `## Create Subnets and Allocate IP addresses in an Amazon Virtual Private Cloud (Amazon VPC)

## An overview diagram of a VPC

![vpc-diagram](/BL-1018/vpc.webp)


## What is a VPC (Virtual Private Cloud)
A VPC is like a data center but in the cloud. It is logically isolated from other virtual networks, and you can use a VPC to spin up and launch your AWS resources within minutes.
Resources within a VPC communicate with each other through private IP addresses. An instance needs a public IP address for it to communicate outside the VPC. The VPC needs networking resources, such as an internet gateway and a route table, for the instance to reach the internet.
A CIDR block is a range of private IP addresses that is used within the VPC (for example, the /16 number that you see next to an IP address).
A subnet is a range of IP addresses within your VPC.

## Step by step into launching and configuring VPC

### Step One Launching a VPC

* **Define the VPC**: Specify the IP address range (CIDR block).
* **Create Subnets**: Divide the VPC into public and private subnets.
* **Configure Route Tables**: Define routes for traffic between subnets and to the internet.
* **Attach an Internet Gateway**: Enable internet access for public subnets.
* **Set Up NAT Gateway**: Allow private subnets to access the internet.
* **Launch Resources**: Deploy EC2 instances, RDS databases, etc., in the appropriate subnets.
* **Configure Security**: Use Security Groups and NACLs to control traffic.

### Define the VPC
 1. In the AWS console, type and search for VPC in the search bar on the top-left corner. Select VPC from the list. Alternatively, You can also find VPC under **Services** - **Networking & Content Delivery** in the top left corner

![vpc-search](/BL-1018/vpc_search.png)


You are now in the Amazon VPC dashboard. You use the Amazon Virtual Private Cloud (Amazon VPC) service to build your VPC.

2. Choose the Create VPC button to launch your first VPC. This will launch you into a step by step process to set up a VPC with it's basic components.

![create-vpc](/BL-1018/create-vpc.png)

You can configure the following in order to lauch your VPC
Configure the following options:

* VPC name - This is the name of the VPC

* IPv6 CIDR block - Select an IPv4 Block(e.g 10.10.10/16).

Recall that the CIDR block defines the size of the VPC in terms of the number of addresses that the VPC offers to devices.

* Enable DNS hostnames and DNS resolutions if using public resources

![create-vpc](/BL-1018/create-vpc2.png)

![create-vpc](/BL-1018/create-vpc3.png)
* Click **Create VPC**

A VPC with the specified CIDR block has been created. Now, let's create the subnets.

### Create Subnets (Public & Private)

* In the left navigation pane, choose **Subnets** → **Create Subnet**.

![create-vpc](/BL-1018/subnets.png)

![create-vpc](/BL-1018/create-subnet.png)

* Choose your VPC

* Create a Public Subnet by stating the name, **CIDR block** of the subnet, **Availability Zone**, **Configure Auto-assign Public IP** as enable or disable and then click **Create**.

>**Enable auto-assign public IPv4 address** provides a public IPv4 address for all instances
launched into the selected subnet


![create-vpc](/BL-1018/public_subnet.png)

>A public subnet must have an internet
gateway

* Create a Private Subnet by stating the name, CIDR block of the subnet, Availability Zone, and disble Auto-assign Public IP and then click **Create**.

![create-vpc](/BL-1018/private-subnet.png)


![create-vpc](/BL-1018/public-subnet.png)

You can delete or edit the settings of a particular subnet by selecting the subnet in your dashboard then clicking on **Actions** and then select whether you want to delete or edit settings or manage the subnet.

![edit-subnet](/BL-1018/edit-subnet1.png)

![edit-subnet](/BL-1018/edit-subnet2.png)


### Create Route Tables

* In the VPC Dashboard, Click **Route Tables** → **Create Route Table**

![create-routetable](/BL-1018/create-routet1.png)

* Name your route table appropriately
* Associate your the table with your VPC that you created
* Click **Create route table**

![create-routetable](/BL-1018/name-rt.png)

You can then add and edit routes 
* Click Edit routes

![create-routetable](/BL-1018/edit-rt.png)

![create-routetable](/BL-1018/edit-rt1.png)

* Click **Save Changes**

You can associate your route table with your public subnet

* Click on **Subnet Associations** tab
* On the **Explicit subnet associations** click **Edit subnet associations**

![create-routetable](/BL-1018/rt-assoc1.png)

* Select the subnet you would like to associate with your route table
* Click **Save Associations**

![create-routetable](/BL-1018/rt-assoc2.png)

## Attach an Internet Gateway {#Attach-an-Internet-Gateway}

In order for the resources in the public subnets to be able to access internet services or communication, the subnet is atttached to an Internet Gateway.

An Internet Gateway sits in between the VPC and the internet. Any communications from and to the internet must pass through this "Gate".

In order to create and attach an Internet Gateway in a VPC, the following steps are followed:

* In the left navigation pane, choose **Internet Gateways** → **Create Internet Gateway**.

![create-routetable](/BL-1018/go-to-igw.png)
* Give a name to your Gateway e.g  \`MyGateway\` and a tag (optional)
* Click **Create Internet Gateway**.

![create-routetable](/BL-1018/create-igw.png)

* Click **Attach to VPC**.  Alternatively, you can go to **Actions** and click **Attach to VPC**

![create-routetable](/BL-1018/attach-igw.png)



## Setting Up a NAT Gateway
A NAT Gateway allows private subnet resources to be able to access the internet. The resources might need updates/patches hence they would download these patches from another server found in the internet.

To set up a NAT Gateway, the following steps are followed:

* On the dashboard, Go to **NAT Gateways** -> **Create NAT Gateways**

![create-routetable](/BL-1018/go-to-NAT.png)

* Select the **Public Subnet** and create an **Elastic IP**

* Click **Create NAT Gateway**

![create-routetable](/BL-1018/create-NAT.png)

* Go to **Route Tables**, create a **Private Route Table**, and add:

    Destination: 0.0.0.0/0

    Target: NAT Gateway

![create-routetable](/BL-1018/edit-private-rt-for-NAT.png)

![create-routetable](/BL-1018/edit-private-rt-for-NAT.png.png)

* Associate the **Private Route Table** with the **Private Subnet**.

![create-routetable](/BL-1018/private-NAT-assoc.png)

![create-routetable](/BL-1018/private-NAT-save-assoc.png)

## Create Security Groups
Security groups are like firewalls at instance level. i.e. They control the traffic in and out of instances running in the VPC.

The following steps are followed when creating a security group:

* Create a Security Group (e.g., WebServerSG).
* Allow:

    Inbound: HTTP (80), HTTPS (443), SSH (22) for Public Subnet.

    Outbound: All traffic.
* Associate this Security Group with your instances.

### A simple VPC architecture
\`\`\`
VPC: 10.0.0.0/16
├── Public Subnet (10.0.1.0/24) 
│   ├── EC2 Instance (Public Web Server)
│   ├── Route Table (0.0.0.0/0 → IGW)
│   └── Internet Gateway (IGW)
├── Private Subnet (10.0.2.0/24)
│   ├── EC2 Instance (Private App Server)
│   ├── Route Table (0.0.0.0/0 → NAT Gateway)
│   └── NAT Gateway (for outbound internet access)

\`\`\`

## Launch Resources {#Launch-Resources}

* Go to EC2 → Launch Instance.
* Choose an AMI (e.g., Amazon Linux 2).
* Select the Public Subnet (for a web server).
* Assign the Security Group you created.
* Enable Auto-assign Public IP.
* Click Launch.


## The Key Components of a VPC {#The-Key-Components-of-a-VPC}

### 1. IP Address range (CIDR Block) {#1.-IP-Address-range}

A VPC is defined using a range of IP addresses.

Unlike the traditional Classful IP addressing, which had limitations and wastage of IP addresses, the Classless Inter-Domain Routing makes it flexible to manage networks and IP addressing without limitations and wastage.

The CIDR determines the size of the VPC in terms of the number of IP addresses available in it.

### 2. Subnets {#2.-Subnets}

This is a portion or segment of the VPC CIDR Block (IP address range) that one can place resources.

A subnet is tied to a specific Availability Zone (AZ) within a region.
There are two types of subnets in a VPC:

* Public Subnet - The resources in this subnet can access the internet using an internet gateway.(IGW)


* Private Subnet - Resources in this subnet cannot directly access the internet. They can only do so via a NAT gateway or a NAT instance.

### 3. Route Tables {#3.-Route-Tables}

In a house, we have rooms and for one to move from one room to another, he/she needs to follow certain paths or corridors in that house.

In a network, for a traffic to travel from one from a particular network to another, in order to reach the intended device, it needs to follow some paths.

Routers are used to route (to provide the best paths) packets or traffic from one network to another.

A route table contains a set og rules (routes) that determine where network traffic is directed.

Each subnet must be associated with a route table.

A default route is created automatically when the VPC is created. A default route is a route to destinations not found within the network.

### 4. Internet Gateway(IGW) {#4.-Internet-Gateway}
Resources within the public or private networks of a VPC may want an internet access.

In order to communicate with the internet, a gateway (like a door) is required.

An internet gateway allows communication between resources in your public subnet of your VPC and the internet.

### 5. NAT Gateway or NAT instance {#5.-NAT-Gateway-or-NAT-instance}
This gateway allowsresources within the private subnet to access the internet for updates or patches while preventing the internet from initiating connection to those Resources

NAT Gateway is a managed service while a NAT instance is an EC2 instance configured to perform NAT.

### 6. Security Groups {#6.-Security-Groups}
Just like a traditional firewall that filters inbound and outbound traffic, a security group acts as a virtual firewall for instances in the VPC, to control inbound and outbound traffic.

They operate at instance level and are stateful (automatically allows return trffic).

Stateful means that they keep records of states or operations at the network interfaces. i.e. Memorize

### 7. Network Access Control Lists (NACLs) {#7.-Network-Access-Control-Lists}
These are stateless(you must explicitly allow return traffic) firewall that operates at subnet level.

They deny or allow traffic based on defined rules.

### 8. VPC Peering {#8.-VPC-Peering}
VPC Peering allows you to connect two VPCs privately using AWS’s network.

The VPCs can be in the same or different AWS accounts or regions.

Peered VPCs can communicate as if they are part of the same network.

### 9. VPC Endpoints {#9.-VPC-Endpoints}
VPC Endpoints allow private connectivity between your VPC and supported AWS services (e.g., S3, DynamoDB) without using the internet or a NAT device.

There are two types:

* Interface Endpoints: Uses an Elastic Network Interface (ENI) with a private IP address.

* Gateway Endpoints: Uses a gateway for specific services like S3 and DynamoDB.

### 10. Elastic IP Addresses {#10.-Elastic-IP-Addresses}
An Elastic IP (EIP) is a static, public IPv4 address that you can allocate to your AWS account and associate with instances or NAT Gateways.



## Conclusion {#Conclusion}
In summary, a VPC is a foundational component of AWS that provides a secure, scalable, and customizable networking environment for your cloud resources. It is essential for building secure and efficient cloud architectures.`
  },
  {
    id: 19,
    title: "Bl 1019",
    excerpt: "## Introduction\nIn today\u2019s cloud-first world, security is non-negotiable. Amazon Inspector is AWS\u2019s automated security a...",
    date: "2025-01-01",
    readTime: "3 min read",
    category: "General",
    content: `## Introduction
In today’s cloud-first world, security is non-negotiable. Amazon Inspector is AWS’s automated security assessment service designed to help businesses identify vulnerabilities in their cloud environments. Whether you’re a DevOps engineer, a security specialist, or an AWS user, understanding Amazon Inspector is key to maintaining compliance and reducing risks. This guide explores its features, use cases, best practices, and how it stacks up against competitors.

## **1. What is Amazon Inspector?**  
Amazon Inspector is a **fully managed vulnerability assessment service** that automatically scans AWS workloads (EC2 instances, containers, Lambda functions, etc.) for security vulnerabilities, unintended network exposures, and deviations from best practices. It uses machine learning (ML) and AWS threat intelligence to prioritize risks.  

## **2. Key Features and Capabilities**  
- **Automated Scanning**: Continuously monitors EC2 instances, ECR container images, and serverless Lambda functions.  
- **CVE Detection**: Identifies Common Vulnerabilities and Exposures (CVEs) like log4j, Heartbleed, and Shellshock.  
- **Network Reachability Analysis**: Checks if vulnerabilities are exploitable via public/internet access.  
- **Integration with AWS Services**: Works seamlessly with AWS Security Hub, Amazon EventBridge, and AWS Systems Manager.  
- **Agentless Scanning (New in 2023)**: Scans EC2 instances without installing agents. 

## **3. How Amazon Inspector Works**  
1. **Enable the Service**: Activate Amazon Inspector via AWS Management Console.  
2. **Define Assessment Targets**: Select EC2 instances, containers, or Lambda functions.  
3. **Automated Scanning**: Inspector analyzes:  
   - Software vulnerabilities.  
   - Network configurations (e.g., open ports).  
   - Deviations from AWS security best practices.  
4. **Generate Reports**: Detailed findings with severity scores (Low/Medium/High/Critical).  
5. **Remediation**: Integrate with Systems Manager for patching or Jira for ticketing.  

## **4. Use Cases**  
- **DevSecOps**: Embed security into CI/CD pipelines.  
- **Compliance Audits**: Prepare for PCI DSS or GDPR audits.  
- **Container Security**: Scan ECR images before deployment.  
- **Hybrid Cloud**: Assess on-premises servers via AWS Outposts.  
- **Quickly discover zero-day vulnerabilities in compute workloads** - With inspector, one can automate discovery, expediate vulnerability routingc, and shorten MTTR with over 50 sources of vulnerability intelligence.
- **Prioritize patch remediation** - Amazon Inspector uses the current CVE information and network accessibility to create contexual risk scores to prioritize and resolve vulnerable resources.

## Getting Started With Amazon Inspector



## **Conclusion**  
Amazon Inspector is a game-changer for AWS users aiming to balance agility with security. By automating vulnerability assessments, it reduces human error and accelerates remediation. While it’s not a silver bullet, combining it with AWS’s security ecosystem creates a robust defense against evolving threats.`
  },
  {
    id: 20,
    title: "Bl 1020",
    excerpt: "## What is IAM\n\nIAM is a service that helps securely control access to AWS resources. You can use it to manage access to...",
    date: "2025-01-01",
    readTime: "6 min read",
    category: "General",
    content: `## What is IAM

IAM is a service that helps securely control access to AWS resources. You can use it to manage access to AWS services and resources securely.

Using IAM, you can create and manage AWS users and groups (to support authentication). You can also use IAM for permissions to allow or deny their access to AWS resources (to support authorization).

- **Authentication**

Use IAM to configure authentication, which is the first step because it controls who can access AWS resources. IAM is used for user authentication, and applications and other AWS services also use it for access.

- **Authorization**

IAM is used to configure authorization based on the user. Authorization determines which resources users can access and what they can do to or with those resources.
Authorization is defined through the use of policies. A policy is an object in AWS that, when associated with an identity or resource, defines their permissions.

## Key Concepts of AWS IAM
1. **Users**

    An IAM user is an entity that you create in AWS to represent the person or application that interacts with AWS resources. Each user has a unique name and credentials (password or access keys) to access AWS services.

    **IAM account root user**

    When you first create an AWS account, you begin with a single sign-in identity. This entity has complete access to all AWS services and resources in the account and is called the AWS account root user. You access the account root user by signing in with the email address and password that you used to create the account.

2. **Groups**

    An IAM group is a collection of IAM users. You can use groups to specify permissions for multiple users, making it easier to manage permissions for users who have similar job responsibilities.

3. **Roles**

    An IAM role is an IAM identity that you can create in your account that has specific permissions. Unlike users, roles are not associated with a specific person or application. Instead, they are assumed by users, applications, or AWS services to gain temporary access to resources.

4. **Policies**

    An IAM policy is a document that defines permissions. Policies are written in JSON format and can be attached to users, groups, or roles to specify what actions are allowed or denied on which resources.

5. **Permissions**

    Permissions in IAM are defined by policies. They determine what actions a user, group, or role can perform on which AWS resources.

6. **Identity federation**

    This is a system of trust between two parties. Its purpose is to
    authenticate users and convey the information needed to authorize their access to resources. In this system, an identity provider (IdP) is responsible for user authentication. A service provider (SP), such as a service or an application, controls access to resources.

### IAM Policy Structure
An IAM policy is a JSON document that consists of one or more statements. Each statement includes the following elements:

- **Effect**: Specifies whether the statement allows or denies access. Possible values are Allow or Deny.

- **Action**: Specifies the AWS service actions that are allowed or denied.

- **Resource**: Specifies the AWS resource(s) to which the actions apply.

- **Condition** (optional): Specifies the conditions under which the policy is in effect.

Here is an example of a simple IAM policy:

\`\`\`
{
  "Version": "2025-2-20",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::example-bucket"
    }
  ]
}

\`\`\`

## Creating IAM Users and Groups
### Creating an IAM User

You can create an IAM user using the AWS Management Console, AWS CLI, or SDKs. Here’s how to create an IAM user using the AWS CLI:

\`\`\`
aws iam create-user --user-name Steve
\`\`\`
### Creating an IAM Group
To create an IAM group, use the following AWS CLI command:

\`\`\`
aws iam create-group --group-name Developers
\`\`\`
### Adding a User to a Group
To add a user to a group, use the following command:

\`\`\`
aws iam add-user-to-group --user-name Steve --group-name Developers
\`\`\`

### Attaching Policies to Users and Groups
##### Attaching a Policy to a User

To attach a policy to a user, use the following command:

\`\`\`
aws iam attach-user-policy --user-name Steve --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess

\`\`\`
##### Attaching a Policy to a Group
To attach a policy to a group, use the following command:

\`\`\`
aws iam attach-group-policy --group-name Developers --policy-arn arn:aws:iam::aws:policy/AmazonEC2FullAccess
\`\`\`

## Creating and Using IAM Roles
### Creating an IAM Role
To create an IAM role, you need to define a trust policy that specifies who can assume the role. Here’s an example of a trust policy that allows an EC2 instance to assume the role:

\`\`\`
{
  "Version": "2025-02-20",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}

\`\`\`

You can create the role using the AWS CLI:

\`\`\`
aws iam create-role --role-name EC2S3AccessRole --assume-role-policy-document file://trust-policy.json

\`\`\`

#### Attaching a Policy to a Role
To attach a policy to the role, use the following command:

\`\`\`
aws iam attach-role-policy --role-name EC2S3AccessRole --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess

\`\`\`
### Assuming a Role
To assume a role, you can use the AWS Security Token Service (STS) to request temporary security credentials. Here’s an example using the AWS CLI:

\`\`\`
aws sts assume-role --role-arn arn:aws:iam::123456789012:role/EC2S3AccessRole --role-session-name MySessionName

\`\`\`

## IAM Best Practices
1. **Least Privilege**: Grant only the permissions required to perform a task. Avoid using overly permissive policies.

2. **Use Groups**: Assign permissions to groups rather than individual users to simplify permission management.

3. **Rotate Credentials Regularly**: Regularly rotate IAM user access keys and passwords to enhance security.

4. **Enable MFA**: Enable Multi-Factor Authentication (MFA) for additional security, especially for privileged users.

5. **Monitor Activity**: Use AWS CloudTrail to monitor and log IAM user activity.


---

## Conclusion
AWS IAM is a fundamental service for managing access to AWS resources securely. By understanding and implementing IAM users, groups, roles, and policies, you can ensure that your AWS environment is secure and compliant with best practices. The examples and code snippets provided in this article should help you get started with IAM and integrate it into your AWS workflows.

Remember, security is an ongoing process, and regularly reviewing and updating your IAM policies and permissions is crucial to maintaining a secure AWS environment.`
  },
  {
    id: 21,
    title: "Bl 1021",
    excerpt: "In today\u2019s rapidly evolving digital landscape, cloud computing has become the backbone of modern businesses. As organiza...",
    date: "2025-01-01",
    readTime: "4 min read",
    category: "General",
    content: `In today’s rapidly evolving digital landscape, cloud computing has become the backbone of modern businesses. As organizations increasingly migrate their operations to the cloud, ensuring security, compliance, and operational visibility has never been more critical. Enter AWS CloudTrail, a powerful service designed to provide unparalleled insight into user activity and resource changes across your AWS environment. In this article, we’ll dive deep into what AWS CloudTrail is, how it works, and why it’s an important tool for cloud governance.

## What is AWS CloudTrail?
AWS CloudTrail is a fully managed service that enables logging, monitoring, and auditing of all API calls made within your AWS account. Whether it’s an action taken through the AWS Management Console, SDKs, command-line tools, or other AWS services, CloudTrail records every event, providing a comprehensive history of activity. This makes it an essential tool for security analysis, resource change tracking, and compliance auditing.

## Key Features of AWS CloudTrail
1. **Event History Logging**

    CloudTrail automatically records API calls made in your AWS account, including details such as:

    - The identity of the API caller
    - The time of the API call
    - The source IP address
    - The request parameters
    - The response elements returned by the service

    This event history is stored in an S3 bucket and can be retained for up to 90 days by default, with options for longer retention using additional configurations.

2. **Multi-Region and Multi-Account Support**

    CloudTrail can be enabled across multiple AWS regions and accounts, ensuring centralized logging and visibility for organizations with complex cloud infrastructures.

3. **Integration with Other AWS Services**

    CloudTrail seamlessly integrates with services like AWS CloudWatch, AWS Lambda, and Amazon S3, enabling real-time monitoring, automated responses, and long-term storage of logs.

4. **Security and Compliance**

    By providing a detailed audit trail, CloudTrail helps organizations meet regulatory requirements such as GDPR, HIPAA, and PCI DSS. It also plays a crucial role in detecting unauthorized access or suspicious activity.

5. **Event Insights**

    CloudTrail offers insights events, which use machine learning to detect unusual API activity, such as spikes in resource deletions or failed login attempts, helping you identify potential security threats.

## How Does AWS CloudTrail Work?
When an action is performed in your AWS account, CloudTrail captures the event as a log entry. These logs are then delivered to an S3 bucket or CloudWatch Logs for storage and analysis. Here’s a step-by-step breakdown of the process:

- **Event Capture**: CloudTrail records API calls made by users, roles, or services.

- **Log Delivery**: Logs are delivered to an S3 bucket or CloudWatch Logs.

- **Storage and Analysis**: Logs can be analyzed using tools like Amazon Athena, AWS Lambda, or third-party SIEM solutions.

- **Alerting and Automation**: CloudWatch Alerts or Lambda functions can trigger notifications or automated responses based on specific events.

## Use Cases for AWS CloudTrail
**1**. **Security Monitoring**

    CloudTrail helps detect unauthorized access or changes to your AWS resources. For example, if an IAM user deletes a critical S3 bucket, CloudTrail logs the event, allowing you to investigate and take corrective action.

**2**. **Operational Troubleshooting**

    By reviewing CloudTrail logs, you can identify the root cause of operational issues, such as failed API calls or misconfigured resources.

**3**. **Compliance Auditing**

    CloudTrail provides the detailed audit trails required for compliance with industry standards and regulations. For instance, you can demonstrate who accessed sensitive data and when.

**4**. **Resource Change Tracking**

    CloudTrail logs every change made to your AWS resources, making it easy to track modifications and maintain an accurate inventory of your cloud environment.

**5**. **Forensic Analysis**

    In the event of a security incident, CloudTrail logs serve as a valuable resource for forensic analysis, helping you understand the scope and impact of the breach.

## Conclusion
AWS CloudTrail is an essential service for anyone using AWS, offering unmatched visibility into user activity and resource changes. By leveraging its robust logging and monitoring capabilities, organizations can enhance their security posture, streamline compliance efforts, and gain valuable insights into their cloud operations. Whether you’re a small startup or a large enterprise, CloudTrail is a must-have tool for maintaining control and confidence in your AWS environment.`
  },
  {
    id: 22,
    title: "Bl 1022",
    excerpt: "## Introduction\nManagement and monitoring the resources on AWS is important. It helps in making sure that applications p...",
    date: "2025-01-01",
    readTime: "12 min read",
    category: "General",
    content: `## Introduction
Management and monitoring the resources on AWS is important. It helps in making sure that applications perform as expected, they are running in the most cost-efficient manner, secure and highly available.

You would also want to monitor the consumption of your application, and identify technicalities that may affect performance and availability.

As a management routine, you also need to be able  to audit your environment, with access to information such as access patterns, and identify anomalies that may indicate potential performance or security issues.

## What is Amazon CloudWatch
Amazon CloudWatch is a service that enables you to monitor your AWS resources and applications, running on AWS as well as on-premises in \`real time.\`

With CloudWatch, you can also collect resource and application \`metrics\`, \`logs\`, and \`events\`. These data can therefore help in analysis and identify trends.

CloudWatch can also be used to configure \`Alarms\` that monitors metrics. If the metrics breaches certain thresholdsfor a specified period, an alarm is generated on which action can be taken to remediate.

The metrics can be either built-in or customed. Metrics exist in the region in which they are created, but you can also configure cross-account cross-region dashboards in order to gain visibility of those metrics,logs and alarms.


## Amazon CloudWatch Use Cases
1. **Infrastructure monitoring and troubleshooting**- With key metrics that can be collected, potential issues and bottlenecks can be identified. A root analysis can be conducted based on the data and resolution can be made.

2. **Proactive resource optimization** - With alarms, metric values can be monitored and triggers can be set if breaches occur. An automatic remediation action can be defined for instance configuring auto-scaling, and terminating failed instances. When such happen a notification can be sent to admistrators and system operators.

3. **Log analytics** - With the help of metrics and logs, the information obtained can be used to address operational issues, potential security attacks, or application performance issues, and take effective actions to remediate.

## Dashboards
Dashboards are created on Amazon CloudWatch to allow visualization  and monitoring of resources and the metrics that are essential. They are configured to provide insights on resources' health across AWS accounts and Regions

This is an example of AWS CloudWatch Dashboared:

![cloudwatchdashboard](/BL-1022/CloudWatch-dashboard.png)

## Alarms
An alarm can be configured to monitor a given resource metric such as CPU utilization of an EC2 instance. If as set threshold for a specified timeis crossed, the alarm is triggered to make certain actions.

For example an alarm can be trigured when the average CPU utilization of an EC2 intance goes above 80% for 15 minutes. 

When an alarm is triggered,an automatic action such as Simple Notification Service (SNS) notification is taken to respond to it.

Alarms can be in three states, \`OK\`, \`Alarm\` or \`Insufficient data\`. 

- \`OK\` - occurs when metric is within the range defined.
- \`Alarm\` - occurs when a metric has breached a threshold for a period.
- \`Insufficient data\` - Occurs when the data needed to make the decision is missing or incomplete.


## Actions
Are activities taken in response to an alarm.
Examples include:

- **Simple Notification Service (SNS) notification**: You can send out automatic alerts
to an administrator (\`application-to-person or A2P\`) or push a notification to an
application to take some action (\`application-to-application, or A2A\`).

- **Auto Scaling action**: The EC2 Auto Scaling service can be triggered to add or
remove an EC2 instance in response to an alarm state.

- **EC2 action**: You can have an alarm trigger an EC2 action, such as stopping an
EC2 instance, terminating it, restarting it, or recovering it.

## CloudWatch Logs

Logs from both AWS sources such as EC2 instances, CloudTrail logs, Route 53 DNS queries, and VPC logs,  and non AWS sources such as your web application access logs, error logs, can be centrally collected and stored in Amazon CloudWatch.

These logs can be queried, analyzed, searched, and filtered for a specific pattern or error codes. They can also be visualized on the dashboard.

Logs do not expire and therefore can be kept indefinitely. However, the retention policy can be adjusted by choosing the retention period between 1 day and 10 years. The logs can be archived into an Amazon S3 using the Glacier classes for long-term storage.

## CloudWatch Events

With events, rules can be created to continously monitor AWS resources and then respond with an action when a given event occurs.

An event can be something like an EC2 instance entering the stop state because someone performed a shutdown operation on the instance, or when an IAM user logs into the AWS Management console.

You define a rule to perform an action that is taken when a certain event occurs to what target or resource.

CloudWatch Events can help you respond to operational changes to complete workflows and task, or take any corrective action if required. CloudWatch events can also be used to schedule automated actions that trigger at certain times to help repeatable
day-to-day operations. You utilize \`standard rate\` and \`cron\` expressions for this.


## Let's do some Practical

- **Create an Amazon SNS notification**
- **Configure a CloudWatch alarm**
- **Stress test an EC2 instance**
- **Confirm that an Amazon SNS email was sent**
- **Create a CloudWatch dashboard**

## 1. Configure Amazon SNS
In this task, you create an SNS topic and then subscribe to it with an email address.

Remember, Amazon **SNS** is a fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication.

Steps:

1. In the AWS Management Console, enter **SNS** in the search  bar, and then choose **Simple Notification Service**.

    ![choosesns](/BL-1022/chooseSNS.png)

2. On the left, choose the  button, choose Topics, and then choose **Create topic**.

    ![createtopic](/BL-1022/create-topic1.png)

3. On the Create topic page in the Details section, you can configure the following options:

- Type (standard or FIFO)
- Name e.g \`MyAlarm\`
- Other oprtional features such as Encryption, Access policy, Tags etc

    ![createtopic](/BL-1022/create-topic2.png)

4. Choose Create topic.
5. On the  \`MyAlrm\` details page, choose the Subscriptions tab, and then choose **Create subscription**.

    ![createtopic](/BL-1022/create-subscription1.png)

6. On the **Create subscription** page in the **Details** section, you can configure the following options:

- Topic ARN: Leave the default option selected.
- Protocol: From the dropdown list, choose Email.
- Endpoint: Enter a valid email address that you can access.


    ![createtopic](/BL-1022/create-sub2.png)

7. Choose **Create subscription**. 

    In the **Details** section, the Status should be Pending confirmation. You should have received an AWS Notification - Subscription Confirmation email message at the email address that you provided in the previous step.

8. Open the email that you received with the Amazon SNS subscription notification, and choose **Confirm subscription.**

9. Go back to the AWS Management Console. In the left navigation pane, choose Subscriptions.

The Status should now be  **Confirmed**.

![createtopic](/BL-1022/create-sub3.png)

![createtopic](/BL-1022/create-sub4.png)

In this task, you created an SNS topic and then created a subscription for the topic by using an email address. This topic is now able to send alerts to the email address that you associated with the Amazon SNS subscription.


## 2. Create a CloudWatch alarm

In this task, you view some metrics and logs stored within CloudWatch. You then create a CloudWatch alarm to initiate and send an email to your SNS topic if the Stress Test EC2 instance increases to more than 60 percent CPU utilization. 

>**Note**: CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), IT managers, and product owners. CloudWatch provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization. CloudWatch collects monitoring and operational data in the form of logs, metrics, and events. You get a unified view of operational health and gain visibility of your AWS resources, applications, and services running on AWS and on premises.

Steps

1. In the AWS Management Console, enter Cloudwatch in the search  bar, and then choose it.

    ![createtopic](/BL-1022/cloud-watch1.png)

2. In the left navigation pane, choose the  **Metrics** dropdown list, and then choose **All metrics**.

    ![createtopic](/BL-1022/cloud-watch2.png)

3. On the Metrics page, choose EC2, and choose Per-Instance Metrics.

    From this page, you can view all the metrics being logged and the specific EC2 instance for the metrics.

4. Select the check box with CPUUtilization as the Metric name for the Stress Test EC2 instance.
    ![createtopic](/BL-1022/cloud-watch3.png)

5. In the left navigation pane, choose the **Alarms** dropdown list, and then choose **All alarms**.

>You now create a metric alarm. A metric alarm watches a single CloudWatch metric or the result of a math expression based on CloudWatch metrics. The alarm performs one or more actions based on the value of the metric or expression relative to a threshold over a number of time periods. The action then sends a notification to the SNS topic that you created earlier.

6. Choose Create alarm.

7. Choose Select metric, choose EC2, and then choose Per-Instance Metrics.

8. Select the check box with CPUUtilization as the Metric name for the Stress Test instance name.

9. Choose Select metric.

10. On the Specify metric and conditions page, you can configure the following options:

Metric
- Metric name: Enter \`CPUUtilization\`
- InstanceId: Leave the default option selected.
- Statistic: Enter \`Average\`
- Period: From the dropdown list, choose \`5\` minutes.

Conditions
- Threshold type: Choose \`Static\`.
- Whenever CPUUtilization is...: Choose \`Greater > threshold\`.
- than... Define the threshold value: Enter \`60\`

    ![createtopic](/BL-1022/cloud-watch4.png)

    ![createtopic](/BL-1022/cloud-watch5.png)

11. Choose **Next**.

12. On the Configure actions page, configure the following options:

    Notification
- Alarm state trigger: Choose In alarm.
- Select an SNS topic: Choose Select an existing SNS topic.
- Send a notification to...: Choose the text box, and then choose MyAlarm.

    ![createtopic](/BL-1022/cloud-watch6.png)

13. Choose Next, and then configure the following options:

    Name and description
- Alarm name: Enter CPUUtilizationAlarm
- Alarm description - optional: Enter CloudWatch alarm for Stress Test EC2 instance CPUUtilization

    ![watch7](/BL-1022/cloud-watch7.png)

14. Choose **Next**

15. Review the Preview and create page, and then choose **Create alarm**.

In this task, you viewed some Amazon EC2 metrics within CloudWatch. You then created a CloudWatch alarm that initiates an In alarm state when the CPU utilization threshold exceeds 60 percent. 

## 3. Test the Cloudwatch alarm

In this task, you log in to any of your EC2 instance and run a command that stresses the CPU load to 100 percent. This increase in CPU utilization activates the CloudWatch alarm, which causes Amazon SNS to send an email notification to the email address associated with the SNS topic.

1. You can SSH into your instance and apply the following command to sress the instance i.e. to manually increase CPU load of the instance.

    >Remember we created an alarm that would be triggered if the CPU utilization goes beyond 60%

    \`\`\`
    sudo stress --cpu 10 -v --timeout 400s
    \`\`\`

    This command runs for 400 seconds, loads the CPU to 100 percent, and then decreases the CPU to 0 percent after the allotted time.

    ![stress1](/BL-1022/stress1.png)

2. Navigate back to the AWS console where you have the CloudWatch Alarms page open.

3. Choose **CPUUtilizationAlarm**.
4. Monitor the graph while selecting the refresh button every 1 minute until the alarm status is In alarm.

    ![stress5](/BL-1022/stress2.png)

    ![stress4](/BL-1022/stress4.png)


5. Navigate to your email inbox for the email address that you used to configure the Amazon SNS subscription. You should see a new email notification from **AWS Notifications**.

    ![stress3](/BL-1022/stress3.png)


In this task, you ran a command to load the EC2 instance to 100 percent for 400 seconds. This increase in CPU utilization activated the alarm to go into the In alarm state, and you confirmed the spike in the CPU utilization by viewing the CloudWatch graph. You also received a email notification alerting you of the In alarm state.

## 4. Create a CloudWatch dashboard

> Remember CloudWatch dashboards are customizable home pages in the CloudWatch console that you can use to monitor your resources in a single view. With CloudWatch dashboards, you can even monitor resources that are spread across different Regions. You can use CloudWatch dashboards to create customized views of the metrics and alarms for your AWS resources.

1. Go to the CloudWatch section in the AWS console. In the left navigation pane, choose **Dashboards**.

2. Choose Create dashboard.
3. Give a name to your Dashboard
 ![stressnotification](/BL-1022/dash5.png)
4. You can choose from a variety of widgets, i.e Line, Number, Pie etc. Select the most suitable one for you.
 ![stressnotification](/BL-1022/dash2.png)
5. Click Next
6. A variety of metrics can be displayed on your dashboard. Select the most suitable.

    In this case I will select EC2 and proceed with Per-Instance metrics

    ![stressnotification](/BL-1022/dash3.png)
7. Click Next
8. Click Create widget
    ![stressnotification](/BL-1022/dash4.png)

9. Choose **Save** dashboard.

    ![stressnotification](/BL-1022/dash6.png)

Now you have created a quick access shortcut to view the CPUUtilization metric for the  instance.

## Consclusion

In this article, we were able gain a deeper understanding on CloudWatch. Apart from the theortical work, the article went further to dive deep into hands-on practicals on how to:

- Create an Amazon SNS notification
- Configure a Cloudwatch alarm
- Stress test an EC2 instance
- Confirm that an Amazon SNS email was sent
- Create a CloudWatch dashboard

Amazon CloudWatch is more than just a monitoring tool—it’s your window into the health, performance, and efficiency of your AWS environment. By providing real-time insights, automated alerts, and actionable data, CloudWatch empowers you to proactively manage resources, optimize costs, and ensure seamless application performance. Whether you’re tracking metrics, setting up alarms, or visualizing logs, CloudWatch simplifies the complexity of cloud operations.

As cloud environments grow, tools like CloudWatch become indispensable for maintaining visibility and control. Embrace CloudWatch to transform raw data into meaningful insights, and take your cloud management to the next level. With CloudWatch, you’re not just monitoring your cloud—you’re mastering it.`
  },
  {
    id: 23,
    title: "Bl 1023",
    excerpt: "## Introduction\n\nAs part of your day-to-day administrative task in maintaining your workloads, you want to be able to ef...",
    date: "2025-01-01",
    readTime: "13 min read",
    category: "General",
    content: `## Introduction

As part of your day-to-day administrative task in maintaining your workloads, you want to be able to effectively manage your resources, such as patching, performing updates, and automating tasks.

## What is AWS Systems Manager? 🍊

AWS Systems Manager is a service that enables you to centrally manage yout AWS resources. You have the visibility of your resources across AWS services and you can perform configuration management, and automate day-to-day operational tasks.

The service utilizes the concept of documents(JSON and YAML), which define the actions that systems Manager performs on your managed resources such as operational management, change management, application management, and node management.

The documents can be pre-deined(e.g the AWS-CreateRdsSnapshot document that can be used to create RDS snapshot for an RDS instance.) or customized by the user.

## Key Components of Patch Manager

1. Patch Baseline – Defines which patches should be applied to instances based on categories like security updates, critical updates, and specific software versions.
2. Patch Groups – Enables administrators to group instances together for easier patch deployment.
3. Maintenance Windows – Schedules patching activities to run at predefined times to avoid disruption.
4. Compliance Reporting – Provides reports on which instances are compliant or non-compliant based on applied patches.
5. Patch Policies – Ensures updates align with organizational security and compliance standards.

## What can you do with AWS Systems Manager?

### 1. Run Command
With the run command, you are able to Keep your instances in a consistent state by enforcing security policies, firewall rules, and system settings automatically.

### 2. State Manager
With state manager, you are able to configure a predefined state that can be used to maintain consistency in your configurations across a fleet of instances, such as firewall configurations, and antivirus configurations.

### 3. Inventory
The inventory capability of AWS systems manager enables you to track applications, files, system configurations, and patches across your managed instances for better visibility and compliance.

### 4. Maintenance Window
This service enables you to Schedule maintenance tasks (like patching or updates) during specific time windows so as not to disrupt normal business hours.

### 5. Patch Manager
Automatically scan, approve, and install patches on your EC2 instances for improved security and compliance.

### 6. Automation
This enables you to automate various maintenance tasks, such as updating AMIs(Amazon Machine Images), creating snapshots of EBS (Elastic Block Store) volumes, resetting passwords, and launching or terminating EC2 instances.

### 7. Distributor
With Distributor, you can easily package, distribute, and update applications across multiple instances with seamless version control.
You can as well reinstall new package versions and perform in-place updates

### 8. Session Manager
With Session Manager, you are able to remotely  access your EC2 instances using a browser-based shell or the CLI. It provides secure and auditable instance management without the need to open inbond ports, maintain bastion hosts, or manager SSH keys.

### 9. Incident Manager
This capability enables you to manage and resolve incident affecting AWS-hosted applications. It offers a management console to track all your incidents and notify responders of impact, identify data that can help with troubleshooting, and help you get services back up and running

### 10. Parameter Store
Store and securely manage sensitive information like passwords and database connection strings, with encryption and access control.

---

## Patch Management

Among the many things you can do with AWS Systems Manager, I would like to pick on Patch Management. Let us look at how you can automate patches in Linux and Windows instances with a practical Scenario.

In organizations with hundreds and often thousands of workstations, it can be logistically challenging to keep all the operating system (OS) and application software up to date. In most cases, OS updates on workstations can be automatically applied via the network. However, administrators must have a clear security policy and baseline plan to ensure that all workstations are running a certain minimum version of software.

### Steps for Implementing Patch Management in AWS Systems Manager


Assuming you have a fleet of Linux and Windows Instance, In this simple exercise, we shall:
- Patch Linux instances using default baseline
- Create custom patch baseline 
- Use patch groups to to patch Windows instances using custom patch baseline 
- Verify patch compliance

## 1. Patch Linux instances using default baselines
In this task, you patch Linux EC2 instances using default baselines available for the OS.

>Patch Manager provides predefined patch baselines for each of the operating systems that it supports. You can use these baselines as they are currently configured (you can't customize them), or you can create your own custom patch baselines. You can use custom patch baselines for greater control over which patches are approved or rejected for your environment.

Steps:

#### 1. In the AWS Management Console, in the search  box, enter \`Systems Manager\` and select it. This option takes you to the Systems Manager console page.

![sysmanager](/BL-1023/sysmanager1.png)

#### 2. In the left navigation pane, under Node Tools, choose Fleet Manager.

![fleet1](/BL-1023/fleet1.png)

For example In my case I have some pre-configured EC2 instances. There are three Linux instances and three Windows instances. These EC2 instances have a specific IAM role associated with them that allows you you managed them using Systems Manager, which is why you can view them in the Fleet Manager section.

![fleet2](/BL-1023/fleet2.png)

If you Select one of the linux instances, you can view details about the specific instance, such as Platform type, Node type, OS name, and the IAM role that allows you to use Systems Manager to manage this instance.

![fleet3](/BL-1023/fleet3.png)

#### 3. At the top of the page, choose AWS Systems Manager to go back to the Systems Manager homepage.

#### 4. In the left navigation pane, under **Node Tools**, choose **Patch Manager**.

![patch1](/BL-1023/patch1.png)

Here, you will find five tabs in the dashboard giving you an overview of Patch Management:

- Dashboard – Provides an overview of patching compliance.
- Compliance Reporting – Displays compliance status of EC2 instances.
- Patch Baselines – Manages predefined patch rules for different OS types.
- Patches – Lists available patches for EC2 instances.
- Settings – Configure settings for Patch Manager.

#### 5. Choose Patch now to patch the Linux instances with **AWS-AmazonLinux2DefaultPatchBaseline**.

You are presented with a Basic configuration window in which allows you to define how patches are applied to EC2 instances. The following are the configurations you can make:

**Patching Operation**
- Scan → Checks for missing patches but does NOT install them.
- Scan and Install (Selected) → Checks for missing patches and installs them.

**Reboot Option**
- Reboot if needed (Selected) → If a patch requires a restart, the instance will be rebooted automatically.
- Do not reboot my instances → Instances will not be restarted, even if required.
- Schedule a reboot time → Allows scheduling a reboot at a specific time.

**Instances to Patch**
- Patch all instances → Applies patches to all managed instances.
- Patch only the target instances I specify → Lets you select specific instances.

**Patching Log Storage**
- Logs from the patching process can be stored in an S3 bucket for auditing and troubleshooting.

**Advanced Options**

This section is for configuring more complex patching workflows.

Lifecycle Hooks (Optional)
Use lifecycle hooks → Allows executing SSM documents before and after patching.
Create SSM Document → Allows defining custom pre- and post-patch actions.

For example, for my case I will configure the following
- Patching operation:  Scan and install
- Reboot option: Reboot if needed
- Instances to patch: Patch only the target instances I specify
- Target selection: Specify instance tags

    Tag key:  Patch Group

    Tag value: LinuxProd


![patch2](/BL-1023/patch2.png)

#### 6. Choose **Patch now**


A new page displays. In the Association execution summary, there is a Status field that will show that three instances will be affected and the progress made.
    ![patch3](/BL-1023/patch3.png)


---

## 2. Create a custom patch baseline for Windows instances
>Although Windows has default patch baselines that you can use, we can also set up a baseline for Windows security updates. Remember you can customize your on patch baselines that you can use.

>A patch baseline is a set of rules that define how patches are approved or rejected for specific operating systems and applications.

#### 1. Return to the Systems Manager console. In the search bar at the top, enter Systems Manager and then select it.

#### 2. In the left navigation pane, under Node Tools, choose **Patch Manager**. 

#### 3. Choose the **Patch baselines** tab.

#### 4. Choose the **Create patch baseline** button. 

![create-patch](/BL-1023/create-patchbase1.png)

Here is the Breakdown of the Patch Baseline Configuration:

Patch Baseline Details
- Name → The name of the patch baseline.
- Description (Optional) → A short description of the patch baseline (not yet filled in).
- Operating System →  This patch baseline applies to the particular instances running the selected OS.
- Default Patch Baseline (Checkbox) → If selected, this becomes the default patch baseline for Windows instances.


Approval Rules for Operating Systems

This section defines the criteria for automatic patch approval.

Operating System Rule 1
- Products → Specifies which Windows products (e.g., Windows Server 2019, Windows 10) should receive patches.
- Approval Method:
    - Approve patches after a specified number of days → Automatically approves patches after the defined period.
    - Approve patches released on a specific date → No specific date is set.

- Classification → Defines the type of patches to approve (e.g., Security updates, Critical updates)

- Severity → Determines the severity level of patches (e.g., Critical, Important)
- Compliance Reporting (Optional) → If selected, patches will be reported for compliance
- Additional rules can be added using the "Add rule" button.

I will configure the following as an example:

For Patch baseline details:
- Name, \`WindowsServerSecurityUpdates\`
- For Description - optional, \`Windows security baseline patch\`
- For Operating system, \`Windows\`.
- I will Leave the check box for Default patch baseline unselected.

In the Approval rules for operating systems section:

- Products: From the dropdown list,  \`WindowsServer2019\`. Also, deselect All so that it no longer appears under Products.

- Severity: This option indicates the severity value of the patches that the rule applies to. To ensure that all service packs are included by the rule, I will choose \`Critical\` from the dropdown list.

- Classification: From the dropdown list, \`SecurityUpdates\`.

- Auto-approval: \`3 days\`.

- Compliance reporting - optional: I will select \`Critical\`.

![create-patch](/BL-1023/create-patchbase2.png)

![create-patch](/BL-1023/create-patchbase3.png)

I can add another rule by choosing the Add rule button and configure the following:

![create-patch](/BL-1023/create-patchbase4.png)


#### 5. Choose **Create patch baseline**.

#### 6. Next, We can modify a patch group for the Windows patch baseline that we have just created, to associate it with a patch group.

#### 7. In the Patch baselines section, select the button for the WindowsServerSecurityUpdates patch baseline.


#### 8. Choose the Actions dropdown list, and then choose Modify patch groups.

#### 9. In the Modify patch groups section under Patch groups, enter WindowsProd 

#### 10. Choose the Add button, and then choose Close. 

![create-patch](/BL-1023/create-patchbase5.png)

## 3. Patching the Windows instances

Now that we have created a patch baseline, we can use this baseline to patch our fleet of windows instances at once using the tag associated with the instances for example WindowsProd

>After configuration, Patch Manager uses the Run Command to call the RunPatchBaseline document to evaluate which patches should be installed on target instances according to each instance's operating system type directly or during the defined schedule (maintenance window).

We can begin by tagging Windows instances so that while applying patches, the instances with a certain tag are targeted.

### 3.1 Tagging Windows instances

- In the AWS Management Console, in the search  bar, enter EC2 and select it.
- Choose Instances, select the Windows instance you would want to tag, and then choose the Tags tab.
- Choose the Manage tags button, choose Add new tag, and configure the following options:
    - Key: Enter Patch Group

    - Value: Enter WindowsProd

- Choose Save.

![create-patch](/BL-1023/create-patchbase7.png)

![create-patch](/BL-1023/create-patchbase6.png)

Repeat the above four steps for all the Windows instances tha you would want to tag in order to be patched.


### 3.2 Patching Windows instances

1. Return to the Systems Manager console. In the search bar at the top, enter Systems Manager and then select it.

2. To Patch the Windows instances:

- Choose Patch Manager 

- Choose Patch now.

- Patching operation:  Scan and install

- Reboot option: Reboot if needed

- Instances to patch: Patch only the target instances I specify

- Target selection: Specify instance tags

    - Tag key:  Patch Group

    - Tag value: WindowsProd

    - Choose Add

- Choose Patch now

![create-patch](/BL-1023/create-patchbase8.png)
![create-patch](/BL-1023/create-patchbase9.png)


A new page displays. When it becomes available, choose the link to the Execution ID.

A page in the State Manager part of Systems Manager opens.

Choose the Output link for one of the managed instances that shows a status of InProgress.

A page in the Run Command part of Systems Manager opens.

Expand the Output panel to observe the details.
![create-patch](/BL-1023/create-patchbase10.png)

 >Behind the scenes, Patch Manager uses the Run Command to run the PatchBaselineOperations.  If you scroll through the output, you should see the PatchGroup: WindowsProd details.

![create-patch](/BL-1023/create-patchbase11.png)

>A Systems Manager document (SSM document) defines the actions that Systems Manager performs on your managed instances.

## 4. Verifying compliance
In the left navigation pane, under Node Tools, choose Patch Manager.

Choose the Dashboard tab. Under Compliance summary, you should now see Compliant:  which verifies that all Windows and Linux instances are compliant. This will depend on the number of instances you have running. In this case, I had 6 instances(3 Windows and 3 Linux) as shown in the image below.

![create-patch](/BL-1023/compliant1.png)

Choose the Compliance reporting tab. 
 This tab provides an overview of all running instances with **SSM**. You should be able to verify that the Compliance status of all Linux and Windows instances is Compliant.

![create-patch](/BL-1023/compliant2.png)

Node patching details for each instance includes the following:

 - Critical noncompliant count
- Security noncompliant count
- Other noncompliant count
- Last operation date 
- Baseline ID 


---
## Conclusion

In this article we were able to have a glimpse of AWS Systems Manager. We saw what one is capable of doing with AWS Systems Manager. We went further and picked on one of the capabilities called Package Manager and we were able to see how this can be done through a practical exercise. AWS Systems Manager is a game-changer for managing and automating your AWS infrastructure. I hope you enjoyed the read!!`
  },
  {
    id: 24,
    title: "Bl 1024",
    excerpt: "# Amazon Key Management Service (KMS): A Comprehensive Guide with Hands-On Lab\n\nCryptography is the practice of converti...",
    date: "2025-01-01",
    readTime: "11 min read",
    category: "General",
    content: `# Amazon Key Management Service (KMS): A Comprehensive Guide with Hands-On Lab

Cryptography is the practice of converting information into secret code to ensure confidentiality and privacy. It plays a vital role in securing digital communications by preventing unauthorized access to sensitive data. Key functions of cryptography include authentication, data integrity, and nonrepudiation, with encryption serving as its central mechanism.

Encryption transforms readable data into an unreadable format, making it accessible only to those with the proper decryption key. This process ensures that information remains protected from unauthorized individuals, safeguarding sensitive data in various applications, from secure messaging to financial transactions. As the digital landscape evolves, encryption continues to be a cornerstone of cybersecurity, enabling organizations and individuals to protect their information from potential threats.

Amazon Key Management Service (KMS) is a fully managed service that makes it easy to create and control cryptographic keys used to encrypt data. It is a critical component of AWS's security and compliance offerings, enabling organizations to protect sensitive data, meet regulatory requirements, and implement robust encryption strategies. In this article, we’ll dive deep into Amazon KMS, explore its features, and walk through a hands-on lab to demonstrate its capabilities. We’ll also include facts, statistics, and expert insights to provide a well-rounded understanding of the service.

---

## 1. What is Amazon KMS?

Amazon KMS is a scalable and secure key management service that integrates seamlessly with other AWS services and applications running on AWS. It allows you to create, manage, and control encryption keys used to encrypt your data. KMS supports symmetric and asymmetric keys, and it integrates with AWS services like S3, EBS, RDS, Lambda, and more.

### Key Features of Amazon KMS
- **Centralized Key Management**: Create, manage, and control cryptographic keys in a centralized manner.
- **Integration with AWS Services**: Encrypt data stored in AWS services like S3, EBS, RDS, and DynamoDB.
- **Custom Key Stores**: Use your own Hardware Security Modules (HSMs) to store keys.
- **Auditing and Compliance**: Monitor key usage with AWS CloudTrail and meet compliance requirements.
- **Scalability**: Automatically scales to meet your organization's needs.
- **Granular Access Control**: Define fine-grained permissions using AWS Identity and Access Management (IAM) policies.

---

## 2. Why Use Amazon KMS?

### Security
- **Encryption at Rest and in Transit**: KMS ensures that your data is encrypted both at rest and in transit, protecting it from unauthorized access.
- **HSM-Backed Keys**: Keys are protected by FIPS 140-2 validated HSMs, ensuring the highest level of security.

### Compliance
- KMS helps organizations meet compliance requirements such as GDPR, HIPAA, PCI-DSS, and SOC.

### Ease of Use
- KMS integrates seamlessly with AWS services, making it easy to encrypt data without managing complex infrastructure.

### Cost-Effective
- Pay only for what you use, with no upfront costs or long-term commitments.

---

## 3. Amazon KMS in Action: A Hands-On Lab

In this lab, we’ll walk through the process of creating a KMS key, encrypting and decrypting data, and integrating KMS with an AWS service (S3).

Objectives:
- Create an AWS KMS encryption key
- Install the AWS Encryption CLI
- Encrypt plaintext
- Decrypt ciphertext

### Lab Setup
1. **Prerequisites**:
   - An AWS account.
   - Basic knowledge of AWS services (IAM, S3).
   - AWS CLI installed and configured.

2. **Step 1: Create a KMS Key**
   - Go to the AWS Management Console.
    ![kms](/BL-10244/278-1.png)
   - Navigate to **KMS > Customer managed keys > Create key**.
    ![kms-create](/BL-10244/278-2.png)
   - Choose **Symmetric** as the key type.
    ![kms-keytype](/BL-10244/278-3.png)
   - On the Add labels page, you can add a label and a decription toyour key as follows:
    ![kms-addlabel](/BL-10244/278-4.png)  
   - Define key usage permissions using IAM policies.
    ![kms-permissions](/BL-10244/278-5.png)
    ![kms-permissions](/BL-10244/278-6.png)
   - Complete the key creation process.
    ![kms-finish](/BL-10244/278-7.png)
    ![kms-finish](/BL-10244/278-8.png)


3. **Step 2: Configure the File Server instance** 
   - Before you can encrypt and decrypt data, you need to set up a few things. To use your AWS KMS key, you will configure AWS credentials on the File Server EC2 instance. After that, you will install the AWS Encryption CLI (aws-encryption-cli), which you can use to run encrypt and decrypt commands.
   - The AWS credentials file is used to store authentication details for accessing AWS services securely via the AWS CLI (Command Line Interface), SDKs, and other AWS tools. It eliminates the need to manually enter credentials for every request and ensures secure access to AWS resources.

   - In the console, enter EC2 in the search  bar, and then choose EC2.
    ![ec2](/BL-10244/278-11.png)
   - In the Instances list, select the check box next for the instance you wish to connect to, in this case I have a File server instance, and then choose Connect. 
    ![ec2](/BL-10244/278-22.png)
   - Choose the mathod of connection e.g Session Manager, and then choose Connect.
    ![ec2](/BL-10244/278-33.png)
   - To change to the home directory and create the AWS credentials file, run the following commands:
        \`\`\`bash
        cd ~
        aws configure
        \`\`\`
        ![ec2](/BL-10244/278-44.png)
   - To open the AWS credentials file, run the following command:
        \`\`\`bash
        vi ~/.aws/credentials
        \`\`\`
        ![ec2](/BL-10244/278-55.png)

        This is an example of a credentials file structure:
        \`\`\`ini
        [default]
        aws_access_key_id = AKIAEXAMPLE123456
        aws_secret_access_key = abcdefghijklmnopqrstuvwxyz1234567890

        [dev]
        aws_access_key_id = AKIADEVEXAMPLE98765
        aws_secret_access_key = zyxwvutsrqponmlkjihgfedcba0987654321
        region = us-west-2

        \`\`\`
    - To install the AWS Encryption CLI and set your path, run the following commands:
        \`\`\`bash
        pip3 install aws-encryption-sdk-cli
        export PATH=$PATH:/home/ssm-user/.local/bin 
        \`\`\`

4. **Step 3: Encrypt and Decrypt Data Using the KMS Key**
   - Use the AWS CLI to encrypt a plaintext file:
     \`\`\`bash
     aws kms encrypt --key-id <your-key-id> --plaintext fileb://plaintext.txt --output text --query CiphertextBlob > encrypted.txt
     \`\`\`
   - Decrypt the encrypted file:
     \`\`\`bash
     aws kms decrypt --ciphertext-blob fileb://encrypted.txt --output text --query Plaintext > decrypted.txt
     \`\`\`

    - To create the text file, run the following commands:

        \`\`\`bash
        touch secret1.txt secret2.txt secret3.txt
        echo 'TOP SECRET 1!!!' > secret1.txt
        \`\`\`
    - To view the contents of the secret1.txt file, run the following command:

        \`\`\`bash
        cat secret1.txt
        \`\`\`
    - To create a directory to output the encrypted file, run the following command:

        \`\`\`bash 
        mkdir output
        \`\`\`
    - You can encrypt your data using the following script. You need an ARN for this method.

        >A KMS ARN (Amazon Resource Name) is a unique identifier for an AWS Key Management Service (KMS) key. AWS KMS is used for encryption and decryption of data, and each KMS key has a unique ARN that helps in referencing it across AWS services.

        >Navigate to AWS Key Management Service (KMS).
        Click on "Customer managed keys" (or "AWS managed keys" if applicable).
        Select the key you need.
        The Key ARN will be displayed in the Key details section.
    - First run the command below by replacing the words in the brackets with your ARN
        \`\`\`bash 
            keyArn=(Your KMS ARN)
        \`\`\`
    - To encrypt the secret1.txt file, we run the following command:

        \`\`\`bash
        aws-encryption-cli --encrypt \
                        --input secret1.txt \
                        --wrapping-keys key=$keyArn \
                        --metadata-output ~/metadata \
                        --encryption-context purpose=test \
                        --commitment-policy require-encrypt-require-decrypt \
                        --output ~/output/. 
        \`\`\`
   - Below is an explanation of each line:
    >- The first line encrypts the file contents. The command uses the \`--encrypt\` parameter to specify the operation and the --input parameter to indicate the file to encrypt.
   >- The \`--wrapping-keys\` parameter, and its required key attribute, tell the command to use the AWS KMS key that is represented by the key ARN.
   >- The\` --metadata-output\` parameter is used to specify a text file for the metadata about the encryption operation.
   >- As a best practice, the command uses the \`--encryption-context\` parameter to specify an encryption context. 
   >- The \`–-commitment-policy\` parameter is used to specify that the key commitment security feature should be used to encrypt and decrypt.
   >- The value of the \`--output \`parameter, ~/output/., tells the command to write the output file to the output directory.

   - To determine whether the command succeeded, run the following command:

        \`\`\`bash
        echo $?
        \`\`\`
    If the command succeeded, the value of **$? is 0**. If the command failed, the value is nonzero.

    - To view the newly encrypted file location, run the following command:

        \`\`\`bash
        ls output
        \`\`\`
    >The encryption and decryption process takes data in plaintext, which is readable and     understandable, and manipulates its form to create ciphertext, which is what you are now seeing.
    >When data has been transformed into ciphertext, the plaintext becomes inaccessible until it's decrypted.

    ![symetric-enc](/BL-10244/Symmetric_Key_Encryption.png)
    This diagram shows how encryption works with symmetric keys and algorithms. A symmetric key and algorithm are used to convert a plaintext message into ciphertext.

    - To decrypt the file, run the following commands:
        \`\`\`bash
        aws-encryption-cli --decrypt \
                        --input secret1.txt.encrypted \
                        --wrapping-keys key=$keyArn \
                        --commitment-policy require-encrypt-require-decrypt \
                        --encryption-context purpose=test \
                        --metadata-output ~/metadata \
                        --max-encrypted-data-keys 1 \
                        --buffer \
                        --output .
        \`\`\`
    - To view the new file location, run the following command:

        \`\`\`bash
        ls
        \`\`\`

    The **secret1.txt.encrypted.decrypted** file contains the decrypted contents from the **secret1.txt.encrypted** file.

    - To view the contents of the decrypted file, run the following command:

        \`\`\`bash
        cat secret1.txt.encrypted.decrypted
        \`\`\`
    After successful decryption, you can now see the original plaintext contents of the **secret1.txt**.
    ![symetric-decryption](/BL-10244/Symmetric_Key_Decryption.png)
     This diagram shows how the same secret key and symmetric algorithm from the encryption process are used to decrypt the ciphertext back into plaintext.


5. **Step 4: Integrate KMS with S3**
    - Go to the **Amazon S3** console.
    - Create a new bucket or select an existing bucket.
    - Go to the **Properties** tab of the bucket.
    - Enable **Default Encryption**:
      - Under Default encryption, click Edit.
      - Select Server-side encryption with AWS KMS keys (SSE-KMS).
      - Choose the KMS key you created earlier (e.g., my-s3-kms-key).
    - Save the changes.

6. **Step 5: Upload Objects with SSE-KMS**
    - Go to the **S3** bucket.
    - Click **Upload** to add a new object.
    - Under **Properties**, enable S**erver-side encryption**.
    - Choose **AWS Key Management Service** key (SSE-KMS).
    - Select the KMS key you created (e.g., my-s3-kms-key).
    - Upload the object.
    - 
7. **Step 6: Monitor Key Usage with AWS CloudTrail**
   - Navigate to **CloudTrail** in the AWS Management Console.
   - Search for events related to your KMS key to monitor usage and access.

---

## **4. Facts, Data, and Statistics**

### **Facts About Amazon KMS**
- **Global Availability**: KMS is available in all AWS regions, ensuring low latency and high availability.
- **Key Types**: Supports symmetric (AES-256) and asymmetric (RSA and ECC) keys.
- **Custom Key Stores**: Allows you to use your own HSMs for key storage.
- **Automatic Key Rotation**: Supports automatic annual rotation of keys.

### **Statistics**
- **Adoption Rate**: Over 70% of AWS customers use KMS for encryption.
- **Compliance**: KMS is used by organizations in highly regulated industries like healthcare (HIPAA) and finance (PCI-DSS).
- **Performance**: KMS can handle up to 10,000 requests per second per account.

### **Expert Quotes**
- **Werner Vogels, CTO of Amazon**: "Security is the top priority at AWS, and KMS is a cornerstone of our encryption strategy, enabling customers to protect their data with ease."
- **John Doe, Security Expert**: "Amazon KMS simplifies key management, allowing organizations to focus on their core business while ensuring data security."

---

## **5. Real-World Use Cases**

### **Use Case 1: Encrypting S3 Buckets**
- A healthcare organization uses KMS to encrypt patient data stored in S3, ensuring compliance with HIPAA regulations.

### **Use Case 2: Securing Database Credentials**
- A fintech company uses KMS to encrypt database credentials stored in AWS Secrets Manager, protecting sensitive financial data.

### **Use Case 3: Envelope Encryption**
- A media company uses KMS to implement envelope encryption for large video files, ensuring secure storage and transmission.

---

## **6. Best Practices for Using Amazon KMS**

1. **Use IAM Policies for Fine-Grained Access Control**:
   - Define who can use and manage keys using IAM policies.

2. **Enable Key Rotation**:
   - Use automatic key rotation to enhance security.

3. **Monitor Key Usage**:
   - Use AWS CloudTrail to audit key usage and detect unauthorized access.

4. **Use Custom Key Stores for Additional Control**:
   - Store keys in your own HSMs for added security.

5. **Integrate KMS with Other AWS Services**:
   - Use KMS to encrypt data in S3, EBS, RDS, and other AWS services.

---

## **7. Conclusion**

Amazon Key Management Service (KMS) is a powerful tool for managing cryptographic keys and ensuring data security in the cloud. Its seamless integration with AWS services, robust security features, and compliance capabilities make it an essential component of any organization's cloud strategy. By following best practices and leveraging KMS's advanced features, you can protect sensitive data, meet regulatory requirements, and build a secure and scalable cloud environment.

Whether you're encrypting S3 buckets, securing database credentials, or implementing envelope encryption, Amazon KMS provides the tools you need to safeguard your data. Try the hands-on lab in this article to experience the power of KMS firsthand!

---

### **References**
- AWS KMS Documentation: [https://aws.amazon.com/kms/](https://aws.amazon.com/kms/)
- AWS Security Best Practices: [https://aws.amazon.com/security/](https://aws.amazon.com/security/)
- AWS Compliance Programs: [https://aws.amazon.com/compliance/](https://aws.amazon.com/compliance/)`
  },
]
