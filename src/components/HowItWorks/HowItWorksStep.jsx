import React, { Component } from "react";
import arrowImage from "../../images/arrow-bottom.png";

class HowItWorksStep extends Component {
  state = {
    show: false
  };

  arrowToggle = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    const { title, imageSrc, color, children } = this.props;
    const styleLogo = {
      backgroundColor: color,
      backgroundImage: `url(${imageSrc})`
    };

    return (
      <div
        className={this.state.show ? `step active` : `step`}
        onClick={this.arrowToggle}
      >
        <div className="step-header">
          <div className="step-header-logo">
            <div className="step-header-logo__img" style={styleLogo} />
            <h3 className="step-header-logo__title">{title}</h3>
          </div>
          <img
            src={arrowImage}
            alt=""
            style={this.state.show ? { transform: "rotate(180deg)" } : null}
          />
        </div>
        {this.state.show ? (
          <div className="step-content">{children}</div>
        ) : null}
      </div>
    );
  }
}

export default HowItWorksStep;
