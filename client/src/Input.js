function Input() {
    return (
        <div className="input">
            <input type="text" placeholder="Send a Message..."></input>
            <div className="send">
                {/* <img src="" alt="" ></img>
                <input type="file" style={{ display: "none" }} id="file"></input>
                <label htmlFor="file">
                    <img src="" alt=""></img>
                </label> */}
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input;