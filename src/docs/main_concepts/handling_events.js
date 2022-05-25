


// Handling events with React elements is very similar to handling events on DOM elements. 
// There are some syntax differences:

// 1 => React events are named using camelCase, rather than lowercase.
// 2 => With JSX you pass a function as the event handler, rather than a string.

// For example, the HTML:
// <button onclick="activateLasers()">
//    Activate Lasers
// </button>

// is slightly different in React:

// <button onClick={activateLasers}>
//     Activate Lasers
// </button>

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("an event has been handled");
}


const HandlingEvents = () => {
    return (
        <>
            <h1>Handling events</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">submit</button>
            </form>
            <form onSubmit={(e) => { e.preventDefault(e); console.log("second event handled....") }}>
                <button type="submit">submit</button>
            </form>
        </>

    );
}

export default HandlingEvents;