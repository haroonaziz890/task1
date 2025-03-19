import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#000",
        color: "white",
        textAlign: "center",
        padding: "20px 10px",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
      }}
    >
      <p>© {new Date().getFullYear()} All Rights Reserved | Designed by <strong>Haroon</strong></p>
      <h2 style={{ marginTop: "10px" }}>✨ THE END ✨</h2>
    </footer>
  );
};

export default Footer;
