import { Task } from './task';

export interface Section {
  id: string;
  title: string;
  tasks: Task[];
}
