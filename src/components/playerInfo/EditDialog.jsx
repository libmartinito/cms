import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import FaceIcon from "@mui/icons-material/Face";
import EditIcon from "@mui/icons-material/Edit";
import playerInfo from "../../data/player-info";
import Button from "@mui/material/Button";

const EditDialog = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <EditIcon className="cursor-pointer" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <div className="flex justify-between items-center mt-4 mx-6">
          <div className="font-bold text-2xl">Player Site Information</div>
          <CloseIcon className="cursor-pointer mr-4" onClick={handleClose} />
        </div>
        <DialogContent>
          <div className="flex gap-8 my-4 mx-6">
            <div className="text-center">
              <FaceIcon sx={{ fontSize: 160 }} className="border-solid border-2 border-neutral-800 rounded-md my-4" />
              <div className="flex text-left justify-between my-1">
                <div>
                  <div className="text-xs text-neutral-400">Player Name</div>
                  <div>John Doe</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Player ID</div>
                  <div>000001</div>
                </div>
              </div>
              <div className="text-left my-1">
                <div className="text-xs text-neutral-400">Email</div>
                <div>john.doe@admin.com</div>
              </div>
              <div className="text-left my-1">
                <div className="text-xs text-neutral-400">Mobile Number</div>
                <div>+63 912 345 6789</div>
              </div>
            </div>
            <div>
              {playerInfo.map(info =>
                <div key={info.item} className="flex gap-4 py-2">
                  <div className="w-1/2 shrink-0">{info.item}</div>
                  <div className="w-1/2 shrink-0">{info.value}</div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full text-center">
            <Button variant="contained" size="small">Edit Player Information</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditDialog