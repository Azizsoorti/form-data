import React, { useState } from 'react'

function Login() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fill, setFill] = useState("Please fill the form")


    const submitForm = (e) => {
        e.preventDefault();

        let Name = name;
        let Email = email;
        let Password = password;

        if (name && email, password) { setFill("Form has been submited"); alert(`First Name: ${Name},   Last Name: ${Email},   Password: ${Password}`); }
        setName("");
        setEmail("");
        setPassword("");

    }
    const [mover, setMover] = useState(false)
    function handalMouseOver() {
        setMover(true)

    }
    function handalMouseOut() {
        setMover(false)
    }


    return (
        <div style={{
            width: "350px", height: "400px", backgroundColor: "white", borderRadius: "20px", margin: "100px auto",
            boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"

        }}>
            <p style={{ marginLeft: "8px", color: "red" }}>  {fill}</p>
            <h1 style={{ marginBottom: "20px", textAlign: "center" }} >Login Form</h1>
            <form onSubmit={submitForm}>
                <input value={name} onChange={(e) => { setName(e.target.value) }} style={{ display: "block", width: "100%", borderRadius: "16px", borderColor: "white" }} type="text" placeholder='First Name' />
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} style={{ display: "block", margin: "30px 0", width: "100%", borderRadius: "16px", borderColor: "white" }} type="text" placeholder='Last Name' />
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} style={{ display: "block", width: "100%", borderRadius: "16px", borderColor: "white" }} type="text" placeholder='Password' />
                <button type='Submit'
                    onMouseOver={handalMouseOver}
                    onMouseOut={handalMouseOut}
                    style={{ backgroundColor: mover ? "black" : " #6a11cb", borderRadius: "16px", width: "70%", borderColor: "skyblue", color: "white", margin: "70px 15%" }}>Greet Me</button>
            </form>
        </div>







    )
}

export default Login

