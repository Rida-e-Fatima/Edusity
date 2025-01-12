import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          quia beatae saepe deleniti autem tenetur incidunt aliquid libero eaque
          quidem sunt voluptatibus voluptatem. Vitae a est libero impedit
          officia magnam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          laudantium consequuntur quidem cumque aliquam non expedita beatae
          tempore amet! Blanditiis excepturi atque consequatur laudantium quos
          rem fuga nihil repellat facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ex, sed
          ad, beatae excepturi aliquid nisi qui iste maxime laboriosam ea
          explicabo, rerum a nam esse dignissimos dicta ipsam ipsa.
        </p>
      </div>
    </div>
  );
};

export default About;
