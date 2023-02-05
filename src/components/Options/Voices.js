import React from "react";
import AudioElem from "../AudioElem";



export default function Voices() {

    return (

        <div className="menu-item">
            <h3>Available Voices</h3>
            <div className="voice-box">
                <div>
                    Leila
                    <AudioElem phoneticWord={"مرحبا اسمي ليلَى"} speakerName="Leila" />
                    <input type="radio" name="radio-group" value="Leila" />
                </div>
                <div>
                    Mehdi
                    <AudioElem phoneticWord={"مرحبا اسمي مَهدِي"} speakerName="Mehdi" />
                    <input type="radio" name="radio-group" value="Mehdi" />
                </div>
                <div>
                    Nizar
                    <AudioElem phoneticWord={"مرحبا اسمي نزار"} speakerName="Nizar" />
                    <input type="radio" name="radio-group" value="Nizar" />
                </div>
                <div>
                    Salma
                    <AudioElem phoneticWord={"مرحبا اسمي سلمَى"} speakerName="Salma" />
                    <input type="radio" name="radio-group" value="Salma" />
                </div>
            </div>
        </div>

    )
}