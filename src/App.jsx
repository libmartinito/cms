import { CssBaseline } from "@mui/material"
import Container from "@mui/material/Container";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container className="bg-neutral-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
