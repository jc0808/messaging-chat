

function Chats({ users }) {


    const displayChats = users.map(user => {
        return (
            <div key={user.id} className="userChat">
                <img src="https://cdn1.vectorstock.com/i/1000x1000/51/95/businessman-avatar-cartoon-character-profile-vector-25645195.jpg" alt="profile"></img>
                <div className="userChatInfo">
                    <span>{user.firstName}</span>
                    <p>HEllo</p>
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