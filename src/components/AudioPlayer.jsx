import { useRef } from "react";

export default function AudioPlayer({ textContent, speakerName }) {
  let audioLink = "";
  const word64 = btoa("asdf");
  const audioElem = useRef();

  if (textContent !== "Selected Word") {
    let queryParams = new URLSearchParams({
      voiceName: `${speakerName}22k`,
      inputText: word64,
    });

    audioLink =
      "https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/" +
      queryParams.toString();
  }

  function audioClick() {
    audioElem.play();
  }

  return (
    <span className="flex items-center content-center">
      <audio ref={audioElem} src={audioLink}></audio>
      <button className="w-full h-full" onClick={audioClick}>
        🔊
      </button>
    </span>
  );
}
