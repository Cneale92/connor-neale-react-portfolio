import connorPhoto from "../assets/IMG_9003.jpg";

import { Link, useLocation } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="aboutHeaderContainer">
        <h2>
          Hi, I&apos;m <strong>Connor Neale</strong>
        </h2>
        <h3 className="sectionSubtitle sectionSubtitleAbout">
          Aspiring Web <Developer></Developer>
        </h3>
        <img
          src={connorPhoto}
          alt="A headshot photo of Connor Neale"
          className="aboutImg"
        ></img>
      </div>
      <div className="aboutText">
        <p className="regularBold">
          I have twelve years of diverse experience across various industries,
          including roles as a cook, cashier, and barista in restaurants.
          Additionally, I've assisted in editing multiple films and have even
          spent time working in the coral and exotic fish industry.
        </p>
        <br></br>
        <p>
          My background in filmmaking has equipped me with a strong eye for
          storytelling and design, which I now apply to creating dynamic web
          applications using the MERN stack.
        </p>
        <br></br>
        <p>
          Feel free to reach out using the links below or through{" "}
          <Link to="/Contact" className="homeLink">
            {" "}
            my contact page.
          </Link>
        </p>
      </div>
    </>
  );
}
