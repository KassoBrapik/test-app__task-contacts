import React, { Component } from "react";

class Contact extends Component {
  state = {
    isActive: false
  };

  render() {
    const { title, imageLogoSrc, imageButtonSrc, color, href } = this.props;
    const styleLogo = {
      backgroundColor: color,
      backgroundImage: `url(${imageLogoSrc})`
    };
    const styleButton = {
      backgroundImage: `url(${imageButtonSrc})`
    };

    return (
      <div className="step">
        <div className="step-header">
          <div className="step-header-logo">
            <div className="step-header-logo__img" style={styleLogo} />
            <h3 className="step-header-logo__title">{title}</h3>
          </div>
          <a
            href={href}
            className={
              this.state.isActive
                ? `step-header__button active`
                : `step-header__button`
            }
            target="_blank"
          >
            {this.props.title === "Email" ? "Contact us" : "Visit page"}
            <span className="arrowIntoButton" style={styleButton} />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
