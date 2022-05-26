import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/simerjit-sagoo-080154204";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dwpaou7is/image/upload/v1650270284/avatars/WhatsApp_Image_2022-04-18_at_4.15.38_PM_nquoqb.jpg"
              alt="Founder"
            />
            <Typography>Simerjit Kaur Sagoo</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a food management website made for my final year project.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Get in Touch</Typography>
            <a
              href="https://www.linkedin.com/in/simerjit-sagoo-080154204"
              target="blank"
            >
              <LinkedIn className="linkedInSvgIcon" />
            </a>

            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
