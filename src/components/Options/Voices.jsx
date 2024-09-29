import React from "react";
import AudioPlayer from "../AudioPlayer";

export default function Voices() {
  const voiceList = [
    {
      nameEn: "Leila",
      nameAr: "ليلَى",
    },
    {
      nameEn: "Mehdi",
      nameAr: "مَهدِي",
    },
    {
      nameEn: "Nizar",
      nameAr: "نزار",
    },
    {
      nameEn: "Salma",
      nameAr: "سلمَى",
    },
  ];

  const [selectedVoice, setSelectedVoice] = React.useState(
    localStorage.getItem("selectedVoice")
  );

  function changeSelectedVoice(event) {
    setSelectedVoice(event.target.value);
    localStorage.setItem("selectedVoice", event.target.value);
  }

  return (
    <div className="m-3 p-3 font-light">
      <h3 className="font-normal mb-2">Available Voices</h3>
      <div className="flex justify-center">
        {voiceList.map((speaker) => (
          <div className="mx-4">
            {speaker.nameEn}
            <AudioPlayer
              textContent={`مرحبا، اسمي ${speaker.nameAr}`}
              speakerName={speaker.nameEn}
            />
            <input
              className="radio radio-info mx-2"
              type="radio"
              name="radio-group"
              value={speaker.nameEn}
              onChange={changeSelectedVoice}
              defaultChecked={speaker.nameEn === selectedVoice}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
