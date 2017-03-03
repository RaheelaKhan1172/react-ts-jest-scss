import * as React from "react";

import { FormState } from "../interfaces/IForm";
import { Button } from "./Button";
import { Input } from "./Input";
import { ErrorInput } from "./ErrorInput";

export class Form extends React.Component<{}, FormState> {
  //field, not prop
  public invalid:{email:boolean, password:boolean};

  constructor(props: any) {
    super(props);
    this.state = { email:"", password:"",invalid:false };

    this.invalid = {email:false, password:false}; 

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(event: any) {
    const name = event.target.name;
    this.setState((prevState) => ({
      [name]: event.target.value
    }));
  }

  onSubmit(event: any) {
    event.preventDefault();
    if (!this.state.email) {
      this.invalid.email = true;
    } else {
      this.invalid.email = false;
    } 
    if (!this.state.password) {
      this.invalid.password = true;
    } else {
      this.invalid.password = false;
    }

    if (this.invalid.password || this.invalid.email) {
      this.setState( () => ({
        invalid:true
      }));

    } else {
    this.setState( () => ({
      invalid:false
    }));
    }
  }

  render() {
    let passwordInput:any = null;
    let emailInput:any = null;

    if (this.state.invalid) {
      emailInput = ( this.invalid.email ? 
        <ErrorInput
            name="email"
            value={this.state.email}
            onChange={this.onChange} /> :
        <Input
          value={this.state.email}
          name="email"
          onChange={this.onChange} /> );
  
      passwordInput = ( this.invalid.password ? 
        <ErrorInput
          name="password"
          value={this.state.password}
          onChange={this.onChange} /> :
        <Input
          name="password"
          value={this.state.password}
          onChange={this.onChange} /> );
    } else {
      emailInput = <Input
          value={this.state.email}
          name="email"
          onChange={this.onChange} />;
      passwordInput = <Input
          name="password"
          value={this.state.password}
          onChange={this.onChange} />;
    }
    
    return (
      <div>
        <form className="form">
          <legend className="Fz(24px) C(#424242) Lh(20px) Mb(20px)"> Sign In </legend>
          <div className="textfield">
            { passwordInput }
            <label className="labels">Password</label>
          </div>
          <div className="textfield">
            { emailInput }
            <label className="labels">Email</label>
          </div>
          <Button
            onClick={this.onSubmit} />
       </form>
    </div>
    );
  }
}

