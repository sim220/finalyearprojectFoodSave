import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:tp050239@mail.apu.edu.my">
        <Button>Contact: tp050239@mail.apu.edu.my</Button>
      </a>
    </div>
  );
};

export default Contact;
