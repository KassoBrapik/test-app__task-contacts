import React, { Component } from "react";
import HowItWorksStep from "./HowItWorksStep";
import setupImage from "../../images/setup.png";
import runupImage from "../../images/runup.png";
import secretsImage from "../../images/secrets.png";
import standartCompilationImage from "../../images/standartCompilation.png";

class HowItWorks extends Component {
  render() {
    return (
      <div>
        <h2 className="main-caption">Test APP</h2>
        <HowItWorksStep
          title="How to setup"
          imageSrc={setupImage}
          color="#1367d7"
        >
          <p>
            <span className="step-content__title">Step 1:</span>git clone
            https://github.com/KassoBrapik/test-app__task-contacts
          </p>
          <p>
            <span className="step-content__title">Step 2:</span>cd
            test-app__task-contacts
          </p>
          <p>
            <span className="step-content__title">Step 3:</span>yarn install
          </p>
        </HowItWorksStep>
        <HowItWorksStep
          title="How to Run App"
          imageSrc={runupImage}
          color="#24b1e7"
        >
          <p>
            <span className="step-content__title">Step 1:</span>yarn start
          </p>
        </HowItWorksStep>
        <HowItWorksStep
          title="Standart Compliant"
          color="#00c2a5"
          imageSrc={standartCompilationImage}
        >
          <p>Some information</p>
        </HowItWorksStep>
        <HowItWorksStep title="Secrets" color="#ecbf00" imageSrc={secretsImage}>
          <p>This project was created by "create-react-app"</p>
        </HowItWorksStep>
      </div>
    );
  }
}

export default HowItWorks;
