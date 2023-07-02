import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Header from "../components/playerInfo/Header"
import List from "../components/playerInfo/List"
import Footer from "../components/playerInfo/Footer"

const PlayerInfo = () => {
  return (
    <div className="my-8">
      <Card>
        <CardContent>
          <Header />
          <List />
          <Footer />
        </CardContent>
      </Card>
    </div>
  )
}

export default PlayerInfo