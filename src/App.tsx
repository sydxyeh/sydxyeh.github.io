import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Gallery from "./components/Gallery/Gallery";
import Projects from "./components/Projects/MyProjects";

import { useStore } from "./components/Stores/store";
import { VerticalAlignTop } from "@mui/icons-material";
import { useWindowScroll } from "@uidotdev/usehooks";

function App() {
  const { activeSection } = useStore();
  const scrollY = useWindowScroll()[0].y as number;

  return (
    <>
      <Header />
      <Nav />
      {activeSection === "design" && <Projects />}
      <Gallery />
      <a
        href="#"
        id="to-top"
        title="to top"
        className={scrollY > 400 ? "visible" : ""}
      >
        <VerticalAlignTop />
      </a>
    </>
  );
}

export default App;
