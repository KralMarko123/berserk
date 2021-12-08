import { React, useState, useEffect } from "react";
import ImageContainer from "./ImageContainer";
import AudioContainer from "./AudioContainer";
import Quote from "./Quote";
import "../styles/App.css";

const pictureURLS = [
  "/images/guts.jpg",
  "/images/griffith.jpg",
  "/images/casca.jpg",
  "/images/skull-knight.jpg",
  "/images/schierke.jpg",
  "/images/pippin.jpg",
  "/images/godot.jpg",
  "/images/rickert.jpg",
  "/images/judeau.jpg",
  "/images/corkus.jpg",
  "/images/zodd.jpg",
  "/images/puck.jpg",
  "/images/farnese.jpg",
  "/images/serpico.jpg",
  "/images/vargas.jpg",
  "/images/charlotte.jpg",
  "/images/horse.jpg",
];

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

  {
    src: "/images/puck.jpg",
    name: "Puck",
    quote:
      "The Elfin King graces you with his presence! Bow your heads, you plebs!",
    color: "greenyellow",
  },

  {
    src: "/images/farnese.jpg",
    name: "Farnese De Vandimion",
    quote:
      "Black Swordsman...No, Hawk of Darkness. I swear I will catch you personally! I swear it on my faith!",
    color: "lightpink",
  },

  {
    src: "/images/serpico.jpg",
    name: "Serpico",
    quote:
      "To be perfectly frank... I am thinking how nice it would be if you died.",
    color: "lightsalmon",
  },

  {
    src: "/images/vargas.jpg",
    name: "Vargas",
    quote: "I want you to cut him into little pieces... that demon!",
    color: "darkolivegreen",
  },

  {
    src: "/images/charlotte.jpg",
    name: "Princess Charlotte",
    quote: "Sir Griffith, my betrothed, and leader of the band of the hawk...",
    color: "darkorchid",
  },

  {
    src: "/images/horse.jpg",
    name: "Demon Horse",
    quote: "...",
    color: "goldenrod",
  },
];

const App = () => {
  const [index, setIndex] = useState(0);
  pictureURLS.forEach((picture) => {
    const img = new Image();
    img.src = picture;
  });

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
  }, [index, pictureURLS]);

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
