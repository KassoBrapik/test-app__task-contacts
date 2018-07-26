import React, { Component } from "react";
import Contact from "./Contact";
import emailImage from "../../images/email.png";
import facebookImage from "../../images/facebook.png";
import linkedinImage from "../../images/linkedin.png";
import githubImage from "../../images/github.png";
import arrowIntoButtonImage from "../../images/arrowIntoButton.png";

class Contacts extends Component {
  render() {
    return (
      <div>
        <h2 className="main-caption">Contact us</h2>
        <Contact
          title="Email"
          imageLogoSrc={emailImage}
          color="#ff123b"
          href={"mailto:egorenkorg@gmail.com"}
          imageButtonSrc={arrowIntoButtonImage}
        />
        <Contact
          title="Facebook"
          imageLogoSrc={facebookImage}
          color="#2161b7"
          href={"https://www.facebook.com/BrapikKasso"}
          imageButtonSrc={arrowIntoButtonImage}
        />
        <Contact
          title="Linked in"
          color="#213b82"
          imageLogoSrc={linkedinImage}
          href={"https://www.linkedin.com/in/ruslanyehorenko/"}
          imageButtonSrc={arrowIntoButtonImage}
        />
        <Contact
          title="Git hub"
          color="#ffffff"
          imageLogoSrc={githubImage}
          href={"https://github.com/KassoBrapik"}
          imageButtonSrc={arrowIntoButtonImage}
        />
      </div>
    );
  }
}

export default Contacts;
