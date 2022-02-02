import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Ro Sharp {year}</p>
    </footer>
  );
}

export default Footer;
