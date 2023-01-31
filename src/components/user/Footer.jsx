import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Container from "../Container";

export default function Footer() {
  return (
    <div className="footer">
      <div className="bg-secondary shadow-sm shadow-gray-500">
        <Container className="p-2">
          <div className="flex justify-between items-center ">
            <a href="https://linkedin.com/in/lidor-avital-432836247/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-5xl text-white fa-beat"
              />
            </a>
            <p className="text-white xl:text-xl">
              This site created by Lidor Avital &copy; 2023
            </p>
            <a href="https://github.com/AvitalLidor">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-5xl text-white fa-beat"
              />
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}
