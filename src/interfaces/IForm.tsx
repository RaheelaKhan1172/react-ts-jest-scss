export interface FormState {
  email:string,
  password:string,
  invalid: boolean
}

export interface FormModel {
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
}
