import React, { ChangeEvent, Dispatch, forwardRef, KeyboardEvent, SetStateAction } from "react";
import './style.css';

interface Prpos{
    label: string;
    type: 'text' | 'password';
    placeholder : string;
    value : string;
    setValue : Dispatch<SetStateAction<string>>;
    error : boolean;

    icon ?: string;
    onButtonClick ?: () => void;
    message?: string;
    onKeyDown ?: (event : KeyboardEvent<HTMLInputElement>) => void;

}

const InputBox = forwardRef<HTMLInputElement, Prpos> ((props : Prpos,ref) => {

    const {label,type,placeholder,value,error,icon,message} = props;
    const {setValue,onButtonClick,onKeyDown} = props;
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setValue(value);
    }

    const onKeyDownHandler = (event : KeyboardEvent<HTMLInputElement>) => {
        if(!onKeyDown) return;
        onKeyDown(event);
    }

    return(
        <div className="inputbox">
            <div className="inputbox-label">{label}</div>
            <div className={error ? "inputbox-container-error" : "inputbox-container"}>
                <input ref={ref} type={type} className="input" placeholder={placeholder} value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
                {onButtonClick !== undefined && 
                <div className="icon-button">
                    {icon !== undefined && 
                    <div className={`icon ${icon}`}></div>
                    }
                </div>
                }
            </div>
            {message !== undefined && <div className="inputbox-message">{`비밀번호 8자리`}</div>}
        </div>
    )

});

export default InputBox;