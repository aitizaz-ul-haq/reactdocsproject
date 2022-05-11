


// This funny tag syntax is neither a string nor HTML.
const element = <h1>Hello World</h1>

// It is called JSX, and it is a syntax extension to JavaScript. 
// We recommend using it with React to describe what the UI should look like. 
// JSX may remind you of a template language, but it comes with the full power of JavaScript.


// Why JSX? 
// React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the 
// state changes over time, and how the data is prepared for display.

// React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code.
// It also allows React to show more useful error and warning messages.


const IntroducingJSX = () => {
    return(
        <>
        {element}
        </>
    );
}

export default IntroducingJSX;