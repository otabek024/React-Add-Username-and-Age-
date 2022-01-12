import React from "react";
import Card from "./Card";
import Button from "./Button";
import "../../App.css";

const ErrorModule = (props) => {
  return (
    <div className="modal">
      <div className="backdrop" onClick={props.onConfirm} />
      <Card>
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="footer">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModule;
