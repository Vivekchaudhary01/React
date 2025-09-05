//! REACT 
// MPA: Multi Page Application and SPA: Single Page Application
// Library: Collection of predefined codes.
// framework: Collection of Library.
// Two type of components: 1. Function Based 2. Class Based
// Without node modules we can not run code.
// Package.json contains all the code dependices which is required to run the code.
// when we wnat to install new modules npm go to package.json and check their for installation.

//? Features of React
// 1. Single Page Application
// 2. Declarative in Nature
// 3. Component Based Architecture

// ! Element Creation in React
// ! in same file:
//? createRoot(div).render(<h1>Welcome to React</h1>);

// render is used to anything in UI.
// createRoot is used to build the bridge between index.html and main.jsx.
// In XML we need to have single parent to use. .render(<div><h1>Welcome to react</h1> <h2>Hello World</h2></div>)
// we can not return multiple elements in xml.
// we can stop unnecessary creation of elements like div using fragments. (<><h1>Welcome to react</h1> <h2>Hello World</h2> </>)

// createRoot(div).render(
//     <>
//         <h1>Welcome to react</h1> 
//         <h2>Hello World</h2>
//     </>
// );

// ? We can use fragments into two ways:
{/*
    <></>  -> fragment
    <React.Fragment></React.Fragment>
*/}
// ! using another component
// we create new component and write our code there and export from there.
// And in main.jsx we import that component and call the function using XML <App></App>

// In XML we use pair tag(<App></App>) or self closing Tag(<App/>).

