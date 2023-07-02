import { CssBaseline } from "@mui/material"
import Container from "@mui/material/Container";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlayerInfo from "./pages/PlayerInfo";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container className="bg-neutral-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player-info" element={<PlayerInfo />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
