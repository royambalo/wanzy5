import { Component, Input, OnInit } from '@angular/core';
import { ViewModel } from 'src/app/models/view.model';

@Component({
  selector: 'app-card-mobile',
  templateUrl: './card-mobile.component.html',
  styleUrls: ['./card-mobile.component.scss']
})
export class CardMobileComponent implements OnInit {
  @Input() classGroup: ViewModel;
  panelOpenStateMobile: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.panelOpenStateMobile = new Array(
      this.classGroup.NoteInsideClass.length
    );
  }
  onFiles(file: object) {
    console.log(file);
  }

}
