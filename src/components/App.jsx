import { React, useState, useEffect } from "react";
import ImageContainer from "./ImageContainer";
import AudioContainer from "./AudioContainer";
import Quote from "./Quote";
import "../styles/App.css";

const characters = [
  {
    src: "/images/guts.jpg",
    name: "Guts",
    quote: "When you meet your God tell him to leave me alone.",
    color: "red",
  },
  {
    src: "/images/griffith.jpg",
    name: "Griffith",
    quote: "A dream… It’s something you do for yourself, not for others.",
    color: "cyan",
  },
  {
    src: "/images/casca.jpg",
    name: "Casca",
    quote: "You have to go. Even if it's alone... You have to go.",
    color: "orange",
  },
  {
    src: "/images/skull-knight.jpg",
    name: "Skull Knight",
    quote: "I am the foe of the inhumans",
    color: "#900C3F",
  },

  {
    src: "/images/pippin.jpg",
    name: "Pippin",
    quote: "Drink.",
    color: "lightgreen",
  },
];

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let nextIndex;

    if (index === characters.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }

    setTimeout(() => {
      setIndex(nextIndex);
    }, 20000);
  }, [index]);

  return (
    <div className="App">
      <ImageContainer image={characters[index].src} />
      <Quote
        quote={characters[index].quote}
        person={characters[index].name}
        color={characters[index].color}
      />
      <AudioContainer />
    </div>
  );
};

export default App;
