import "./Nav.scss";

import { useStore } from "../Stores/store";

import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

function Nav() {
  const { activeSection, setActiveSection } = useStore();
  const [isSticky, setIsSticky] = useState(false);
  const [navTop, setNavTop] = useState(0);

  const scrollY = useWindowScroll()[0].y as number;
  const width = useWindowSize().width as number;

  useEffect(() => {
    // keep track of nav position
    setNavTop(document.getElementById("nav")?.offsetTop as number);
  }, [width]);

  useEffect(() => {
    // control sticky nav
    if (scrollY >= navTop && !isSticky) {
      setIsSticky(true);
    } else if (scrollY < navTop && isSticky) {
      setIsSticky(false);
    }
  }, [scrollY]);

  return (
    <nav id="nav" className={isSticky ? "sticky" : ""}>
      <a href="#" className="logo" title="Sydney Yeh">
        SY
      </a>
      <div className="pages">
        <div
          className={"page " + (activeSection === "home" ? "active" : "")}
          title="highlights"
          onClick={() => setActiveSection("home")}
        >
          Highlights
        </div>
        <div
          className={"page " + (activeSection === "design" ? "active" : "")}
          title="graphic + ui/ux"
          onClick={() => setActiveSection("design")}
        >
          Graphic &amp; UI/UX
        </div>
        <div
          className={"page " + (activeSection === "paint" ? "active" : "")}
          title="paint + sculpture"
          onClick={() => setActiveSection("paint")}
        >
          Paint &amp; Sculpture
        </div>
        <div
          className={"page " + (activeSection === "fashion" ? "active" : "")}
          title="fashion"
          onClick={() => setActiveSection("fashion")}
        >
          Fashion
        </div>
      </div>
    </nav>
  );
}

export default Nav;