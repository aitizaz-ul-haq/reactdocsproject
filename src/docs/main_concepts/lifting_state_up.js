
// Often, several components need to reflect the same changing data.
// We recommend lifting the shared state up to their closest common ancestor.Let’s see how this works in action.

// In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. 
// This is called “lifting state up”. 

// There should be a single “source of truth” for any data that changes in a React application. 
// Usually, the state is first added to the component that needs it for rendering. 
// Then, if other components also need it, you can lift it up to their closest common ancestor. 
// Instead of trying to sync the state between different components, you should rely on the top-down data flow.

// Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, 
// it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can 
// change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject 
// or transform user input.

// i did not understood the example in docs since the code was class based but this you tuber better described it in the video.
// https://www.youtube.com/watch?v=GStKM1PQkmI

// i have implemented this youtubers code to better understand what is "lifting the state up"

// lifting state up is transferring data "state" from child to parent according to the youtuber

import User from "../../components/user";

const parentAlert = (data) => {

    console.log(data);
    alert(data.name);
}


const LiftingTheStateUp = () => {




    return (
        <>
            <h1>Lifting the State Up....</h1>
            <User alert={parentAlert} />
        </>
    );
}

export default LiftingTheStateUp;