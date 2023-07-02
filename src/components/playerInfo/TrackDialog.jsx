import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import RoomIcon from "@mui/icons-material/Room";
import FaceIcon from "@mui/icons-material/Face";
import siteInfo from "../../data/site-info";

const TrackDialog = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        <div>Track</div>
        <RoomIcon fontSize="small" />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <div className="flex justify-between items-center mt-4 mx-6">
          <div className="font-bold text-2xl">Player Site Information</div>
          <CloseIcon className="cursor-pointer mr-4" onClick={handleClose} />
        </div>
        <DialogContent>
          <div className="flex gap-8 my-4 mx-6">
            <div className="text-center">
              <FaceIcon sx={{ fontSize: 160 }} className="border-solid border-2 border-neutral-800 rounded-md" />
              <div className="my-4">John Doe</div>
            </div>
            <div>
              {siteInfo.map(info =>
                <div key={info.item} className="flex gap-4 py-2">
                  <div className="w-1/2 shrink-0">{info.item}</div>
                  <div className="w-1/2 shrink-0">{info.value}</div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default TrackDialog