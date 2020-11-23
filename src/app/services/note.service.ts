import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { INote } from '../models/iNote.model';
import { BehaviorSubject } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { ViewModel } from '../models/view.model';
import { NoteInsideClass } from '../models/noteInsideClass.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  iNote = new BehaviorSubject<ViewModel[]>([]);
  iNoteReal = new BehaviorSubject<ViewModel[]>([]);
  constructor(private api: ApiService) {}
  getallNote() {
    let id_array = ['math_1', 'hostory_1', 'hostory_2', 'math_2'];
    // let id_array=[];//הכנה למידע אמיתי
    // this.api.getNotes().subscribe((data:ResponseModel)=>{
    //     id_array= data.data.filter(item=>{
    //     return item.classGroup.id;
    //   })
    // })
    let viewConstData = {
      id: '',
      type: 0,
      name: '',
      date: '',
    };
    this.api.getNotes().subscribe((data: ResponseModel) => {
      let viewData: ViewModel[] = id_array.map((item) => {
        let note_array: NoteInsideClass[] = [];
        data.data.forEach((note: INote) => {
          if (note.classGroup.id === item) {
            viewConstData = {
              id: note.classGroup.id,
              type: note.classGroup.type,
              name: note.classGroup.name,
              date: note.classGroup.date,
            };
            note_array.push({
              name: note.createdBy.name,
              img: note.createdBy.img,
              text: note.text,
              attachments: note.attachments,
            });
          }
        //  return { note_array, viewConstData };
        });
        return {
          id: viewConstData.id,
          type: viewConstData.type,
          name: viewConstData.name,
          date: new Date(viewConstData.date),
          NoteInsideClass: note_array,
        } as ViewModel;
      });
      this.iNoteReal.next(viewData);
      this.iNote.next(viewData);
    });
  }
  filter(index: number) {
    if (+index === -1) {
      this.iNote.next(this.iNoteReal.getValue());
    } else {
      let araay = this.iNote.getValue();
      araay = araay.filter((item) => {
        if (item.type === +index) {
          return item;
        }
      });
      this.iNote.next(araay);
    }
  }
  filterByDate(startDate: Date, endDate: Date) {
    if (endDate !== null) {
      let array = this.iNote.getValue();
      array = array.filter((item) => {
        if (item.date > startDate && item.date < endDate) {
          return item;
        }
      });
      this.iNote.next(array);
    }
  }

  /* *********************** */
  /*     Private Methods     */
  /* *********************** */



}
