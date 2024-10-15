import React, { useState } from "react"; // Import useState from React
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [open, setOpen] = useState(false);    
    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Shantanu</span>
                        <p>Active now here to dance and vibe all i can.</p>
                    </div>
                    <div className="icons">
                        <img src="./phone.png" alt="" />
                        <img src="./video.png" alt="" />
                        <img src="./info.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="center"></div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." />
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={() => setOpen(!open)} />
                    {<EmojiPicker open={open}/>}
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    );
};

export default Chat;