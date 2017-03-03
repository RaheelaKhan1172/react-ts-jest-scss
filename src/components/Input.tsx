import * as React from "react";

import { IInput } from "../interfaces/IInput";

export class Input extends React.Component<IInput, {}> {
  constructor(props: IInput) {
    super(props);

    this.onChange = this.onChange.bind(this); //'this' = undefined if not bound
  }

  onChange(event:any) {
    event.persist();
    this.props.onChange(event);
  }
  
  render() {
    return (
      <input className={this.props.classType? this.props.classType  : "inp"}
        type="text"
        value={this.props.value}
        name={this.props.name}
        onChange={this.onChange} />
    );
  }
}
