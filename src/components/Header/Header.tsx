import { useEffect } from "react";

import { KeyboardArrowDown } from "@mui/icons-material";
import "./Header.scss";

function Header() {
  useEffect(() => {
    updateText();
  }, []);

  // add wavy text animation
  const updateText = () => {
    let delay = 200;
    let h1 = document.getElementById("animated") as HTMLElement;

    if (h1.children.length < 1) {
      h1.innerHTML = h1.innerHTML
        .split("")
        .map((letter) => {
          return `<span>` + letter + `</span>`;
        })
        .join("");

      Array.from(h1.children).forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("wavy");
        }, index * 60 + delay);
      });
    }
  };

  return (
    <div id="header">
      <div id="masthead">
        <h1>Sydney Yeh</h1>
        <p className="subtitle" id="animated">
          Digital Artist, Designer, Sculptor
        </p>
        <a href="#nav" title="Go to main content">
          <KeyboardArrowDown fontSize="large" className="header-icon" />
        </a>
      </div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
