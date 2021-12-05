import { React, useState } from "react";

const AudioContainer = () => {
  const [audio, setAudio] = useState(true);

  const audioClickHandler = () => {
    setAudio((prevState) => !prevState);

    if (audio === true) {
      document.getElementById("music").play();
      document.getElementById("music").muted = false;
    } else {
      document.getElementById("music").pause();
      document.getElementById("music").muted = true;
    }
  };

  return (
    <div className="audio-container">
      <button onClick={audioClickHandler}>
        {audio === true ? "🔇" : "🔊"}
      </button>
      <audio hidden muted id="music">
        <source src="/audio/berserk-ambient-compressed.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default AudioContainer;
