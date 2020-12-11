import React, { useState } from 'react';
import axios from 'axios';
import GithubResults from '../GithubResults'

function Github() {
    const [username, setUsername] = useState('');
    const [github, setGithub] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = `https://api.github.com/users/${username}`
        axios.get(url)
        .then(result => {
            //set state
            setGithub(result.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Find a Github Profile</h2>
                {github ? <GithubResults github={github} /> : null }
                <label htmlFor='username'>Username: </label>
                <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} />
                <input type="submit" value="Find Github" />
            </form>
        </div>
    )
}

export default Github;