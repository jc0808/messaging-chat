import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";
function Sidebar({ currentUser, onLogOut, users }) {
    return (
        <div className="sidebar">
            <Navbar currentUser={currentUser} onLogOut={onLogOut} />

            <Search />

            <Chats users={users} />
        </div>
    )
}

export default Sidebar;