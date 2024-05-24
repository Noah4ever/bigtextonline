import React from "react";
import Char from "./Char";
import "../styles/output.scss"
import { useEffect, useRef } from "react";


export default function Output({inputText}:{inputText: any}){

    const chars: string[] = [...inputText];

    const charWidthToHeightRatio: number = 1.6;
    const minFontSize:number = 450;
    const fontSize = useRef<number>(Math.min(window.innerWidth / inputText.length * charWidthToHeightRatio, minFontSize));
    window.addEventListener(
        "resize", ()=>{
            fontSize.current = Math.min(window.innerWidth / inputText.length * charWidthToHeightRatio, minFontSize)
        }
    )
    console.log("adasd")

    return(
        <div className="output-container">
            <div className="char-list" style={{fontSize: fontSize.current}}>
            {
                chars.map((char: string, index: number)=>{
                    return(
                        <Char key={`${char}_${index}`} char={char} index={index}/>
                    )
                })
            }
            </div>
        </div>
    )
}