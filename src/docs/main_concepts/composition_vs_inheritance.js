

// React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.

// In this section, we will consider a few problems where developers new to React often reach for inheritance,
// and show how we can solve them with composition.


// Containment
// Some components don’t know their children ahead of time. 
// This is especially common for components like Sidebar or Dialog that represent generic “boxes”.

// We recommend that such components use the special children prop to pass children elements directly into their output:
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