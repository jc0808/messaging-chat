import Chat from "./Chat";
import Sidebar from "./Sidebar";

function Home({ currentUser, onLogOut, chats }) {
    return (
        <div className="home">
            <div className="container">
                <Sidebar currentUser={currentUser} onLogOut={onLogOut} chats={chats} />
                <Chat />
            </div>
        </div>
    )
}

export default Home;