


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





// Embedding Expressions in JSX-------------------------> 
// In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:

const name = 'Josh Parez';
const secondElement = <h1>Hello, {name}</h1>

// You can put any valid JavaScript expression inside the curly braces in JSX.
// For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.

// In the example below, we embed the result of calling a JavaScript function, formatName(user), into an <h1> element.


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const thirdElement = (
    <h1>
      Hello, {formatName(user)}!  </h1>
  );




  // JSX is an Expression Too------------------------------->

  // After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
  // This means that you can use JSX inside of if statements and for loops, assign it to variables, 
  // accept it as arguments, and return it from functions:

//   function getGreeting(user) {
//     if (user) {
//       return <h1>Hello, {formatName(user)}!</h1>;  }
//     return <h1>Hello, Stranger.</h1>;  
//     }




  // Specifying Attributes with JSX---------------------------->
  // You may use quotes to specify string literals as attributes:  

  const fourthElement = <a href="https://www.reactjs.org"> link </a>;

  // You may also use curly braces to embed a JavaScript expression in an attribute:

  //const fifthElement = <img src={user.avatarUrl}></img>;




  // Specifying Children with JSX ------------------------------->
  // If a tag is empty, you may close it immediately with />, like XML:
  // JSX tags may contain children:

  const sixthElement = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );


  // JSX Prevents Injection Attacks-------------------------------->
  // By default, React DOM escapes any values embedded in JSX before rendering them. 
  // Thus it ensures that you can never inject anything that’s not explicitly written in your application. 
  // Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.



  // JSX Represents Objects ---------------------------------------->
  // Babel compiles JSX down to React.createElement() calls.
  // These two examples are identical:

  const seventhElement = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

//   const element = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world!'
//   );

// React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:
// Note: this structure is simplified
// const element = {
//     type: 'h1',
//     props: {
//       className: 'greeting',
//       children: 'Hello, world!'
//     }
//   };

// These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. 
// React reads these objects and uses them to construct the DOM and keep it up to date.

const IntroducingJSX = () => {
    return(
        <>
           {element}
           {secondElement}
           {thirdElement}
           {fourthElement}
           {/* {fifthElement} */}
           {sixthElement}
           {seventhElement}
        </>
    );
}

export default IntroducingJSX;