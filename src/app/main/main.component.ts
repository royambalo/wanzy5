import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  responsiveBoolien = true;
  resizeObservable$: any;
  resizeSubscription$: any;
  constructor(public noteService: NoteService) {}

  ngOnInit(): void {
    if (window.innerWidth > 1280) {
      this.responsiveBoolien = true;
    } else this.responsiveBoolien = false;

    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((evt) => {
      if (evt.target.screen.width > 1280) {
        this.responsiveBoolien = true;
      } else this.responsiveBoolien = false;
    });
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }
}
