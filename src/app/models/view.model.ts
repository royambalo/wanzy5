import { NoteInsideClass } from './noteInsideClass.model';
import { Data } from '@angular/router';

export interface ViewModel {
  id: string;
  type: number;
  name: string;
  date: Date;
  NoteInsideClass: NoteInsideClass[];
}
