import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddLocation() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Grid container justify="flex-end" className="spl--pb">
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    <AddIcon /> Add Location
                </Button>
            </Grid>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Location</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <form noValidate autoComplete="off">
                        <TextField
                            margin="dense"
                            id="locationName"
                            label="Location Name"
                            placeholder="Enter location name"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            id="address1"
                            label="Address Line 1"
                            type="text"
                            fullWidth
                            required
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Add Location
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
