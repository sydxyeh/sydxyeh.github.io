import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Gallery from "./components/Gallery/Gallery";
import Projects from "./components/Projects/MyProjects";

import { useStore } from "./components/Stores/store";

function App() {
  const { activeSection } = useStore();

  return (
    <>
      <Header />
      <Nav />
      {activeSection === "design" && <Projects />}
      <Gallery />
    </>
  );
}

export default App;
