// export class TodoItems {
//   id: number;
//   todo: string;
//   completed: boolean;
//   completeDate: Date;
// }
export class TodoItems {
  constructor(
    public id: number,
    public title: string,
    public isCompleted: boolean,
    public createdDate: Date
  ) {}
}
