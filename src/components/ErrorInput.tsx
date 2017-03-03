import * as React from "react";
import { IErrorInput } from "../interfaces/IErrorInput";
import { Input } from "./Input";

export class ErrorInput extends React.Component<IErrorInput, {}> {
  constructor(props: IErrorInput) {
    super(props);
  
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(e:any) {
    e.persist();
    this.props.onChange(e);
  }

  render() {
    return (
      <div>
       <Input 
          classType="error"
          name={this.props.name}
          value={this.props.value}
          onChange={this.onChange} />
      Can't be blank, sorry
      </div>
    );
  }
}
