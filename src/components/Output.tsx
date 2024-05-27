import React, { useEffect, useState } from "react";
import Char from "./Char";
import "../styles/output.scss"


export default function Output({inputText}:{inputText: string}){

    const chars: string[] = [...inputText];

    const charWidthToHeightRatio: number = 1.3;
    const minFontSize: number = 10;
    const maxFontSize: number = 450;

    const [fontSize, setFontSize] = useState<number>(calcFontSize());

    function clamp(num: number, min: number, max: number): number { return Math.min(Math.max(num, min), max) };
    function calcFontSize(): number { return clamp(minFontSize, window.innerWidth / inputText.length * charWidthToHeightRatio, maxFontSize) }
    function handleFontSize() { setFontSize(calcFontSize()); }

    useEffect(()=>{
        window.addEventListener("resize", () => { handleFontSize() });
    }, []);

    useEffect(()=>{
        handleFontSize();
    }, [inputText]);

    // Function to create character lines
    function createCharLines(): React.ReactNode[] {
        // Initialize variables
        let newLines: number = 1;
        let ret: React.ReactNode[] = [];
        let charIndex: number = 0;

        // Loop through the number of new lines
        for(let i = 0; i < newLines; i++) {
            // Initialize children array for each line
            let children: React.ReactNode[] = [];

            // Loop through the characters
            for(let charI = 0; charI < chars.length; charI++) {
                // Skip characters that have already been processed
                if(charI < charIndex) continue;

                // Increment character index
                charIndex++;

                if(chars[charI] === "\n") {
                    newLines++;
                    break;
                }

                // Push the Char component to the children array
                children.push(
                    <Char key={`${chars[charI]}_${charI}`} char={chars[charI]} index={charI}/>
                );
            }

            // Create a div with the children and push it to the return array
            let div = <div className="char-line" style={{fontSize: fontSize}}>{children}</div>;
            ret.push(div);
        }

        // Return the array of divs
        return ret;
    }
    
    return(
        <div className="output-container">
            {createCharLines()}
        </div>
    )
}