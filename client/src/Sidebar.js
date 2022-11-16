import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";
function Sidebar({ currentUser, onLogOut, chats }) {
    return (
        <div className="sidebar">
            <Navbar currentUser={currentUser} onLogOut={onLogOut} />

            <Search />

            <Chats chats={chats} currentUser={currentUser} />
        </div>
    )
}

export default Sidebar;