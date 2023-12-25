import React, {useEffect, useRef, useState} from 'react';
import MyButton from "../UI/button/MyButton";
import {useDispatch, useSelector} from "react-redux";
import {addMessage, removeMessageAction} from "../../store/messageReducer";


const ChatRightElement = () => {

    const dispatch = useDispatch()
    const messages = useSelector((state) => state.message.message);
    const [inputValue, setInputValue] = useState('');

    const handleAddMessage = () => {
        const message = {
            body: inputValue,
            id: Date.now()
        }
        dispatch(addMessage(message))
        setInputValue('')
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value)

    }
    const removeMessage = (message) => {
        dispatch(removeMessageAction(message.id))
    }

    /////скрол вниз прокрутка
    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        container.scrollTop = container.scrollHeight - container.clientHeight;
    }, [messages]);
    return (
        <div style={{marginLeft:"30px"}}>
            <div ref={containerRef} style={{height: 477, width: 868, overflow: "auto"}}>
                {messages.map((message) =>
                    (<div style={{marginTop:"20px",marginBottom:"20px"}}>
                            <div style={{display:"flex"}}>
                            <div style={{background:"#F2F2F2", display:"flex", justifyContent:"space-between", width:"700px",borderRadius:"30px",padding:"20px"}}>

                            {message.body}
                                <div  style={{background:"#F2F2F2"}}>
                                <MyButton onClick={() => removeMessage(message)}>
                                    <div style={{background:"#F2F2F2"}}>
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-trash" viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                        <path
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                    </svg>
                                    </div>
                                </MyButton>
                                </div>

                            </div>
                                <div style={{marginTop:"40px",marginLeft:"15px"}}>{`${new Date().getHours()}:${new Date().getMinutes()}`}</div>

                            </div>

                        </div>

                    ))}

            </div>
            <div style={{background:"#F2F2F2",borderRadius:"70px"}}>
                <div style={{marginLeft:"19px",display: "flex", alignItems: "center",justifyContent:"space-between",marginRight:"10px"}}>
                    <div style={{display:"flex", alignItems:"center"}}>
                <MyButton>
                    <div style={{background:"#F2F2F2"}}>
                    <svg   width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 23.4375C6.45939 23.4375 1.5625 18.5406 1.5625 12.5C1.5625 6.45939 6.45939 1.5625 12.5 1.5625C18.5406 1.5625 23.4375 6.45939 23.4375 12.5C23.4375 18.5406 18.5406 23.4375 12.5 23.4375ZM12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z" fill="black"/>
                        <path d="M6.69499 14.9487C7.06847 14.7327 7.54639 14.8603 7.76244 15.2338C8.70919 16.8705 10.4768 17.9688 12.5 17.9688C14.5233 17.9688 16.2909 16.8705 17.2376 15.2338C17.4537 14.8603 17.9316 14.7327 18.3051 14.9487C18.6786 15.1648 18.8062 15.6427 18.5902 16.0162C17.3756 18.1158 15.1036 19.5312 12.5 19.5312C9.8965 19.5312 7.62448 18.1158 6.40993 16.0162C6.19388 15.6427 6.3215 15.1648 6.69499 14.9487Z" fill="black"/>
                        <path d="M10.9375 10.1562C10.9375 11.4507 10.2379 12.5 9.375 12.5C8.51206 12.5 7.8125 11.4507 7.8125 10.1562C7.8125 8.86183 8.51206 7.8125 9.375 7.8125C10.2379 7.8125 10.9375 8.86183 10.9375 10.1562Z" fill="black"/>
                        <path d="M17.1875 10.1562C17.1875 11.4507 16.4879 12.5 15.625 12.5C14.7621 12.5 14.0625 11.4507 14.0625 10.1562C14.0625 8.86183 14.7621 7.8125 15.625 7.8125C16.4879 7.8125 17.1875 8.86183 17.1875 10.1562Z" fill="black"/>
                    </svg>
                    </div>
                </MyButton>

                <input style={{background:"#F2F2F2"}}
                    className="myChatInput"
                    placeholder="Write something"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                    </div>
                    <div>
                <MyButton onClick={handleAddMessage}>
                    <div style={{background:"#F2F2F2"}}>
                    <svg  style={{background:"#F2F2F2"}} width="80" height="45" viewBox="0 0 80 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="80" height="45" rx="22.5" fill="#C9F4AA"/>
                        <path d="M52.7711 10.2288C52.9921 10.4498 53.0601 10.7812 52.9441 11.0714L43.8521 33.8012C43.4975 34.6879 42.2881 34.8008 41.7754 33.9952L36.809 26.1909L29.0048 21.2245C28.1991 20.7119 28.312 19.5025 29.1987 19.1478L51.9285 10.0559C52.2187 9.9398 52.5501 10.0078 52.7711 10.2288ZM38.3705 25.7343L42.6844 32.5133L50.0797 14.0251L38.3705 25.7343ZM48.9749 12.9202L30.4866 20.3155L37.2657 24.6294L48.9749 12.9202Z" fill="black"/>
                    </svg>
                    </div>
                </MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatRightElement;