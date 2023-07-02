import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const NewTaskDialog = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        size="small"
        variant="outlined"
        onClick={handleClickOpen}
      >Add Task</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            label="Status"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            label="Type"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            label="Owner"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default NewTaskDialog