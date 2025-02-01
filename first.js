import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client"
import CryptoBody from "body"

function Main(){

    return (
        <>
        <div className="headers">
            <h1>Welcome to crypto world where you get real time update of the most hyped currency in this universe</h1>
        </div>
        <CryptoBody></CryptoBody>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main></Main>)
