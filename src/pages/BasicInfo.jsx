import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

const BasicInfo = () => {
  return (
    <div>
      <div className="my-8 mx-auto">
        <Card>
          <nav>
            <ul className="flex justify-center items-center text-sm gap-2 text-center py-2">
              <li className="font-bold underline">
                Basic Information
              </li>
              <li>
                Sponsorship
              </li>
              <li>
                Markers
              </li>
              <li>
                Playing Results
              </li>
              <li>
                Comps & Promitional Items
              </li>
              <li>
                Barred Location
              </li>
              <li>
                Check History
              </li>
              <li>
                Preferences
              </li>
              <li>
                Notes
              </li>
            </ul>
          </nav>
        </Card>
      </div>
      <div className="my-8">
        <Card>
          <CardContent>
            <div className="py-4 px-6">
              <div className="font-bold text-3xl">Edit Basic Information</div>
              <div className="text-xl mt-8">Player Details</div>
              <div className="flex">
                <div className="flex flex-col gap-4">
                  <div className="border-solid border-2 border-neutral-400 rounded-md flex justify-center items-center w-40 h-40 mt-5">
                    <Button variant="contained" size="small">Upload Image</Button>
                  </div>
                  <div className="border-solid border-2 border-neutral-400 rounded-md flex justify-center items-center w-40 h-20">
                    <Button variant="contained" size="small">Upload Specimen</Button>
                  </div>
                </div>
                <div className="py-2 px-4 w-full">
                  <div className="flex gap-4 justify-between w-full">
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      label="First Name"
                      type="text"
                      variant="standard"
                    />
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      label="Middle Initial"
                      type="text"
                      variant="standard"
                    />
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      label="Last Name"
                      type="text"
                      variant="standard"
                    />
                  </div>
                  <div className="flex gap-4 justify-between">
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      label="Birthdate"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      select
                      label="Civil Status"
                      defaultValue="Single"
                    >
                      <MenuItem value={'Single'}>Single</MenuItem>
                      <MenuItem value={'Married'}>Married</MenuItem>
                      <MenuItem value={'Widowed'}>Widowed</MenuItem>
                    </TextField>
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      select
                      label="Sex"
                      defaultValue="Male"
                    >
                      <MenuItem value={'Male'}>Male</MenuItem>
                      <MenuItem value={'Female'}>Female</MenuItem>
                      <MenuItem value={'Other'}>Other</MenuItem>
                    </TextField>
                  </div>
                  <TextField
                    margin="dense"
                    label="Address"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                  <div className="flex gap-4">
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      label="Nationality"
                      type="text"
                      variant="standard"
                    />
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      select
                      label="Sex"
                      defaultValue="Philippines"
                    >
                      <MenuItem value={'Philippines'}>Philippines</MenuItem>
                    </TextField>
                    <div className="w-1/3"></div>
                  </div>
                  <div className="flex gap-4">
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      select
                      label="ID Type"
                      defaultValue="None"
                    >
                      <MenuItem value={'None'}>-- Select One --</MenuItem>
                      <MenuItem value={'Passport'}>Passport</MenuItem>
                    </TextField>
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      label="ID Number"
                      type="text"
                      variant="standard"
                    />
                    <div className="w-1/3"></div>
                  </div>
                  <div className="flex gap-4">
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      label="Email Address"
                      type="text"
                      variant="standard"
                    />
                    <TextField
                      className="w-1/3"
                      margin="dense"
                      label="Mobile"
                      type="text"
                      variant="standard"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full bg-neutral-200 h-px my-8"></div>
              <div className="text-xl my-8">Casino Information</div>
              <div className="flex gap-4">
                <TextField
                  className="w-1/3"
                  margin="dense"
                  disabled
                  label="Player ID"
                  defaultValue={'000001'}
                />
                <TextField
                  className="w-1/3"
                  margin="dense"
                  select
                  label="Patron Type"
                  defaultValue="VIP"
                >
                  <MenuItem value={'VIP'}>VIP</MenuItem>
                  <MenuItem value={'Player'}>Player</MenuItem>
                </TextField>
                <TextField
                  className="w-1/3"
                  margin="dense"
                  type="text"
                  label="Credit Line"
                />
              </div>
              <div className="flex gap-4">
                <TextField
                  className="w-1/3"
                  margin="dense"
                  type="text"
                  label="Bank Name"
                />
                <TextField
                  className="w-1/3"
                  margin="dense"
                  type="text"
                  label="Checking Account"
                />
                <TextField
                  className="w-1/3"
                  margin="dense"
                  type="text"
                  label="Front Money"
                />
              </div>
              <div className="flex gap-4">
                <TextField
                  className="w-1/3"
                  margin="dense"
                  type="text"
                  label="Front Money"
                />
                <TextField
                  className="w-1/3"
                  margin="dense"
                  type="text"
                  label="Front Money"
                />
                <div className="w-1/3"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default BasicInfo