import React from 'react';

export default function Function(props) {
    return (
        <div>
            <h1>{props.type}</h1>
            <p>{props.size}</p>
            <h3>{props.price}</h3>
        </div>
    )
}