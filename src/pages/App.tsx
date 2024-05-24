import { useState } from "react"
import React from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import "../styles/bigtext.scss"

export default function App(){
    const [inputText, setInputText] = useState("*Hello*");

    return (
        <div className="big-text-container">
            <Input inputText={inputText} setInputText={setInputText}/>
            <Output inputText={inputText} />
        </div>
    )
} 