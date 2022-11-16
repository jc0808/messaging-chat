import Chat from "./Chat";
import Sidebar from "./Sidebar";

function Home({ currentUser, onLogOut, users }) {
    return (
        <div className="home">
            <div className="container">
                <Sidebar currentUser={currentUser} onLogOut={onLogOut} users={users} />
                <Chat />
            </div>
        </div>
    )
}

export default Home;