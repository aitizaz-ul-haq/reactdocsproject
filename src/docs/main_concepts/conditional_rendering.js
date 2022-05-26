


// In React, you can create distinct components that encapsulate behavior you need. 
// Then, you can render only some of them, depending on the state of your application.


// Conditional rendering in React works the same way conditions work in JavaScript. 
// Use JavaScript operators like if or the conditional operator to create elements representing the current state, 
// and let React update the UI to match them.

// Consider these two components:

// function UserGreeting(props) {
//    return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// We’ll create a Greeting component that displays either of these components depending on whether a user is logged in:
// function Greeting(props) {
//  const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//        return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

//   const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
// root.render(<Greeting isLoggedIn={false} />);


// While declaring a variable and using an if statement is a fine way to conditionally render a component, 
// sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, 
// explained below.

// Inline If with Logical && Operator
// You may embed expressions in JSX by wrapping them in curly braces. 
// This includes the JavaScript logical && operator. It can be handy for conditionally including an element:






const ConditionalRendering = (props) => {
    const unreadMessages = props.unreadMessages;
    return (
        <>
            <h1>Conditional Rendering</h1>


            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                    <h2>
                        You have {unreadMessages.length} unread messages.
                    </h2>
                }
            </div>

        </>
    );
}

export default ConditionalRendering;