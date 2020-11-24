import { Component, Input, OnInit } from '@angular/core';
import { ViewModel } from 'src/app/models/view.model';

@Component({
  selector: 'app-card-desktop',
  templateUrl: './card-desktop.component.html',
  styleUrls: ['./card-desktop.component.scss']
})
export class CardDesktopComponent implements OnInit {
  @Input() classGroup: ViewModel;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }
  onFiles(file: object) {
    console.log(file);
  }
}
