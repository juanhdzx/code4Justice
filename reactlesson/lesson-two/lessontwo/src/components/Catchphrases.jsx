import React from 'react';
import ShowCatchphrase from './ShowCatchphrase';

export default function Catchphrases(props) { 
    const catchphrases = [
        {name: "Dyl", catchphrase: "Don't forget to tip your waitress"},
        {name: "Justin", catchphrase: "What's going on!"},
        {name: "Osiel", catchphrase: "O🦭"},
        {name: "Isaac", catchphrase: "👁️Zack"}
      ];
    
    
    return (
        <div>
            {catchphrases.map((catchphrase) => (
                <ShowCatchphrase  name = {catchphrase.name} catchphrase = {catchphrase.catchphrase} />
            ))}
        </div>
    )
}