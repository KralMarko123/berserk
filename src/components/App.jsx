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
    color: "powderblue",
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
    color: "crimson",
  },
  {
    src: "/images/schierke.jpg",
    name: "Schierke",
    quote:
      "No matter how strong, for a human to fight a monster means he has submerged his humanity and transformed himself into a greater monster.",
    color: "darkgreen",
  },

  {
    src: "/images/pippin.jpg",
    name: "Pippin",
    quote: "Drink.",
    color: "goldenrod",
  },

  {
    src: "/images/godot.jpg",
    name: "Godot",
    quote:
      "If you desire one thing for so long, it’s a given that you’ll miss other things along the way. That’s how it is... that’s life.",
    color: "orangered",
  },

  {
    src: "/images/rickert.jpg",
    name: "Rickert",
    quote: "My leader...isn't the Hawk of Light. Goodbye.",
    color: "deepskyblue",
  },

  {
    src: "/images/judeau.jpg",
    name: "Judeau",
    quote: "You sure do cry a lot...you know.",
    color: "lightslategray",
  },

  {
    src: "/images/corkus.jpg",
    name: "Corkus",
    quote: "Looky here. A woman in hell...? I knew this was a dream.",
    color: "yellow",
  },

  {
    src: "/images/zodd.jpg",
    name: "Zodd",
    quote: "You will face your death. A death you can't escape.",
    color: "maroon",
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
