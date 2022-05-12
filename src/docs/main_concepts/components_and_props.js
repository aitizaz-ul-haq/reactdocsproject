

// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 
// This page provides an introduction to the idea of components.

// Conceptually, components are like JavaScript functions. 
// They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.




// Function and Class Components------------------------------------>
// The simplest way to define a component is to write a JavaScript function:

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
// This function is a valid React component because it accepts a single “props” (which stands for properties)
// object argument with data and returns a React element.
// We call such components “function components” because they are literally JavaScript functions.  




// Rendering a Component---------------------------------------------->
// However, elements can also represent user-defined components:

const element = <Welcome name="Sara" />;

// Let’s recap what happens in this example:
// 1. We call root.render() with the <Welcome name="Sara" /> element.
// 2. React calls the Welcome component with {name: 'Sara'} as the props.
// 3. Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
// 4. React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>




// Composing Components------------------------------------------------>
// Components can refer to other components in their output. 
// This lets us use the same component abstraction for any level of detail. 
// A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

// Typically, new React apps have a single App component at the very top. 
// However, if you integrate React into an existing app, you might start bottom-up with a small component 
// like Button and gradually work your way to the top of the view hierarchy.





// Extracting Components------------------------------------------------->
// Don’t be afraid to split components into smaller components.

const ComponentsAndProps = () => {
    return(
        <>
           {element}
        </>
    );
}

export default ComponentsAndProps;