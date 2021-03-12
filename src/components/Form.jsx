import React, {useRef} from 'react'

const Form = ({setTasks}) => {
    const inputRef = useRef(null);
    const handleSaveTask = (e) => {
        e.preventDefault();
        if(!inputRef.current.value) return;
        setTasks((prev)=> [...prev, inputRef.current.value]);
    };

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button type="button" onClick={handleSaveTask}>Send</button>
        </div>
    )
}

export default Form
