import { useState } from "react";

function InputForm({setUser}){
    const [username, setUsername] = useState('');
    const handleChange = (event) =>{
        setUsername(event.target.value);
    };
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const url = `https://api.github.com/users/${username}`;
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
    };
    const clear = () =>{
        setUsername('');
        setUser(null);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder="username" name="username" id="username" value={username}/>
                <input type="submit"/>
            </form>
            <button onClick={clear}>Clear</button>
        </div>
    );
};
export default InputForm;