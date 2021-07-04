import React from 'react'
import '../index.css'
import {useState} from 'react'

function LoginModal({onModalClose}) {

    const [message, setMessage] = useState("");
    var login;
    var password;

    function handleLoginChange (e) {
        login = e.target.value;
    }

    function handlePasswordChange (e) {
        password = e.target.value;
    }

    function checkAuth (login, pass) {
        console.log("LOGIN: " + login);
        console.log("PASSWORD: " + pass);
        if (login === "cci" && pass === "cci") {
            onModalClose(false);
        } else {
            setMessage("Invalid login or password!"); 
        }
    }

    return (
        <div>
            <div className="modalBackground black_background">
                <div className="modalContainer">
                <div className="reg_label label_bold label32 padding32">LOGIN</div>
                        <p className="reg_label">{message}</p>
                        <input className="input_field" placeholder="Login" onChange={handleLoginChange}></input>
                        <input type="password" className="input_field" placeholder="Password" onChange={handlePasswordChange}></input>
                        <button className="input_field margin_top30 reg_label red_background" onClick={(e)=>{checkAuth(login, password)}}>LOGIN</button>
                </div>            
            </div>
        </div>
    )
}

export default LoginModal
