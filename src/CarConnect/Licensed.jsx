import { useState } from "react";
import "./Licensed.css";

import overImg from "../assets/bmw/over.png";
import frontImg from "../assets/bmw/front.png";
import BackImg from "../assets/bmw/back.png";
import WindoImg from "../assets/bmw/win.webp";
import SideImg from "../assets/bmw/side.png";
import engineImg from "../assets/bmw/engine.png";
import steeringImg from "../assets/bmw/steering.png"
import brakeImg from "../assets/bmw/brake.png"

import overImg2 from "../assets/BMW2/overview.avif";
import frontImg2 from "../assets/BMW2/front.avif";
import backImg2 from "../assets/BMW2/back.avif"
import sideImg2 from "../assets/BMW2/side.avif"
import logoImg2 from "../assets/BMW2/logo.jpg";

import overImg3 from "../assets/Rolls Roys/overview.webp"
import frontImg3 from "../assets/Rolls Roys/Front.webp"
import backImg3 from "../assets/Rolls Roys/back.webp"
import sideImg3 from "../assets/Rolls Roys/side.webp"
import logoImg3 from "../assets/Rolls Roys/logo.webp"


export default function Licensed() {
  const [selectedCar, setSelectedCar] = useState("");
  const [activeSection, setActiveSection] = useState("overview");

  const carData = {
    bmw: {
      overview: {
        text: "BMW is a German luxury brand.",
        image: overImg,
      },
      front: {
        text: "BMW Front Design",
        image: frontImg,
      },
      back: {
        text: "BMW Back Design",
        image: BackImg,
      },
      window: {
        text: "BMW Window Design",
        image: WindoImg,
      },
      side: {
        text: "BMW Side View",
        image: SideImg,
      },
      engine:{
        text: "Engien",
        image: engineImg,
      },
      steering:{
        text: " Steering",
        image: steeringImg,
      },
      brake:{
        text:"brake",
        image:brakeImg
      }
    },

  
    bmw2: {
      overview: {
        text: "rolss Overview",
        image: overImg2,
      },
      front: {
        text: "BMW2 Front",
        image: frontImg2,
      },
      back: {
        text: "BMW2 Back",
        image: backImg2,
      },
      window: {
        text: "BMW2 Window",
        image: logoImg2,
      },
      side: {
        text: "BMW2 Side",
        image: sideImg2,
      },
    },
    
    rolls_royce: {
      overview: {
        text: "BMW2 Overview",
        image: overImg3,
      },
      front: {
        text: "Rolls2 Front",
        image: frontImg3,
      },
      back: {
        text: "Rolls Back",
        image: backImg3,
      },
      window: {
        text: "Rolls Window",
        image: logoImg3,
      },
      side: {
        text: "BMW2 Side",
        image: sideImg3,
      },
    },

  };
return (
  <div>
    <div className="topBar">
      <select
        value={selectedCar}
        onChange={(e) => {
          setSelectedCar(e.target.value);
          setActiveSection("overview");
        }}
      >
        <option value="">Select Car</option>
        <option value="bmw">BMW</option>
        <option value="bmw2">BMW2</option>
        <option value="rolls_royce">Rolls Royce</option>
      </select>
    </div>

    
    {!selectedCar ? (
      <div className="selectPage">
        <h1 className="selectpagetext"><span>Click</span> to Explore Car Details”</h1>
    
      </div>
    ) : (
      
      <div className="container">
        <div className="CarDetails">
          <img
            src={carData[selectedCar][activeSection].image}
            alt={activeSection}
            className="carImage"
          />
          <p>{carData[selectedCar][activeSection].text}</p>
        </div>

        <div className="verticalNav">
          {["overview", "front", "back", "window", "side" ,"engine" ,"steering" , "brake"].map(
            (section) => (
              <div
                key={section}
                className={`dot ${
                  activeSection === section ? "active" : ""
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </div>
            )
          )}
        </div>
      </div>
    )}
  </div>
);

}
