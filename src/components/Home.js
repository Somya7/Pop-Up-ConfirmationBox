import { React, useState } from "react";

import { Button } from "@material-ui/core";
import Dailog from "./Dailog/DailogBox";
export default function Home() {
  const [dialog, setDialog] = useState({ isOpen: false });

  return (
    <div>
      <h1>The Dialog popup is the resusable Component</h1>
      <h2>Click on below button to see pop up</h2>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setDialog({ isOpen: true });
        }}
      >
        Close
      </Button>
      <Dailog dialog={dialog} setDialog={setDialog}></Dailog>
    </div>
  );
}
