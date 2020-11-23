import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { classGrade } from '../models/class.const';
import { NativeDateAdapter, DateAdapter } from '@angular/material/core';
import { NoteService } from '../services/note.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  classGrade = classGrade;
  startDate: Date = null;
  endDate = new Date(Date.now());

  constructor(
    dateAdapter: DateAdapter<NativeDateAdapter>,
    private serviceNote: NoteService
  ) {
    dateAdapter.setLocale('he-He');
  }

  ngOnInit(): void {}
  // הכנה לדאטה אמיתי
  // turnToArray(){
  //   this.classGrade=Object.keys(classGrade).map((item)=>{
  //     return item;

  //   })
  // }
  filter(eve) {
    this.serviceNote.filter(eve.value);
  }
  startevent(event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value;
  }
  endevent(event: MatDatepickerInputEvent<Date>) {
    this.endDate = event.value;
    if (this.startDate !== null) {
      this.serviceNote.filterByDate(this.startDate, this.endDate);
    }
  }
}
