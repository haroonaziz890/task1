import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Divider.css"; // ✅ Correct CSS Import

function DividerMenu() {
  return (
    <div className="divider-container">
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Select Option
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">
            🔹 <strong>What is your Name?</strong> <br />
            Please enter your full name as per your official documents.
          </Dropdown.Item>

          <Dropdown.Item eventKey="2">
            🆔 <strong>What is your ID?</strong> <br />
            Kindly provide your government-issued identification number.
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item eventKey="3">
            ✅ <strong>Confirm Selection</strong> <br />
            Once you verify the information, click here to confirm your details.
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DividerMenu;
