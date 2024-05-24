import "../styles/input.scss"

export default function Input({inputText, setInputText}:{inputText: string, setInputText: any}){

    return (
        <div className="input-container">
            <input type="text" defaultValue={inputText} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setInputText(evt.currentTarget.value);
            }}/>
        </div>
    )
}