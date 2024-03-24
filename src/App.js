import React, { useState } from "react";
import "./styles.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bkColor: this.props.bkColor, txtColor: this.props.txtColor, text: this.props.text };
  }
  render() {
    const handlerClick = () => {
      this.props.onClickAct(this.state.bkColor, this.state.txtColor, this.state.text);
    };
    return (
      <button className="Button" onClick={handlerClick} style={{ backgroundColor: this.state.bkColor }}>
        <p style={{ color: this.state.txtColor }}>{this.state.text}</p>
      </button>
    );
  }
}
class DisplayBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bkColor: this.props.bkColor, txtColor: this.props.txtColor };
  }
  render() {
    return (
      <div className="DisplayBlock" style={{ backgroundColor: this.props.bkColor }}>
          <p style={{ color: this.props.txtColor }}>Some text</p>
      </div>
    );
  }
}
export default function App() {
  const [displayBkColor, setDisplayBkColor] = useState("white");
  const [displayTxtColor, setDisplayTxtColor] = useState("black");
  const stateFunc = (newBkColor, newTxtColor) => {
    setDisplayBkColor(newBkColor);
    setDisplayTxtColor(newTxtColor);
  };
  return (
    <>
      <Button bkColor="red" txtColor="green" text="Red" onClickAct={stateFunc} />
      <Button bkColor="green" txtColor="red" text="Green" onClickAct={stateFunc} />
      <Button bkColor="yellow" txtColor="blue" text="Yellow" onClickAct={stateFunc}/>
      <DisplayBlock bkColor={displayBkColor} txtColor={displayTxtColor}/>
    </>
  );
}