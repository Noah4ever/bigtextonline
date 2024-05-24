import "../styles/char.scss"

export default function Char({char, index}:{char: string, index: number}){
    if(char == " "){
        char = "\u00A0"
    }

    function containsSpecialChars(str: string): boolean {
        // Regular expression to match special characters
        const specialChars = /[0-9 `!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]/;
        // Check if the string contains any special characters
        return specialChars.test(str);
    }
    
    return (
        <span className={`char-container ${containsSpecialChars(char) ? "special" : "char"}`}>
            {char}
        </span>
    )
}