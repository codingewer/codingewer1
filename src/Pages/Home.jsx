import React from "react";
import "./Home.css";
import homeVideo from "../assets/video (1080p).mp4";
import gitlog from "../assets/githublogo.png";
import bilog from "../assets/bilogo.png";
import inlogo from "../assets/inlogo.png";
import instalogo from "../assets/instalogo.png";

function Home() {
  const urls = [
    {
      name: "Bionluk",
      url: "https://bionluk.com/coderingewer",
      iconUrl: bilog,
    },
    {
      name: "Github",
      url: "https://github.com/codingewer",
      iconUrl: gitlog,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/codingewer/",
      iconUrl: instalogo,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/yucelatli/",
      iconUrl: inlogo,
    },
  ];
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="content-item content-one">
          <div className="texts">
            <span style={{ fontWeight: 700 }}>Codin|gewer,</span>
            <span style={{ fontWeight: 400, textWrap: "wrap" }}>
              İhtiyaçlarınıza uygun
            </span>
            <span style={{ fontWeight: 700 }}> Mobil ve Web</span>
            <span style={{ fontWeight: 400 }}>Uygulamaları</span>
          </div >
          <div className="contact-container" >
            <span>Bizimle iletişime geçin;</span>
            <div className="social-links">
              {urls.map((url, index) => (
                <a href={url.url} target="_blank" rel="noreferrer" key={index}>
                  <img src={url.iconUrl} alt={url.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <video preload={"auto"} loop muted autoPlay type={"video/mp4"}>
        <source src={homeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
