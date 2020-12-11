import React from 'react';

function GithubResults(props) {
    return(
        <div>
            <h4>Name for {props.github.name}</h4>
            <p>Username: {props.github.login}</p>
            <p>Location: {props.github.location}</p>
            <p>Bio: {props.github.bio}</p>
        </div>
    )
}

export default GithubResults;