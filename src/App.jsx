import { CssBaseline } from "@mui/material"
import Container from "@mui/material/Container";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlayerInfo from "./pages/PlayerInfo";
import BasicInfo from "./pages/BasicInfo";

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="bg-neutral-50">
        <Container>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player-info" element={<PlayerInfo />} />
            <Route path="/player-info/basic-info" element={<BasicInfo />} />
          </Routes>
        </Container>
      </div>
    </Router>
  )
}

export default App
