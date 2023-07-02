import players from "../../data/players"
import VisibilityIcon from "@mui/icons-material/Visibility"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import EditDialog from "./EditDialog"

const Item = (props) => {
  const { player, index } = props
  const { id, name, type } = player

  return (
    <div className={`flex w-full justify-around text-center py-2 ${index % 2 === 0 ? 'bg-neutral-50' : ''}`} >
      <div className="w-1/4">{id}</div>
      <div className="w-1/4">{name}</div>
      <div className="w-1/4">{type}</div>
      <div className="flex gap-2 w-1/4 justify-center">
        <VisibilityIcon />
        <EditDialog />
        <DeleteIcon />
      </div>
    </div >
  )
}

const List = () => {
  return (
    <div className="w-full">
      <div className="flex w-full justify-around font-bold text-center border-botto">
        <div className="w-1/4">Player's ID</div>
        <div className="w-1/4">Name</div>
        <div className="w-1/4">Patron Type</div>
        <div className="w-1/4">Actions</div>
      </div>
      <div className="py-4">
        {players.map((player, index) =>
          <Item key={player.id} player={player} index={index} />
        )}
      </div>
    </div>
  )
}

export default List
