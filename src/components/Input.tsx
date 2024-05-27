import React from "react";
import "../styles/input.scss"

export default function Input({inputText, setInputText}:{inputText: string, setInputText: any}){

    return (
        <div className="input-container">
            <textarea defaultValue={inputText} id="input" onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                setInputText(evt.currentTarget.value);
            }}></textarea> 
        </div>
    )
}