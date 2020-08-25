import React from "react";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";
export default function Fab() {
  return (
    <>
      <a href="#home">
        <div className="my-fab-wrapper" id="fab-icon">
          <Icon path={mdiArrowUp} size={1.3} className="my-fab" color="white"></Icon>
        </div>
      </a>
    </>
  );
}
