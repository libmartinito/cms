import { CssBaseline } from "@mui/material"
import Container from "@mui/material/Container";
import Navigation from "./components/Navigation";
import Crypto from "./components/Crypto";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-neutral-50">
      <CssBaseline />
      <Container>
        <Navigation />
        <div className="max-w-4xl mx-auto">
          <Crypto />
          <Projects />
        </div>
      </Container>
    </div>
  )
}

export default App
