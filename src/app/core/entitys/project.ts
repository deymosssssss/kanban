import { Section } from './section';

export interface Project {
  id: string;
  title: string;
  sections: Section[];
}
