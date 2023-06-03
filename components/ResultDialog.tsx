import {
  DialogTitle,
  Dialog,
  Button,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import PredictionType from "../types";

export default function ResultDialog({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: any;
  data: PredictionType | undefined;
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {data ? "Results" : "Error"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {data
              ? data.atRisk
                ? "You are at risk of PCOS"
                : "You are not at risk of PCOS"
              : "Something went wrong. Please try again later."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
