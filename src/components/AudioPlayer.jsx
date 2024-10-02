import { useRef } from "react";
import { unicodeToBase64 } from "../../utils/textFormatter";

export default function AudioPlayer({ textContent, speakerName }) {
  let audioLink = "";
  const word64 = unicodeToBase64(textContent);
  const audioElem = useRef();

  if (textContent !== "Selected Word") {
    audioLink =
      "https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/" +
      `voiceName=${speakerName}22k` +
      `?inputText=${word64}`;
  }

  function audioClick() {
    console.log(audioLink);
    audioLink && audioElem.current.play();
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
