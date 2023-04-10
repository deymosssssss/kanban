import { Task } from './task';

export interface Section {
  id: number;
  title: string;
  tasks: Task[];
}
