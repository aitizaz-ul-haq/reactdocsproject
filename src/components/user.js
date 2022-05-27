




const User = (props) => {

    // const name = "atz";
    const data = { name: "atz", email: "hello@gmail.com" }

    return (
        <>
            <div>
                <h2>User Name</h2>
                <button onClick={() => props.alert(data)}>Click me</button>
            </div>

        </>
    );
}

export default User;