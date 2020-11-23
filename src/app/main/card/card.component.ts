import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'src/app/models/view.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() classGroup: ViewModel;
  @Input() responsiveBoolien: Boolean;
  panelOpenState = false;
  panelOpenStateMobile: boolean[] = [];
  constructor() {}

  ngOnInit(): void {
    this.panelOpenStateMobile = new Array(
      this.classGroup.NoteInsideClass.length
    );
  }
  onFiles(file: object) {
    console.log(file);
  }
}
