import { React } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core/";

export default function DailogBox(props) {
  const { dialog, setDialog } = props;
  function closeTab() {
    window.open("about:blank", "_self");
    window.close();
  }
  return (
    <div>
      <Dialog open={dialog.isOpen}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <Typography variant="h6">Do you want to leave this page !!</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" onClick={closeTab}>
            Yes
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setDialog({ isOpen: false })}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
