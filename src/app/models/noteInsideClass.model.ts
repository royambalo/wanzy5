import { IFile } from './iFile.model';

export interface NoteInsideClass {
  name: string;
  img: string;
  text: string;
  attachments: IFile[];
}
