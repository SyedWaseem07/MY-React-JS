# React JS 
## What is React Js
- Facebook encountered a problem that they were unable to show notifications, reactions & show real time data on their website.
- So in 2013 a facebook engineer founded a JS library known as React JS, It was a special library because it can show real time data without loading the page.
- Browser's natural behaviour is to refresh the whole DOM tree even for a single change ans re-render the webpage which is very ineffieceint if there are many changes in website occurring simultaneously .
- But what react does is it makes its own virtual DOM tree using React.createRoot() method and only changes that part of tree which is to be changed instead of changing the whole DOM tree. Causing less DOM tree refreshment, less page reloads and page re-renders

## How React JS
- Create a Component.
- Make data if needed.
- Link data with component.
- Change data when required.
- React will react when data(state) is changed.

## File Structure of React
- Start point is index.html
- For js, start point is main.jsx(vite) or index.js(create-react-app)
- App.jsx is component which is rendered on index.html and the code for rendering component is written in main.jsx(vite) or index.js(create-react-app)
- JS is linked to index.html using react-scripts(create-react-app) and script tag(vite) by eliminating react-scripts which make vite react app lighter than create-react-app
- package.json 
- name, version
- scripts(used for running project, building projects for production).
- dependencies(packages used by our react app like react, react-dom for websites)
- dev-dependencies(are only used for development purpose, they are not included in production)

## Internals of React JS
- Behind the scene, the jsx returned by component is converted into react element using React.createElement() method then this react element is kept in Virtual DOM tree of react using React.createRoot() method, then it DOM tree is rendered using .render() method.

### Virtual DOM
### Fibre
### Reconciliation

## Hooks in react
- One of the major problems of react was UI updation, hooks are used for UI updation and many more things
- Hooks are chunks of code used to perform a particular update or change on UI
- Hooks must be used within functional components
- Hooks must be called at top level of component
- Hooks cannot be component

### useState hook
- return an array which contains a value and updation function
```javascript
let [value, setValue] = useState(initail_value)
```
- setValue(updationValue) is function used to update value as when required.
- useState updates this value on webpage wherever it is used.
- CounterHooks02 folder

### props
- Are used to send and receive data between components
- As component is a function returningf jsx, props are written in parameter list of that function
```javascript
// Component receiving data
function Receiver(props) {
    return (
        <>
            <h1>Received data : {props.sentPrimitives}</h1>
            <h1>Received data : {props.sentObj.name}</h1>
            <h1>Received data : {props.sentArr[2]}</h1>
        </>
    )
}

// Component sending data
function Sender() {
    let obj = {
        name : "React Js",
        year : 2013
    }
    let arr = [10, 20, 30]
    return (
        <Receiver sentPrimitives = "abc" />
        <Receiver sentObj = {obj} />
        <Receiver sentArr = {arr} />
    )
}

// Default values
function Receiver({name, year = 2012}) {
    return (
        <>
            <h1>Received name : {name}</h1>
            <h1>Received year : {year}</h1>
        </>
    )
}
```

## Password Generator
### useEffect(() => {}, [])
- Here callback function will be executed if there is change in values of elements present in dependency list

### useCallback(() => {}, [])
- return a memoized version of callback which only changes if there is a change in input

### useRef(initial value)
- returns a mutable ref object which persist whole lifecycle of component
- ref= ""
- eg :- to link input feild and copy button
- On clicking on copy btn ref_var.current.?select();

### custom hook (currency convertor project)
- useCurrencyInfo :- making api call and  returning the data corressponding to currency

### useParams()
- returns an object of dynamic key value pairs from current URL

### Loader
- Before clicking when we hover on Nav-Link data is fetched and cached to reduce fetching time


## Context API
- Step-1 :- React.createContext()
- Step-2 :- ContextProvider
- Step-3 :- get axcess to context using useContext hook
- Step-4 :- Send and receive data between components