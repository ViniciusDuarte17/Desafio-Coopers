// export type createTask = {
//   id: string;
//   title: string;
//   status?: boolean;
// };


export type task = {
  id: string;
  title: string;
  status?: number;
};

export type createTaskDTO = {
  title: string;
  status?: number
};
