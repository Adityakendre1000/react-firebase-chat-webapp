import "./chatList.css"
import { useState } from "react"

const ChatList = () => {
    const [addMode,setAddMode] = useState(false)
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="/search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add" 
                onClick={()=>setAddMode((prev) => !prev)}/>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" className="" />
                <div className="texts">
                    <span>Shantanu</span>
                    <p>Hey! How are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" className="" />
                <div className="texts">
                    <span>Shantanu</span>
                    <p>Hey! How are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" className="" />
                <div className="texts">
                    <span>Shantanu</span>
                    <p>Hey! How are you?</p>
                </div>
            </div>
        </div>
    );
};

export default ChatList