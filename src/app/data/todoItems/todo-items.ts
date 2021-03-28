// export class TodoItems {
//   id: number;
//   todo: string;
//   completed: boolean;
//   completeDate: Date;
// }
export class TodoItems {
  constructor(
    public id: number,
    public name: string,
    public completed: boolean,
    public completeDate: Date
  ) {}
}
