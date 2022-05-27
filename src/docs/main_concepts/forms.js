
import React, { useState } from 'react';
import "../../styling/formStyling.css";


// HTML form elements work a bit differently from other DOM elements in React, 
// because form elements naturally keep some internal state. 
//For example, this form in plain HTML accepts a single name:

{/* <form>
    <label>
        Name:
        <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
</form> */}

// This form has the default HTML form behavior of browsing to a new page when the user submits the form.
// If you want this behavior in React, it just works.But in most cases, it’s convenient to have a JavaScript 
// function that handles the submission of the form and has access to the data that the user entered into the form.
// The standard way to achieve this is with a technique called “controlled components”.


// Controlled Components
// In HTML, form elements such as <input>, <textarea>, 
// and <select> typically maintain their own state and update it based on user input. 
// In React, mutable state is typically kept in the state property of components, and only updated with setState().

// We can combine the two by making the React state be the “single source of truth”.
//  Then the React component that renders a form also controls what happens in that form on subsequent user input. 
// An input form element whose value is controlled by React in this way is called a “controlled component”.

// better understanding of forms is in this video on youtube because in docs they use class based code 
// https://www.youtube.com/watch?v=8hU0I8rY4u4&t=299s
// the following code is from the youtuber from his git repo i have tried to simulate that youtuber how to 
// create forms in react because they are controlled




const Forms = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = (event) => {
        setValues({ ...values, firstName: event.target.value })
    }

    const handleLastNameInputChange = (event) => {
        setValues({ ...values, lastName: event.target.value })
    }

    const handleEmailInputChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.firstName && values.lastName && values.email) {
            setValid(true);
        }
        setSubmitted(true);
    }



    return (
        <div class="form-container">
            <form class="register-form" onSubmit={handleSubmit}>
                {/* Uncomment the next line to show the success message */}
                {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}
                <input
                    onChange={handleFirstNameInputChange}
                    value={values.firstName}
                    id="first-name"
                    class="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                />
                {/* Uncomment the next line to show the error message */}
                {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
                <input
                    onChange={handleLastNameInputChange}
                    value={values.lastName}
                    id="last-name"
                    class="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                />
                {/* Uncomment the next line to show the error message */}
                {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
                <input
                    onChange={handleEmailInputChange}
                    value={values.email}
                    id="email"
                    class="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                {/* Uncomment the next line to show the error message */}
                {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}
                <button class="form-field" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Forms;