import React from 'react';

export default function ShowCatchphrase(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.catchphrase}</h1>
        </div>
    )
}