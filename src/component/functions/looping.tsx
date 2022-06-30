import React from "react";

type T_looping= {
    name:string,
    hobbies:Array<string>
}


const Looping = ({name,hobbies}:T_looping)=> {
    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {hobbies.map((h)=> {
                    if (h.length > 5){
                        return (
                            <li> {h} </li>
                        )
                    }
                    else{
                        return (
                            <li>error{h} </li>
                        )
                    }
                })}

                {hobbies.map(h=> <li> {h} </li>)}
                {hobbies.filter(e=> e.length > 5)
                    .map(h=> <li> {h} </li>)}

            </ul>
        </div>
    );
}
export default Looping;