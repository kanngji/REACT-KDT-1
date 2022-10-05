import React from "react";
import WelcomeDialog from "./WelcomeDialog";

export default function WelcomeDialogBtn() {
  return (
    <>
      <WelcomeDialog
        content="항상클릭해주세요"
        alertMessage="클릭해주셨군요"
      ></WelcomeDialog>
    </>
  );
}
