import { React, useState } from "react";

const AudioContainer = () => {
  const [audio, setAudio] = useState(true);

  const audioClickHandler = () => {
    setAudio((prevState) => !prevState);

    if (audio === true) {
      document.getElementById("music").muted = false;
    } else {
      document.getElementById("music").muted = true;
    }
  };

  return (
    <div className="audio-container">
      <button onClick={audioClickHandler}>
        {audio === true ? "🔇" : "🔊"}
      </button>
      <audio
        hidden
        autoPlay
        muted
        preload="auto"
        src="/audio/berserk-ambient-compressed.mp3"
        id="music"
      />
    </div>
  );
};

export default AudioContainer;
