import React from "react";
import { Buffer } from "buffer";


export default function AudioElem(props) {

    let audioLink = "";

    if (props.phoneticWord != "Selected Word") {
        audioLink = "https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/voiceName=Salma22k?inputText=" + Buffer.from(props.phoneticWord).toString("base64");
    }

    function audioClick() {
        document.getElementById("audio-player").play()
    }


    return (
        <span className="audio-box">
            <audio id="audio-player"
                src={audioLink}>
            </audio>
            <button className="audio-button" onClick={audioClick}>
                🔊
            </button>
        </span>
    )
}