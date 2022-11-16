
function Navbar({ currentUser, onLogOut }) {

    function handleLogOut() {
        fetch('/logout ', {
            method: "DELETE"
        })
            .then(() => onLogOut());
    }
    return (
        <div className="navbar">
            <span className="logo">Application Name</span>
            <div className="user">
                <img src="" alt=""></img>
                <span>{currentUser ? currentUser.firstName : "need to log in"}</span>
                <button onClick={handleLogOut}>Log out</button>
            </div>
        </div>
    )
}

export default Navbar;