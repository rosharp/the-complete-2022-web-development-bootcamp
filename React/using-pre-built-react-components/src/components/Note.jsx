import React, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Note(props) {
  const [hovered, setHovered] = useState(false);

  function handleHover() {
    setHovered((prevState) => {
      return !prevState
    })
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {hovered ? <Zoom in={hovered}><Fab onClick={handleClick}><ClearIcon /></Fab></Zoom> : null}

    </div>
  );
}

export default Note;
