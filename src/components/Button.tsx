import * as React from "react";
import { IButton } from "../interfaces/IButton";

export class Button extends React.Component<IButton, {}> {
 constructor(props: IButton) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event:any) {
    this.props.onClick(event); //call function sent from parent (on change)
  } 
  
  render() {
    return (
      <button
        className="tester"
        onClick={this.onClick}>
        Submit
      </button>
    );
  }
}
