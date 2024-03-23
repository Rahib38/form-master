import { useState } from "react";


const SimpleForm = () => {
const [email, setEmail]=useState(null)
const [name, setName]=useState(null)
const [password, setPassword]=useState(null)
const [error, setError]=useState(null)
    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
        } else {
            setError('')
        }
        console.log(name,email,password);
       
}
    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value)
}
    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value)
}
    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value)
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name='name' /><br />
                <input onChange={handleEmailChange} type="email" name="email" id="" /><br />
                <input onChange={handlePasswordChange} type="password" name="password" required/><br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{ error}</p>
                }
            </form>
        </div>
    );
};

export default SimpleForm;