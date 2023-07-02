import Button from "@mui/material/Button"
import RoomIcon from "@mui/icons-material/Room"
import AddIcon from "@mui/icons-material/Add"
import SearchIcon from "@mui/icons-material/Search"
import InputBase from "@mui/material/InputBase"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import TrackDialog from "./TrackDialog"

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-bold text-3xl">Player Information</div>
        <div className="flex gap-2">
          <TrackDialog />
          <Button className="flex items-baseline gap-2" variant="contained" size="small">
            <div>Add</div>
            <AddIcon fontSize="small" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2 my-4">
        <div className="bg-neutral-100 px-4 flex items-center w-full">
          <InputBase className="w-full" placeholder="Search" />
          <SearchIcon />
        </div>
        <div>
          <FilterAltIcon />
        </div>
        <Select size="small" defaultValue={5}>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </div>
    </div>
  )
}

export default Header
