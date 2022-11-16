

function Chats({ chats, currentUser }) {


    const displayChats = chats.map(chat => {
        const chatLength = chat.messages.length
        return (
            <div key={chat.id} className="userChat">
                <img src="https://cdn1.vectorstock.com/i/1000x1000/51/95/businessman-avatar-cartoon-character-profile-vector-25645195.jpg" alt="profile"></img>
                <div className="userChatInfo">
                    <span>{chat.users.find(user => user.id !== currentUser.id).firstName}</span>
                    <p>{chat.messages[chatLength - 1].content}</p>
                </div>
            </div>
        )
    })


    return (
        <div>
            {displayChats}
        </div>
    )
}

export default Chats;