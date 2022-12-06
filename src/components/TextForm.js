import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("text converted to uppercase","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("text converted to lowercase","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }
    const handleClearClick = () => {
        setText("");
        setFindWord("");
        setCountFindWord(0);
        props.showAlert("text cleared","success");
    }
    const handleFindClick = (event) => {
        setFindWord(event.target.value);
        setCountFindWord(0);
        let textArray = text.split(" ");
        textArray.forEach((word) => {
            if (word === event.target.value) {
                setCountFindWord(countFindWord + 1)
            }
        })
    }
    const handlePrintClick =()=>{
        let backUp = document.body.innerHTML;
        document.body.innerHTML = text;
        window.print();
        document.body.innerHTML = backUp;

    }
    const handleCopyClick =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","success");

    }
    const removeExtraSpaces =()=>{
        let nextText = text.split(/[ ]+/)
        setText(nextText.join(" "));
        props.showAlert("extra spaces removed","success");

    }
    const [findWord, setFindWord] = useState("");
    const [countFindWord, setCountFindWord] = useState(0);
    const [text, setText] = useState("");
    // text = "Enter text here"; // Wrong way to change the state
    // setText("Enter text here2"); // Correct way to change the state
    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.theme==='light'?'dark':'light'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.theme} text-${props.theme==='light'?'dark':'light'}`} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.theme} mx-1 my-1 border`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.theme} mx-1 my-1 border`} onClick={handleLowClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.theme} mx-1 my-1 border`} onClick={handleClearClick}>Clear All</button>
                <button className={`btn btn-${props.theme} mx-1 my-1 border`} onClick={handlePrintClick}>Print</button>
                <button className={`btn btn-${props.theme} mx-1 my-1 border`} onClick={handleCopyClick}>Copy Text</button>
                <button className={`btn btn-${props.theme} mx-1 my-1 border`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <input className="form-control my-3" type="text" onChange={handleFindClick} value={findWord} placeholder="Type to find a occurrence of a word" aria-label="default input example" />
            </div>
            <div className={`container my-3 text-${props.theme==='light'?'dark':'light'}`}>
                <h2>Your text summery</h2>
                <p>'{findWord}' appeared {countFindWord} times</p>
                <p>{text.length>0?text.split(" ").length:0} words and {text.length} characters</p>
                <p>{text.split(" ").length * 0.008} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
            </div>
        </>
    )
}