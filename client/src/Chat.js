import Input from "./Input";
import Messages from "./Messages";

function Chat() {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Mark</span>
                <div className="chatIcons">
                    <h3>profile</h3>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat;