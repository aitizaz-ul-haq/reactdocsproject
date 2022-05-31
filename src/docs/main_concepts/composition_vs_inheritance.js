

// React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.

// In this section, we will consider a few problems where developers new to React often reach for inheritance,
// and show how we can solve them with composition.


// Containment
// Some components don’t know their children ahead of time. 
// This is especially common for components like Sidebar or Dialog that represent generic “boxes”.

// We recommend that such components use the special children prop to pass children elements directly into their output:

// React elements like <Contacts /> and <Chat /> are just objects, 
// so you can pass them as props like any other data.
// This approach may remind you of “slots” in other libraries but there are no limitations 
// on what you can pass as props in React.

// So What About Inheritance?
// At Facebook, we use React in thousands of components, 
// and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.

// Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit 
// and safe way. 

//Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

// If you want to reuse non-UI functionality between components, 
// we suggest extracting it into a separate JavaScript module. 
// The components may import it and use that function, object, or a class, without extending it.

// i could not understand the language used in the official react docs project 
// so i went on to yourube this youtuber best explained what composition was and why even in facebook they
// prefered the composition over inheritance https://www.youtube.com/watch?v=MSn0UOOGBWU


const Sidebar = (props) => {
    return (
        <>
            {props.children}
        </>
    );
}

const Content = () => {
    return (
        <>
            <h1>Sidebar data 1</h1>
            <h1>Sidebar data 2</h1>
            <h1>Sidebar data 3</h1>
            <h1>Sidebar data 4</h1>
            <h1>Sidebar data 5</h1>
        </>
    );
}


const CompositionVsInheritance = () => {
    return (
        <>
            <h1>Composition vs Inheritance....</h1>
            <Sidebar>
                <Content />
            </Sidebar>
        </>
    );
}

export default CompositionVsInheritance;