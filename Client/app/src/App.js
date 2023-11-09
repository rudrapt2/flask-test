import {useState} from "react";

export default function App(){
    const [value, setValue] = useState(0);
    function handleClick(){
        setValue(value + 1)
    }
    return <button onClick = {handleClick}>{value}</button>
}