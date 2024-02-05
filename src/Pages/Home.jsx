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

  const skils = [
    { id: 1, name: "HTML", level: "90%", color: "darkslategrey" },
    { id: 2, name: "CSS", level: "90%", color: "darkslategrey" },
    { id: 3, name: "Javascript", level: "70%", color: "darkslategrey" },
    { id: 4, name: "React", level: "80%", color: "darkslategrey" },
    { id: 4, name: "Go", level: "80%", color: "darkslategrey" },
    { id: 4, name: "Cloud", level: "70%", color: "darkslategrey" },
    { id: 4, name: "React Native", level: "50%", color: "darkslategrey" },
    { id: 4, name: "Java", level: "50%", color: "darkslategrey" },
    { id: 4, name: "Linux", level: "80%", color: "darkslategrey" },
  ];

  const details = {
    id: 1,
    name: "Yucel Atli",
    content: {
      age: "22",
      email: "yatli5645@gmail.com",
      phone: "+90 505 804 48 18",
      github:"https://github.com/codingewer"
    },
  };

  const bio =
 `   
    Hi, I'm Yücel I'm a full stack web developer. I make my websites myself and publish them on my own blult servers.

    I often use Linux and Nginx. I use cloud services such as AWS, Render, VPS servers, GC, etc. I also quickly adapt and use what I do not have knowledge of. 
   
   In addition to the web, I am developing myself in the field of mobile application, artificial intelligence and security, and I aim to bring these three together in the most stable and performant way.
   `;
  const education = [
    {
      id: 1,
      name: "Look me Github:))",
      degree: "",
      year: "",
    }
  ];
  const experience = [
    { id: 1, position: "Freelancer-Full Stack Software Developer", year: "2022" }

  ];
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="content-item content-one">
          <div className="texts">
            <span style={{ fontWeight: 700 }}>Codin|gewer,</span>
            <span style={{ fontWeight: 400, textWrap: "wrap" }}>
            Suitable for your needs
            </span>
            <span style={{ fontWeight: 700 }}> Mobile & Web</span>
            <span style={{ fontWeight: 400 }}>Apps</span>
          </div>
          <div className="contact-container">
            <span>Contact Us;</span>
            <div className="social-links">
              {urls.map((url, index) => (
                <a href={url.url} target="_blank" rel="noreferrer" key={index}>
                  <img src={url.iconUrl} alt={url.name} />
                </a>
              ))}
              <a className="link" href="#cv">My CV</a>
            </div>
          </div>
        </div>
        <div id="cv" className="content-item cv">
          <div className="cv-details">
            <div className="cv-details-item">
              <span className="cv-item-title">{details.name}</span>
              <span className="cv-item-subtitle">Phone:</span>
              <span className="cv-item-parag">{details.content.phone}</span>
              <span className="cv-item-subtitle">Email:</span>
              <span className="cv-item-parag">{details.content.email}</span>
              <span className="cv-item-subtitle">Github:</span>
              <a target="_blank" className="cv-item-parag" href={details.content.github} >{details.content.github}</a>
            </div>
            <div className="cv-details-item">
              <span className="cv-item-title">Bio</span>
              <span className="cv-item-parag">{bio}</span>
            </div>
            <div className="cv-details-item">
              <span className="cv-item-title">Experience</span>
              {experience.map((exp, index) => (
                <div key={index} className="cv-details-item">
                  <span className="cv-item-subtitle">{exp.position}</span>
                  <span className="cv-item-parag">{exp.year}</span>
                </div>
              ))}
            </div>
            <div className="cv-details-item">
              <span className="cv-item-title">Education</span>
              {education.map((edu, index) => (
                <div key={index} className="cv-details-item">
                  <span className="cv-item-subtitle">{edu.name}</span>
                  <span className="cv-item-parag">{edu.degree}</span>
                  <span className="cv-item-parag">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="skils-container">
          <span className="cv-item-title">Skills</span>
            {skils.map((skil, index) => (
              <div key={index} className="skils-item">
                <span>{skil.name} :</span>
                <div
                  style={{ borderColor: skil.color }}
                  className="progress-bar"
                >
                  <div
                    style={{ width: skil.level, backgroundColor: skil.color }}
                    className="inner-bar"
                  ></div>
                </div>
              </div>
            ))}
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
