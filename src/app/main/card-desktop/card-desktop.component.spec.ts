import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDesktopComponent } from './card-desktop.component';

describe('CardDesktopComponent', () => {
  let component: CardDesktopComponent;
  let fixture: ComponentFixture<CardDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
