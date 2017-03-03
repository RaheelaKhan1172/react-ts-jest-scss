export interface IInput {
  value: string;
  name: string;
  classType?:string;
  onChange: (event: any) => void;
}
